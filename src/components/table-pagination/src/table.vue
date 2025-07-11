<template>
  <el-table class="web-table" v-bind="$attrs">
    <template #default="scoped">
      <slot name="default" v-bind="scoped">
        <el-table-column v-for="(item, index) in column" :key="index" v-bind="item"></el-table-column>
      </slot>
    </template>
    <template #append="scoped">
      <slot name="append" v-bind="scoped"></slot>
    </template>
    <template #empty="scoped">
      <slot name="empty" v-bind="scoped"></slot>
    </template>
  </el-table>
  <web-pagination
    layout="prev, pager, next"
    :total="pagination.total"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
    :page-size="pagination.pageSize"
    :page-sizes="[10, 20, 50, 100]"
  >
  </web-pagination>
</template>

<script setup lang="ts" name="WebTablePagination">
import { ElTable, ElTableColumn } from 'element-plus'
import WebPagination from '../../pagination/index'
const { column, pagination } = defineProps({
  column: {
    type: Array,
    require: true
  },
  pagination: {
    type: Object,
    default: () => ({
      total: 0,
      pageSize: 10
    })
  }
})
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
defineOptions({
  name: 'WebTablePagination'
})
</script>
<script lang="ts">
export default {
  name: 'WebTablePagination'
}
</script>
<style lang="scss">
.web-table {
  color: var(--color-text-primary);

  &.el-table .el-table__header-wrapper thead {
    height: var(--table-header-height);
    color: var(--table-header-color);
  }

  &.el-table .el-table__header-wrapper th.el-table__cell {
    background-color: var(--table-header-bg);
  }

  &.el-table .el-table__body-wrapper tr {
    height: var(--table-line-height);
  }
}
</style>
