import Layout from './src/layout.vue'
import type { App } from 'vue'
Layout.install = function (app: App) {
  app.component(Layout.name, Layout)
}
export default Layout
