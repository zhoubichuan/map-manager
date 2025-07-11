import Spinner from './src/spinner.vue'
import type { App } from 'vue'
Spinner.install = function (app: App) {
  app.component(Spinner.name, Spinner)
}
export default Spinner
