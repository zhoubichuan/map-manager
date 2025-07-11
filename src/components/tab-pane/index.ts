import TabPane from './src/tab-pane.vue'
import type { App } from 'vue'
TabPane.install = function (app: App) {
  app.component(TabPane.name, TabPane)
}
export default TabPane
