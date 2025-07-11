<template>
  <div class="web-container">
    <div class="header" v-if="header">
      <el-breadcrumb separator="/" v-if="header.breadcrumb">
        <el-breadcrumb-item
          v-for="(x, k) in header.breadcrumb"
          :to="{
            path: x.path,
            query: x.query
          }"
          :key="k"
        >
          {{ x.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div v-if="options && options.length" class="options">
        <template v-for="(x, k) in options">
          <web-button :key="k" v-if="x.type === 'button'" type="primary" size="medium" @click="x.onClick">
            {{ x.label }}
          </web-button>
        </template>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  props: ['header'],
  setup(props) {
    const state = reactive({
      options: props.header.options
    })
    const setOptions = arr => {
      state.options = arr
    }
    return {
      ...toRefs(state),
      setOptions
    }
  }
})
</script>

<style lang="scss" scoped>
.web-container {
  height: 100%;
  padding: 20px;
  padding-top: 0;

  // min-width: 1550px;
  .header {
    position: relative;
    padding: 32px 0 16px;
    font-size: 16px;

    .options {
      position: absolute;
      top: 12px;
      right: 20px;
    }
  }

  .content {
    box-sizing: border-box;
    height: calc(100vh - 80px);
    padding: 32px 24px;
    background: #fff;
    border-radius: 8px;
  }

  .el-breadcrumb__inner.is-link {
    color: #86868b;
    font-weight: 400;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    color: #1d1d1f;
    font-weight: 400;
  }
}
</style>
