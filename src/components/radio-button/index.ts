import RadioButton from './src/radio-button.vue'
import type { App } from 'vue'
RadioButton.install = function (app: App) {
  app.component(RadioButton.name, RadioButton)
}
export default RadioButton
