import Collapse from './src/collapse.vue'
import type { App } from 'vue'
Collapse.install = function (app: App) {
  app.component(Collapse.name, Collapse)
}
export default Collapse
