import PageHeader from './src/page-header.vue'
import type { App } from 'vue'
PageHeader.install = function (app: App) {
  app.component(PageHeader.name, PageHeader)
}
export default PageHeader
