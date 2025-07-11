import BreadcrumbItem from './src/breadcrumb-item.vue'
import type { App } from 'vue'
BreadcrumbItem.install = function (app: App) {
  app.component(BreadcrumbItem.name, BreadcrumbItem)
}
export default BreadcrumbItem
