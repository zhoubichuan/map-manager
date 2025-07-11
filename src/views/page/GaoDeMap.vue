<template>
  <div>
    <div v-if="mapData.loading" class="map-loading">
      <div class="loader"></div>
      <div class="loading-text">地图加载中...</div>
    </div>
    <div id="map-container" style="width: 100%; height:100%"></div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, onBeforeUnmount, provide, onUnmounted } from 'vue'
import { initConfig, initMap, safeUpdateMapInstances, drawEvents, mouseTool } from './utils'
import eventHub from './eventHub.js';
import { key } from '../service.js'
const emits = defineEmits(['drawEnd', 'mapMounted'])
const { statrAddress } = defineProps({
  statrAddress: {
    type: Array,
    default: () => [],
  }
})
// 地图挂载
eventHub.$on('mapMounted', async (map) => {
  mapData.map = map
  mapData.loading = false;
  emits('mapMounted')
});
// 地图绘制-开始
eventHub.$on('mapDrawStart', (event) => {
  emits('drawEnd')
});

onMounted(async () => {
  // 初始化配置
  await initConfig({ securityJsCode: '', key });
  // 初始化地图
  initMap({ id: 'map-container', center: statrAddress },mapData)
  // 初始化围栏
  window.addEventListener("beforeunload", cleanupResources);
})
onBeforeUnmount(() => {
  cleanupResources();
  window.removeEventListener("beforeunload", cleanupResources);
})
onUnmounted(() => {
  mapData.map?.destroy();
});
// 资源清理
const cleanupResources = () => {
  // 终止异步操作
  mapData.abortController?.abort();
  safeUpdateMapInstances.cancel();
  // 清理绘图状态
  if (mapData.activeDrawHandler) {
    mouseTool?.off("draw", mapData.activeDrawHandler);
    mapData.activeDrawHandler = null;
  }
  // 清理编辑器
  safeCloseEditor();
  // 清理鼠标工具
  if (mouseTool) {
    mouseTool.close(true);
    // mouseTool = null;
  }
  // 清理地图实例
  mapData.mapInstances.forEach((polygon) => {
    polygon?.setMap(null);
    polygon = null;
  });
  mapData.mapInstances.clear();
  // 销毁地图
  if (mapData.map) {
    try {
      mapData.map.destroy();
    } catch (e) {
      console.warn("地图销毁异常:", e);
    }
    mapData.map = null;
  }
}
// 安全关闭编辑器
const safeCloseEditor = async () => {
  if (mapData.isClosing || !mapData.editor) return;
  mapData.isClosing = true;
  try {
    // closeEditor(mapData, controlPanelRef.value.fences)
  } catch (error) {
    console.error("编辑器关闭异常:", error);
  } finally {
    mapData.isClosing = false;
    mapData.isEditing = false;
    mapData.editingFence = null;
    mapData.editor = null;
  }
}
const mapData = reactive({
  isCZ: false, //是否存在
  map: null,
  mapInstances: new Map(),
  mapInitPromise: null,
  mouseTool: null,
  editor: null,
  isCreating: false,
  isEditing: false,
  isClosing: false,
  loading: true,
  currentFence: null,
  editingFence: null,
  currentAdjustCallback: null,
  currentEndCallback: null,
  abortController: null,
  activeDrawHandler: null,
})

provide('mapData', {
  mapData
})
defineExpose({
  mapData,
})
</script>
