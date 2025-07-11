<template>
  <web-dialog v-bind="$attrs" @handleCancel="close" @handleConfirm="handleSubmit">
    <web-form ref="formRef" :rules="rules" :model="formModel" label-width="80px">
      <web-form-item v-for="(formItem, formItemIndex) in creteForm" :form-data="formItem" :key="formItemIndex" />
    </web-form>
  </web-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, provide, onBeforeMount } from 'vue'
import { ElForm, ElMessage } from 'element-plus'
import WebDialog from '../../dialog/index'
import WebForm from '../../form/index'
import WebFormItem from '../../form-item/index'
const { rules, close, request, creteForm } = defineProps({
  rules: {
    type: Object,
    default: () => ({})
  },
  close: {
    type: Function,
    default: () => {}
  },
  request: {
    type: Function,
    default: () => {}
  },
  creteForm: {
    type: Array,
    default: () => []
  }
})
// 参数
const formModel = reactive<Record<string, string | number | undefined>>({})
const init = () =>
  creteForm.forEach(child => {
    child.forEach(item => {
      if (item.prop) {
        formModel[item.prop] = item.init || ''
      }
    })
    console.log(formModel, 'formModel')
  })
onBeforeMount(() => {
  init()
})
provide('formModel', formModel)

const dialogTitle = ref('创建')
const formRef = ref<InstanceType<typeof ElForm>>()
const emit = defineEmits(['reloadList', 'update:modelValue'])

const handleSubmit = () => {
  formRef.value?.validate(async (valid: any) => {
    if (valid) {
      request(formModel)
    }
  })
}
defineOptions({
  name: 'WebDialogCreate'
})
</script>

<style lang="scss"></style>
