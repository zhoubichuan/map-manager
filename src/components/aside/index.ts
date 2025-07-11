import Aside from './src/aside.vue'
import type { App } from 'vue'
Aside.install = function (app: App) {
  app.component(Aside.name, Aside)
}
export default Aside
