<template>
  <el-carousel-item class="web-carousel-item" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-carousel-item>
</template>

<script lang='ts' setup name="WebCarouselItem">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebCarouselItem'
});
</script>
