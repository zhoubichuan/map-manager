import InputNumber from './src/input-number.vue'
import type { App } from 'vue'
InputNumber.install = function (app: App) {
  app.component(InputNumber.name, InputNumber)
}
export default InputNumber
