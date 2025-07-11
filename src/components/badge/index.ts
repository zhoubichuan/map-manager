import Badge from './src/badge.vue'
import type { App } from 'vue'
Badge.install = function (app: App) {
  app.component(Badge.name, Badge)
}
export default Badge
