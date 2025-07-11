<template>
  <el-drawer class="web-drawer" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
    <template v-if="slots.header" #header>
      <slot name="header"></slot>
    </template>
    <template v-if="slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
    <template v-if="slots.title " #title >
      <slot name="title"></slot>
    </template>
  </el-drawer>
</template>

<script lang='ts' setup name="WebDrawer">
import { ElDrawer } from 'element-plus'
import { useSlots } from 'vue'
const slots = useSlots()
defineOptions({
  name: 'WebDrawer'
});
</script>

<style lang="scss">
.web-drawer {

}
</style>
