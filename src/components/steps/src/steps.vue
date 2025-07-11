<template>
  <el-steps class="web-steps" v-bind="$attrs" finish-status="success" simple>
    <slot></slot>
  </el-steps>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  setup(props, context) {
    const childrenRef = ref(null)
    return {
      childrenRef
    }
  }
})
</script>

<style lang="scss">
.web-steps {
  .el-step__title.is-success {
    color: var(--color-primary);
  }

  &.el-steps--simple {
    background: var(--color-white);
  }

  &.el-step.is-simple .el-step__icon {
    width: var(--steps-icon-width);
    height: var(--steps-icon-height);
  }

  .el-step__title.is-process {
    color: var(--color-text-primary);
  }

  .el-step__title.is-wait {
    color: var(--color-placeholder);
  }
}
</style>
