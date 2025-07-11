import Option from './src/option.vue'
import type { App } from 'vue'
Option.install = function (app: App) {
  app.component(Option.name, Option)
}
export default Option
