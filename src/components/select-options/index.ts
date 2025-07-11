import SelectOptions from './src/select-options.vue'
import type { App } from 'vue'
SelectOptions.install = function (app: App) {
  app.component(SelectOptions.name, SelectOptions)
}
export default SelectOptions
