import Select from './src/select.vue'
import type { App } from 'vue'
Select.install = function (app: App) {
  app.component(Select.name, Select)
}
export default Select
