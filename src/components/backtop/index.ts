import Backtop from './src/backtop.vue'
import type { App } from 'vue'
Backtop.install = function (app: App) {
  app.component(Backtop.name, Backtop)
}
export default Backtop
