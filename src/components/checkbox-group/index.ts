import CheckboxGroup from './src/checkbox-group.vue'
import type { App } from 'vue'
CheckboxGroup.install = function (app: App) {
  app.component(CheckboxGroup.name, CheckboxGroup)
}
export default CheckboxGroup
