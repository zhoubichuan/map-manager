import PageContainer from './src/page-container.vue'
import type { App } from 'vue'
PageContainer.install = function (app: App) {
  app.component(PageContainer.name, PageContainer)
}
export default PageContainer
