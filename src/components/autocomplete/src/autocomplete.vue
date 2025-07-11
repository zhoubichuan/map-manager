<template>
  <el-autocomplete class="web-autocomplete" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
    <template v-if="slots.prefix" #prefix>
      <slot name="prefix"></slot>
    </template>
    <template v-if="slots.suffix" #suffix>
      <slot name="suffix"></slot>
    </template>
    <template v-if="slots.prepend" #prepend>
      <slot name="prepend"></slot>
    </template>
    <template v-if="slots.append" #append>
      <slot name="append"></slot>
    </template>
    <template v-if="slots.loading" #loading>
      <slot name="loading"></slot>
    </template>
  </el-autocomplete>
</template>

<script lang='ts' setup name="WebAutocomplete">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebAutocomplete'
});
</script>
