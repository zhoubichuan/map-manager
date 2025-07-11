<template>
  <el-alert class="web-alert" show-icon v-bind="$attrs" />
</template>

<script lang="ts" setup name="WebAlter">
import { ElAlert } from 'element-plus'

defineOptions({
  name: 'WebAlert'
})
</script>

<style lang="scss">
.web-alert {
  &.el-alert--success.is-light {
    color: var(--color-success);
    // background-color: var(--color-success-bg);
  }

  &.el-alert--info.is-light {
    color: var(--color-placeholder);
    // background-color: var(--color-placeholder-bg);
  }

  &.el-alert--warning.is-light {
    color: var(--color-warn);
    // background-color: var(--color-warn-bg);
  }

  &.el-alert--error.is-light {
    color: var(--color-danger);
    // background-color: var(--color-danger-bg);W
  }
}
</style>
