import Submenu from './src/submenu.vue'
import type { App } from 'vue'
Submenu.install = function (app: App) {
  app.component(Submenu.name, Submenu)
}
export default Submenu
