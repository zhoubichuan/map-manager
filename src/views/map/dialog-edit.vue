<template>
  <web-dialog mold="edit" size="big" title="编辑" v-model="dialogShow" @handleCancel="handleClose"
    @handleConfirm="handleSubmit">
    <web-form-create ref="modelRef" :request="requestCreate" :formData="baseFormData" :rules="modelRules" />
    <Map ref="mapRef" type="edit" :gfid="mapGfid" :statrAddress:="statrAddress" />
  </web-dialog>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { ElMessage } from 'element-plus'
import WebDialog from 'web-components/dialog/index'
import WebFormCreate from 'web-components/form-create/index'
import type { FormData } from 'web-components/form-create/type'
import { rules as modelRules } from './config/form.config'
import Map from '../page/Index.vue'
import dayjs from 'dayjs'
const mapRef = ref<InstanceType<typeof Map>>()
const baseFormData = ref<FormData[]>([])
const modelRef = ref<InstanceType<typeof WebFormCreate>>()
//弹框
const mapGfid = ref('')
const statrAddress = ref([])
const dialogShow = ref(false)
const handleClose = () => {
  dialogShow.value = false
}
const emit = defineEmits(['reloadList'])
const handleSubmit = async () => {
  modelRef.value?.validate()
}
const requestCreate = async (params) => {
  const { name, desc } = params
  const { data } = await mapRef.value?.finishedEdit({ name, desc })
  if (data.errcode === 10000) {
    emit('reloadList')
    handleClose()
    ElMessage.success('修改成功')
  } else {
    ElMessage.error(data.errdetail)
  }

}
const handleEdit = async (params: Record<string, any>) => {
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
        type: 'input',
        init: name,
        component: {
          placeholder: '请输入围栏名称'
        }
      },
      {
        prop: 'desc',
        label: '围栏描述',
        type: 'input',
        init: desc,
        component: {
          placeholder: '请输入围栏描述'
        }
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
    mapRef.value?.getMapList({ gfids: gfid })
  })
}
defineExpose({
  handleEdit
})
</script>
