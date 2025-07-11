<template>
  <el-skeleton-item class="web-skeleton-item" v-bind="$attrs">
  </el-skeleton-item>
</template>

<script lang='ts' setup name="WebSkeletonItem">
import { ElSkeletonItem } from 'element-plus'

defineOptions({
  name: 'WebSkeletonItem'
});
</script>
