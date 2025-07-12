<template>
  <web-dialog mold="create" size="big" title="创建" v-model="dialogShow" @handleCancel="handleClose"
    @handleConfirm="handleSubmit">
    <web-form-create ref="modelRef" :request="requestCreate" :formData="baseFormData" :rules="modelRules" />
    <Map ref="mapRef" type="create" @mapMounted="handleMapMounted" />
  </web-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import WebDialog from 'web-components/dialog/index'
import WebFormCreate from 'web-components/form-create/index'
import type { FormData } from 'web-components/form-create/type'
import { rules as modelRules } from './config/form.config'
import Map from '../page/Index.vue'
const mapRef = ref<InstanceType<typeof Map>>()
const baseFormData = ref<FormData[]>([])
const modelRef = ref<InstanceType<typeof WebFormCreate>>()
//弹框
const dialogShow = ref(false)
const handleClose = () => {
  dialogShow.value = false
}
const emit = defineEmits(['reloadList'])
const handleMapMounted = () => {
  mapRef.value?.startCreate(mapType.value)
}
const handleSubmit = () => {
  modelRef.value?.validate()
}
const requestCreate = async (params) => {
  params.type = mapType.value
  const res = await mapRef.value?.finishedCreate(params)
  if (res?.data?.errcode === 10000) {
    ElMessage.success('创建成功')
    emit('reloadList')
    handleClose()
  } else {
    ElMessage.error(res?.data?.errdetail)
  }
}
const mapType = ref('circle')
const handleCreate = (type) => {
  mapType.value = type
  baseFormData.value = [
    [
      {
        prop: 'type',
        label: '围栏类型',
        init: mapType.value === 'circle' ? '圆形' : '多边形',
        type: 'div'
      },
      {
        prop: 'name',
        label: '围栏名称',
        type: 'input',
        component: {
          placeholder: '请输入围栏名称'
        }
      }
    ],
    [
      {
        prop: 'desc',
        label: '围栏描述',
        type: 'input',
        component: {
          placeholder: '请输入围栏描述'
        }
      },
    ]
  ]
  dialogShow.value = true
}
defineExpose({
  handleCreate
})
</script>
