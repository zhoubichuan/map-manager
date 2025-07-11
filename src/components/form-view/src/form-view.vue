<template>
  <web-dialog v-bind="{ ...attrs }">
    <web-form ref="formRef" :model="formData" label-width="80px">
      <web-form-item v-for="(formItem, formItemIndex) in data" :formData="formItem" :key="formItemIndex" />
    </web-form>
  </web-dialog>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
const { data } = defineProps<{ data: [] }>()
const { data: formData, ...attrs } = useAttrs()
</script>
<script lang="ts">
export default {
  name: 'WebFormView'
}
</script>
<style lang="scss" scoped></style>
