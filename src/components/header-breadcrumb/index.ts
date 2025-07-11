import HeaderBreadcrumb from './src/header-breadcrumb'
import type { App } from 'vue'
HeaderBreadcrumb.install = function (app: App) {
  app.component(HeaderBreadcrumb.name, HeaderBreadcrumb)
}
export default HeaderBreadcrumb
