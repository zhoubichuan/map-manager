<template>
  <div class="web-from-item">
    <el-row v-if="formData.length" :gutter="20">
      <el-col :span="24 / formData.length" v-for="(item, index) in formData" :key="index">
        <el-form-item v-if="JSON.stringify(item) !== '{}'" :label="item.label" :prop="item.prop">
          <template v-if="item.type === 'div'">
            <div class="rich" contenteditable="true" v-html="item.init"></div>
          </template>
          <template v-else>
            <component :is="item.type" v-bind="item.component" v-model="formModel[item.prop]" v-on="item.fn" />
          </template>
        </el-form-item>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, inject } from 'vue'
import { FormData } from '../type'

const formModel = inject<any>('formModel')
const { formData } = defineProps({
  formData: {
    type: Array as () => FormData,
    default: () => []
  }
})
defineOptions({
  name: 'WebFormItem',
  components: {
    input: defineAsyncComponent(() => import(`../../input/index`)),
    'input-number': defineAsyncComponent(() => import(`../../input-number/index`)),
    'input-more': defineAsyncComponent(() => import(`../../input-more/index`)),
    'input-button': defineAsyncComponent(() => import(`../../input-button/index`)),
    select: defineAsyncComponent(() => import(`../../select/index`)),
    'select-image': defineAsyncComponent(() => import(`../../select-image/index`)),
    cascader: defineAsyncComponent(() => import(`../../cascader/index`)),
    rich: defineAsyncComponent(() => import(`../../rich/index`)),
    'transfer-cascader-panel': defineAsyncComponent(() => import(`../../transfer-cascader-panel/index`)),
    'cascader-panel': defineAsyncComponent(() => import(`../../cascader-panel/index`)),
    upload: defineAsyncComponent(() => import(`../../upload/index`)),
    'upload-template': defineAsyncComponent(() => import(`../../upload-template/index`))
  }
})
</script>

<style lang="scss" scoped>
.rich {
  -webkit-user-modify: read-only;
}
</style>
