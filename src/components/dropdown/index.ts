import Dropdown from './src/dropdown.vue'
import type { App } from 'vue'
Dropdown.install = function (app: App) {
  app.component(Dropdown.name, Dropdown)
}
export default Dropdown
