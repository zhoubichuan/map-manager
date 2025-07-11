<template>
  <el-form ref="formRef" class="demo-ruleForm" v-bind="$attrs">
    <template #default="scoped">
      <slot name="default" v-bind="scoped"></slot>
    </template>
  </el-form>
</template>

<script lang="ts" setup>
import { ElForm } from 'element-plus'
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()
defineExpose({
  validate: (params: any) => formRef.value?.validate(params)
})

defineOptions({
  name: 'WebForm'
})
</script>
