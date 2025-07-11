import Drawer from './src/drawer.vue'
import type { App } from 'vue'
Drawer.install = function (app: App) {
  app.component(Drawer.name, Drawer)
}
export default Drawer
