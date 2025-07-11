<template>
  <el-card style="margin-top: 10px">
    <div class="header">
      <div class="title">
        <span v-if="config?.title"></span>
        <h5>{{ config?.title }}</h5>
      </div>
      <el-button v-if="!!config?.needCreate" @click="createItem" type="primary">
        新建{{ config.title?.slice(0, 2) }}
      </el-button>
    </div>
    <el-table ref="tableRef" @selection-change="handleSelectionChange" :data="data" border style="width: 100%" stripe>
      <template #empty>
        <el-empty :image-size="200" description="暂无数据" />
      </template>
      <el-table-column v-if="config.hasSelection" type="selection" width="55" />
      <template v-for="item in config.tableItems" :key="item.label">
     <el-table-column v-bind="item" :prop="item.prop" :label="item.label" :width="item?.width">
          <template v-if="!item.formatter" #default="scope">
            <slot :name="item.prop" :row="scope.row">{{ scope.row[item.prop] }}</slot>
          </template>
        </el-table-column>
      </template>

      <el-table-column
        v-if="config.isEdit"
        label="操作"
        :width="config?.editWidth ? config?.editWidth : '100'"
        fixed="right"
      >
        <template v-slot="scope">
          <slot name="handler" :row="scope.row">
            <div>
              <el-button type="primary" size="middle" link @click="editMenu(scope.row)">修改</el-button>
              <el-button type="danger" @click="deleteMenu(scope.row.id)" size="middle" link>删除</el-button>
            </div>
          </slot>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer" v-if="tablePageInfo && data.length !== 0">
      <el-pagination
        background
        v-model:currentPage="tablePageInfo.currentPage"
        v-model:page-size="tablePageInfo.pageSize"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tablePageInfo.totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </el-card>
</template>

<script setup lang="ts" name="WebTable">
import { ElTable, ElButton, ElTableColumn ,ElPagination} from 'element-plus'
import { ref, watch } from 'vue'

const { pageInfo, data } = defineProps({
  config: {
    type: Object,
    default: () => ({
      needCreate: false,
      hasSelection: false
    })
  },
  data: {
    type: Array,
    default: () => []
  },
  pageInfo: {
    type: Object,
    default: () => ({})
  }
})

const tablePageInfo = ref<any>()

watch(
  () => ({ ...pageInfo }),
  newPageInfo => {
    tablePageInfo.value = { ...newPageInfo }
  },
  {
    immediate: true
  }
)

const emit = defineEmits(['toEdit', 'toDelete', 'toCreate', 'changePageSize', 'changeCurrentPage', 'selectChange'])
const handleSelectionChange = (val: any) => {
  emit('selectChange', val)
}
const editMenu = (data: any) => {
  emit('toEdit', data)
}
const deleteMenu = (id: number) => {
  emit('toDelete', id)
}
const createItem = () => {
  // const emptyObj = { ...data[0] }
  // Object.keys(emptyObj).forEach(key => {
  //     emptyObj[key] = ''
  // })
  // emit('toCreate', emptyObj)
}

const handleSizeChange = (pageSize: number) => {
  emit('changePageSize', { ...tablePageInfo.value, pageSize })
}
const handleCurrentChange = (currentPage: number) => {
  emit('changeCurrentPage', { ...tablePageInfo.value, currentPage })
}

const tableRef = ref<InstanceType<typeof ElTable>>()
const clearSelection = () => {
  tableRef.value?.clearSelection()
}
defineExpose({
  clearSelection
})
defineOptions({
  name: 'WebTable'
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;

  .title {
    display: flex;
    justify-content: space-around;

    span {
      width: 1px;
      height: 14px;
      background-color: var(--color-primary);
      border: 1px solid var(--olor-primary);
    }

    h5 {
      margin: 0;
      padding-bottom: -5px;
      padding-left: 20px;
      font-size: 14px;
    }
  }
}

.footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
