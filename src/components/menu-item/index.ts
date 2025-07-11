import MenuItem from './src/menu-item.vue'
import type { App } from 'vue'
MenuItem.install = function (app: App) {
  app.component(MenuItem.name, MenuItem)
}
export default MenuItem
