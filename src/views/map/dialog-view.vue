<template>
  <web-dialog mold="view" size="big" title="查看" v-model="dialogShow" v-bind="{ ...$attrs }" @handleCancel="handleClose"
    @handleConfirm="handleSubmit">
    <web-form-create v-if="isSingle" ref="modelRef" :formData="baseFormData" />
    <Map ref="mapRef" type="view" :gfid="mapGfid" :statrAddress:="statrAddress" />
  </web-dialog>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import WebDialog from 'web-components/dialog/index'
import WebFormCreate from 'web-components/form-create/index'
import Map from '../page/index.vue'
import dayjs from 'dayjs'
const mapRef = ref()
const mapGfid = ref('')
const isSingle = ref(true)
const statrAddress = ref([])
const baseFormData = ref<FormData[]>([])
//弹框
const dialogShow = ref(false)
const handleClose = () => {
  dialogShow.value = false
}

const handleSubmit = () => {

}

const singleView = async (params: Record<string, any>) => {
  isSingle.value = true
  const {
    createtime,
    desc,
    gfid,
    modifytime,
    name,
    shape
  } = params
  mapGfid.value = String(gfid)
  statrAddress.value = shape.center ? shape.center.split(',') : shape.points.split(';')[0].split(',')
  baseFormData.value = [
    [
      {
        prop: 'gfid',
        label: 'gfid',
        init: gfid,
        type: 'div'
      },
      {
        prop: 'type',
        label: '围栏类型',
        init: shape.center ? '圆形' : '多边形',
        type: 'div'
      },
    ],
    [
      {
        prop: 'name',
        label: '围栏名称',
        type: 'div',
        init: name
      },
      {
        prop: 'desc',
        label: '围栏描述',
        type: 'div',
        init: desc
      },
    ],
    shape.center ? [
      {
        prop: 'center',
        label: '中心点',
        type: 'div',
        init: shape.center
      },
      {
        prop: 'radius',
        label: '半径(米)',
        type: 'div',
        init: shape.radius
      },
    ] : [
      {
        prop: 'points',
        label: '路径',
        type: 'div',
        init: shape.points
      },
    ],
    [
      {
        prop: 'createtime',
        label: '创建时间',
        type: 'div',
        init: dayjs(createtime).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        prop: 'createtime',
        label: '更新时间',
        type: 'div',
        init: dayjs(modifytime).format('YYYY-MM-DD hh:mm:ss')
      },
    ]
  ]
  dialogShow.value = true
  nextTick(() => {
    mapRef.value?.getMapList({ gfids:gfid })
  })
}
const batchView = async () => {
  mapGfid.value = ''
  statrAddress.value = [113.539333, 22.242564]
  isSingle.value = false
  dialogShow.value = true
  nextTick(() => {
    mapRef.value?.getMapList()
  })
}
defineExpose({
  singleView,
  batchView
})
</script>
<style lang="scss">
.fence-container {
  height: calc(100vh - 426px);
  &.batch {
    height: calc(100vh - 226px);
  }
}
</style>
