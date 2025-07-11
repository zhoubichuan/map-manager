<template>
  <web-dialog v-bind="$attrs" mold="view" @handleCancel="close">
    <web-form :model="formModel" :label-width="labelWidth">
      <web-form-item v-for="(formItem, formItemIndex) in creteForm" :form-data="formItem" :key="formItemIndex" />
    </web-form>
  </web-dialog>
</template>

<script setup lang="ts">
import { reactive, provide } from 'vue'
import WebDialog from '../../dialog/index'
import WebForm from '../../form/index'
import WebFormItem from '../../form-item/index'
const { close, creteForm } = defineProps({
  labelWidth: {
    type: String,
    default: '80px'
  },
  close: {
    type: Function,
    default: () => {}
  },
  creteForm: {
    type: Array,
    default: () => []
  }
})
// 查询参数
const formModel = reactive<Record<string, string | number | undefined>>({})
const init = () =>
  creteForm.forEach(child => {
    child.forEach(item => {
      if (item.prop) {
        formModel[item.prop] = item.init || ''
      }
    })
  })
init()

provide('formModel', formModel)

defineOptions({
  name: 'WebDialogView'
})
</script>

<style lang="scss"></style>
