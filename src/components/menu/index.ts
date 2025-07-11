import Menu from './src/menu.vue'
import type { App } from 'vue'
Menu.install = function (app: App) {
  app.component(Menu.name, Menu)
}
export default Menu
