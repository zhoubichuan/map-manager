import InputButton from './src/input-button.vue'
import type { App } from 'vue'
InputButton.install = function (app: App) {
  app.component(InputButton.name, InputButton)
}
export default InputButton
