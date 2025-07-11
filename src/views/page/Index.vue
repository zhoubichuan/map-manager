<template>
  <div class="map-page">
    <GaoDeMap :class="className" ref="mapRef" :statrAddress="statrAddress" @drawEnd="handleDrawEnd"
      @mapMounted="handleMapMounted">
      <button @click="handleToCity(city)">指定城市</button><input type="text" v-model="city">
      <button @click="handleToLocal(address)">指定经纬度</button><input type="text" v-model="address">
      <SearchPosition />
      <ControlPanel v-if="type === 'panel'" :type="type" ref="controlPanelRef" :gfid="gfid" :create="startCreate"
        :getMapList="getMapList" :fences="fences" :finishedEdit="finishedEdit" :safeCloseEditor="safeCloseEditor"
        :cancelCreate="cancelCreate">
        <template v-slot="{ show }">
          <MapList v-if="show" :list="fences" :key="fences.length" :getMapList="getMapList"
            :safeCloseEditor="safeCloseEditor" :editFence="startEdit" :delFence="service.delFence" />
        </template>
      </ControlPanel>
    </GaoDeMap>
  </div>
</template>

<script lang="ts" setup>
import ControlPanel from './ControlPanel.vue'
import MapList from './MapList.vue'
import GaoDeMap from "./GaoDeMap.vue";
import SearchPosition from './SearchPosition.vue';
import { ref, reactive, nextTick, computed } from 'vue'
import { safeUpdateMapInstances, safeRemovePolygon, createMap, closeEditor, mouseTool, AMap, validateFence, getCenter } from './utils'
import * as service from '../service'

const emits = defineEmits(['mapMounted'])
const mapRef = ref()
const controlPanelRef = ref()
const fences = reactive([])

