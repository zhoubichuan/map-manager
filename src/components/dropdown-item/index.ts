import DropdownItem from './src/dropdown-item.vue'
import type { App } from 'vue'
DropdownItem.install = function (app: App) {
  app.component(DropdownItem.name, DropdownItem)
}
export default DropdownItem
