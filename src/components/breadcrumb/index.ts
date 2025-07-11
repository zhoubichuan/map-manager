import Breadcrumb from './src/breadcrumb.vue'
import type { App } from 'vue'
Breadcrumb.install = function (app: App) {
  app.component(Breadcrumb.name, Breadcrumb)
}
export default Breadcrumb
