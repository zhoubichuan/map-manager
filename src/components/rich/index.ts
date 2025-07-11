import Rich from './src/rich.vue'
import type { App } from 'vue'
Rich.install = function (app: App) {
  app.component(Rich.name, Rich)
}
export default Rich
