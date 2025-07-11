<template>
  <div class="form-create" v-if="arrow">
    <web-collapse v-model="activeNames" @change="handleChange">
      <web-collapse-item name="1">
        <web-form ref="formRef" :model="formModel" label-width="80px" v-bind="$attrs">
          <web-form-item v-for="(formItem, formItemIndex) in formData" :formData="formItem" :key="formItemIndex" />
        </web-form>
      </web-collapse-item>
    </web-collapse>
  </div>
  <web-form v-else ref="formRef" :model="formModel" label-width="80px" v-bind="$attrs">
    <web-form-item v-for="(formItem, formItemIndex) in formData" :formData="formItem" :key="formItemIndex" />
  </web-form>
</template>

<script setup lang="ts" name="WebFormCreate">
import { ref, reactive, provide } from 'vue'
import WebForm from '../../form/index'
import WebFormItem from '../../form-item/index'
import WebCollapse from '../../collapse/index'
import WebCollapseItem from '../../collapse-item/index'
const { arrow, request, formData } = defineProps({
  arrow: {
    type: Boolean,
    default: false
  },
  request: {
    type: Function,
    default: () => { }
  },
  formData: {
    type: Array,
    default: () => []
  }
})
const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
const formRef = ref<InstanceType<typeof WebForm>>()

// 查询参数
const formModel = reactive<Record<string, string | number | undefined>>({})
const init = () =>
  formData.forEach(child => {
    child.forEach(item => {
      if (item.prop) {
        formModel[item.prop] = item.init || ''
      }
    })
  })
init()

provide('formModel', formModel)
const emit = defineEmits(['reloadList', 'update:modelValue', 'handleChange'])

const validate = () => {
  formRef.value?.validate(async (valid: any) => {
    if (valid) {
      request(formModel)
    }
  })
}

defineExpose({
  validate
})
defineOptions({
  name: 'WebFormCreate'
})
</script>
<style lang="scss">
.form-create {
  position: relative;

  .el-collapse {
    border: none;

    .el-collapse-item__content {
      padding-bottom: 0;
    }
  }

  .el-collapse-item__header {
    position: absolute;
    height: auto;

    .el-collapse-item__arrow {
      left: -20px;
      top: -16px;
      position: absolute;
    }
  }
}
</style>
