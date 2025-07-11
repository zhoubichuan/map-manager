import DropdownMenu from './src/dropdown-menu.vue'
import type { App } from 'vue'
DropdownMenu.install = function (app: App) {
  app.component(DropdownMenu.name, DropdownMenu)
}
export default DropdownMenu
