import Statistic from './src/statistic.vue'
import type { App } from 'vue'
Statistic.install = function (app: App) {
  app.component(Statistic.name, Statistic)
}
export default Statistic
