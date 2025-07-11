import TablePagination from './src/table.vue'
import type { App } from 'vue'
TablePagination.install = function (app: App) {
  app.component(TablePagination.name, TablePagination)
}
export default TablePagination
