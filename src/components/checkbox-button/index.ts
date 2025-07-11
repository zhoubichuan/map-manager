import CheckboxButton from './src/checkbox-button.vue'
import type { App } from 'vue'
CheckboxButton.install = function (app: App) {
  app.component(CheckboxButton.name, CheckboxButton)
}
export default CheckboxButton
