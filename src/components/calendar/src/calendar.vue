<template>
  <el-calendar class="box-calendar">
    <template v-if="slots.dateCell" #dateCell="scoped">
      <slot name="dateCell" v-bind="scoped"></slot>
    </template>
    <template v-if="slots.header" #header="scoped">
      <slot name="header" v-bind="scoped"></slot>
    </template>
  </el-calendar>
</template>
<script setup lang="ts" name="WebCalendar">
import { useSlots } from 'vue'
import { ElCalendar } from 'element-plus';

defineOptions({
  name: 'WebCalendar'
});

const slots = useSlots()

</script>