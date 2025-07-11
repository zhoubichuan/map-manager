<template>
  <div class="headerBreadcrumb">
    <template v-for="(item, index) in breadcrumbList" :key="item.name">
      <div :class="index === breadcrumbList?.length - 1 ? 'breadcrumb_end' : 'breadcrumb'">
        <a v-if="index !== 0" :href="item.path">{{ item.name }}</a>
        <span v-else>{{ item.name }}</span>
      </div>
      <span class="cut" v-if="index !== breadcrumbList?.length - 1">/</span>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    breadcrumbList: {
      type: Array as PropType<{ name: string; path: string }[]>,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.headerBreadcrumb {
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  width: 100%;
  padding: 0 20px;
  font-size: 16px;
  line-height: 62px;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;

  span {
    cursor: pointer;
  }

  .breadcrumb {
    color: #86868b;
    font-weight: bold;
  }

  .cut {
    margin: 0 8px;
  }

  .breadcrumb_end {
    color: #1d1d1f;
    font-weight: bold;
  }
}
</style>
