<template>
  <web-table :config="Confit" :data="tableData ?? []" :page-info="pageInfo" @changePageSize="handleSizeChange"
    @changeCurrentPage="handleCurrentChange" @selectChange="handleSelectChange">
    <template #handler="scope">
      <div>
        <el-button type="text" @click="singleView(unref(scope.row))">查看</el-button>
        <el-button :disabled="scope.row.ntfCreateStatus == 0" type="text"
          @click="singleEdit(unref(scope.row))">编辑</el-button>
        <el-button :disabled="scope.row.ntfCreateStatus == 0" type="text"
          @click="handleDel(unref(scope.row))">删除</el-button>
      </div>
    </template>
  </web-table>
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import WebTable from 'web-components/table/index'
import { defineExpose, unref, ref } from 'vue'
import { Confit } from './config/table.config'
import { reactive } from 'vue'
import useRequest from './useRequest'
import { queryFence, delFence } from '../service'
const emits = defineEmits(['del', 'edit', 'view'])
const ids = ref('')
const handleSelectChange = (mapIds) => {
  ids.value = mapIds.map(i => i.gfid).join(',')
}
// 删除/批量删除
const handleDel = async (row) => {
  const gfid = row ? row.gfid : ids.value
  const res = await delFence({ gfid })
  if (res?.errcode === 10000) {
    ids.value = ''
    ElMessage.success('删除成功')
    reloadData()
  } else {
    ElMessage.error(res?.errdetail)
  }
}
// 编辑
const singleEdit = (value) => {
  emits('edit', value)
}
// 查看
const singleView = async (value) => {
  emits('view', value)
}
// 查询参数
const getSearchParams = reactive<Record<string, string | number | undefined>>({})
const { tableData, pageInfo, reloadData, handleCurrentChange, handleSizeChange } = useRequest(getSearchParams, queryFence)
defineExpose({
  ids,
  handleDel,
  reloadData: val => {
    if (val) {
      Object.keys(val).forEach(key => {
        getSearchParams[key] = val[key]
      })
    }
    reloadData()
  },
  handleCurrentChange,
  handleSizeChange,
  getSearchParams: () => getSearchParams
})
</script>