const { statrAddress, type, gfid } = defineProps({
  statrAddress: {
    type: Array,
    default: () => [113.539333, 22.242564],
  },
  type: {
    type: String,
    default: 'panel'
  },
  gfid: {
    type: String,
    default: ''
  }
})
const className = computed(() => {
  return ({ 'fence-container': true, 'batch': type === 'view' && !gfid })
})
const city = ref('珠海市')
const address = ref(statrAddress.join(','))
const handleMapMounted = () => {
  emits('mapMounted')
}
const startCreate = (type = 'circle') => {
  if (mapRef.value.mapData.isEditing || mapRef.value.mapData.loading) return;
  mapRef.value.mapData.isCreating = true;
  createMap[type](mapRef.value.mapData)
}
const getMapList = async (params) => {
  const { data: { data } } = await service.queryFence({ gfids: params?.gfids })
  fences.splice(0, fences.length, ...data.results)
  if (params?.gfids) {
    const { shape } = fences[0]
    const value = shape.center ? shape.center : getCenter(shape.points.split(';').map(i => i.split(','))).join(',')
    handleToLocal(value)
  }
  safeUpdateMapInstances(fences, mapRef.value.mapData, () => {
    if (type === 'edit') {
      startEdit(fences[0])
    }
  });
}
const handleDrawEnd = (event) => {
  console.log(mapRef.value.mapData?.currentFence, ' mapRef.value.mapData?.currentFence')
  const { gfid, shape } = mapRef.value.mapData?.currentFence
  if (shape.center) {
    shape.center = shape.center.join(',')
  }
  fences.splice(0, fences.length, {
    type: mapRef.value.mapData.currentFence.type,
    gfid,
    shape
  })
  safeUpdateMapInstances(fences, mapRef.value.mapData, () => {
    startEdit(fences[0])
  });
}
const handleToCity = (city) => {
  mapRef.value.mapData.map?.setCity(city)
}
const handleToLocal = (address) => {
  mapRef.value.mapData.map?.setCenter(address.split(','))
  mapRef.value.mapData.map?.setZoom(16)
}
//编辑完成
const finishedEdit = async (params) => {
  //   mapData.map.remove(fences);
  // 执行编辑器关闭前的确认操作
  if (mapRef.value.mapData.editor) {
    // 获取最终路径
    const finalPath = mapRef.value.mapData.editor.getTarget().getPath();
    var index = fences.findIndex(
      (f) => f.gfid === mapRef.value.mapData.editingFence.gfid
    );
    // 更新数据
    fences[index] = {
      gfid: mapRef.value.mapData.editingFence.gfid,
      path: finalPath.map(i => [i.lng, i.lat]).map(i => i.join(',')).join(';'),
      status: "active",
      data: mapRef.value.mapData.editingFence
    };
  }
  const { desc, gfid, name, shape } = mapRef.value.mapData.editingFence
  if (shape.points) {
    return await service.updatePolygon({
      name: params.name || name,
      desc: params.desc || desc,
      points: fences[index].path,
      gfid
    })
  } else {
    const options = mapRef.value.mapData.editor.getTarget().getOptions()
    let lng, lat
    if (Array.isArray(options.center)) {
      [lng, lat] = options.center
    } else {
      lng = options.center.lng
      lat = options.center.lat
    }
    return await service.updateCircle({
      name: params.name || name,
      desc: params.desc || desc,
      center: [lng, lat].join(','),
      radius: options.radius,
      gfid
    })
  }
  // 强制关闭编辑器
  safeCloseEditor();
  // 刷新地图显示
  nextTick(() => {
    safeUpdateMapInstances.flush();
  });
}
// 安全关闭编辑器
const safeCloseEditor = async () => {
  if (mapRef.value.mapData.isClosing || !mapRef.value.mapData.editor) return;

  mapRef.value.mapData.isClosing = true;
  try {
    closeEditor(mapRef.value.mapData, fences)
  } catch (error) {
    console.error("编辑器关闭异常:", error);
  } finally {
    mapRef.value.mapData.isClosing = false;
    mapRef.value.mapData.isEditing = false;
    mapRef.value.mapData.editingFence = null;
    mapRef.value.mapData.editor = null;
  }
}
//取消创建 围栏
const cancelCreate = () => {
  try {
    // 关闭所有绘图工具
    mouseTool?.close(true);
    // 移除临时绘图事件监听
    if (mapRef.value.mapData.activeDrawHandler) {
      mouseTool?.off("draw", mapRef.value.mapData.activeDrawHandler);
    }

    // 清理可能存在的半成品围栏
    if (mapRef.value.mapData.currentFence?.status === "creating") {
      const tempId = mapRef.value.mapData.currentFence.gfid;
      safeRemovePolygon(tempId, mapRef.value.mapData);
    }

    // 重置状态
    mapRef.value.mapData.isCreating = false;
    mapRef.value.mapData.currentFence = null;
    mapRef.value.mapData.activeDrawHandler = null;

    // 强制重绘有效围栏
    nextTick(() => {
      safeUpdateMapInstances.flush();
    });
  } catch (error) {
    console.error("取消创建失败:", error);
  }
}
// 编辑围栏
const startEdit = async (fence) => {
  if (mapRef.value.mapData.isEditing || !mapRef.value.mapData.mapInstances.has(fence.gfid)) return;
  await safeCloseEditor();
  mapRef.value.mapData.isEditing = true;
  mapRef.value.mapData.editingFence = fence;

  console.log(fence, "fence");

  // 创建编辑副本
  const original = mapRef.value.mapData.mapInstances.get(fence.gfid);

  // mapData.safeRemovePolygon(fence.gfid);

  // const editPolygon = mapData.createMapPolygon({
  //   // ...fence,
  //   strokeColor: '#FF0000', // 编辑状态红色边框
  // });

  console.log(mapRef.value.mapData.map, "mapData.map", original);

  if (fence.shape.center) {
    mapRef.value.mapData.editor = new AMap.CircleEditor(mapRef.value.mapData.map, original);
  } else {
    mapRef.value.mapData.editor = new AMap.PolygonEditor(mapRef.value.mapData.map, original);
  }
  mapRef.value.mapData.editor.open();

  // 事件处理
  mapRef.value.mapData.currentAdjustCallback = ({ target }) => {
    const newPath = target.getPath().map((p) => [p.lng, p.lat]);
    if (JSON.stringify(newPath) === JSON.stringify(fence.shape.points)) return;
    const index = fences.findIndex((f) => f.gfid === fence.gfid);
    if (index > -1) {
      fences[index] = {
        ...fence,
        path: newPath,
      }
    }
  };

  mapRef.value.mapData.currentEndCallback = () => {
    const finalPath = mapRef.value.mapData.editor
      .getTarget()
      .getPath()
      .map((p) => [p.lng, p.lat]);
    fences[fences.findIndex((f) => f.gfid === fence.gfid)] = { ...fence, shape: { points: finalPath } }
    safeCloseEditor();
  };

  mapRef.value.mapData.editor.on("adjust", mapRef.value.mapData.currentAdjustCallback);
  mapRef.value.mapData.editor.on("end", mapRef.value.mapData.currentEndCallback);
}
const finishedCreate = async (params) => {
  const { name, desc, type } = params
  try {
    if (!validateFence(mapRef.value.mapData.currentFence, type)) return;
    if (type === 'circle') {
      const center = mapRef.value.mapData.currentFence.shape.center
      const radius = Math.floor(mapRef.value.mapData.currentFence.shape.radius)
      return await service.createCircle({ name, desc, center, radius })
    } else {
      const points = mapRef.value.mapData.currentFence.shape.points.map(i => i.join(',')).join(';')
      return await service.createPolygon({ name, desc, points })
    }
    // safeUpdateMapInstances(controlPanelRef.value.fences, mapData);
  } catch (error) {
    console.error("保存围栏失败:", error);
  } finally {
    resetCreationState();
  }
  //完成创建围栏
  mapRef.value.mapData.isCZ = true;
}
// 重置创建状态
const resetCreationState = () => {
  mapRef.value.mapData.isCreating = false;
  mapRef.value.mapData.currentFence = null;
  mapRef.value.mouseTool?.close(true);
}
defineExpose({
  fences,
  startCreate,
  finishedCreate,
  startEdit,
  finishedEdit,
  getMapList,
  handleToLocal
})
</script>
<style>
.map-page {
  position: relative;
}
</style>
