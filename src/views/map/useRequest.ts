import { reactive, ref, onMounted } from 'vue'
export default (params, request) => {
  const tableData = ref([])
  const pageInfo = reactive({
    totalCount: 0,
    currentPage: 1,
    pageSize: 10
  })
  const reloadData = async () => {
    const {data} = await request({ ...params, page: pageInfo.currentPage, pageSize: pageInfo.pageSize })
    if (data.errcode === 10000) {
      const { count, results } = data.data
      tableData.value.splice(0, tableData.value.length, ...results)
      pageInfo.totalCount = count
    }
  }

  const handleCurrentChange = ({ currentPage }) => {
    pageInfo.currentPage = currentPage
    reloadData()
  }
  const handleSizeChange = ({ pageSize }) => {
    pageInfo.pageSize = pageSize
    reloadData()
  }
  onMounted(() => {
    reloadData()
  })
  return { tableData, pageInfo, reloadData, handleCurrentChange, handleSizeChange }
}
