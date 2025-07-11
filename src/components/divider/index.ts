import Divider from './src/divider.vue'
import type { App } from 'vue'
Divider.install = function (app: App) {
  app.component(Divider.name, Divider)
}
export default Divider
