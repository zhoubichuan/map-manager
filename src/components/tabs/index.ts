import Tabs from './src/tabs.vue'
import type { App } from 'vue'
Tabs.install = function (app: App) {
  app.component(Tabs.name, Tabs)
}
export default Tabs
