<template>
  <form-search :search-form="searchForm" :reloadFn="handleSearch">
    <el-button :icon="Plus" @click="handleFormCreate('circle')" type="primary">创建圆形围栏</el-button>
    <el-button :icon="Plus" @click="handleFormCreate('polygon')" type="primary">创建多边形围栏</el-button>
    <el-button :icon="DeleteFilled" @click="handleBatchDel" :disabled="!ids">批量删除</el-button>
    <el-button :icon="Search" @click="handleBatchView">批量查看</el-button>
  </form-search>
</template>
<script lang="ts" setup>
import formSearch from 'web-components/form-search/index'
import { searchForm } from './config/search.config'
import { Plus, DeleteFilled, Search } from '@element-plus/icons-vue'
const { ids } = defineProps({
  ids: {
    type: String,
    default: '',
  }
})
// 表单创建
const emits = defineEmits(['create', 'search', 'batchDel', 'batchView'])
const handleFormCreate = (type) => {
  emits('create', type)
}
// 批量删除
const handleBatchDel = () => {
  emits('batchDel')
}
// 批量查看
const handleBatchView = () => {
  emits('batchView')
}
// 搜索请求
const handleSearch = (params) => {
  emits('search', params)
}
</script>
