import OptionGroup from './src/option-group.vue'
import type { App } from 'vue'
OptionGroup.install = function (app: App) {
  app.component(OptionGroup.name, OptionGroup)
}
export default OptionGroup
