import Input from './src/input.vue'
import type { App } from 'vue'
Input.install = function (app: App) {
  app.component(Input.name, Input)
}
export default Input
