import Pagination from './src/pagination.vue'
import type { App } from 'vue'
Pagination.install = function (app: App) {
  app.component(Pagination.name, Pagination)
}
export default Pagination
