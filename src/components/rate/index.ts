import Rate from './src/rate.vue'
import type { App } from 'vue'
Rate.install = function (app: App) {
  app.component(Rate.name, Rate)
}
export default Rate
