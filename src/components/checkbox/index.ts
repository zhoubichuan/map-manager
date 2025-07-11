import Checkbox from './src/checkbox.vue'
import type { App } from 'vue'
Checkbox.install = function (app: App) {
  app.component(Checkbox.name, Checkbox)
}
export default Checkbox
