import Col from './src/col.vue'
import type { App } from 'vue'
Col.install = function (app: App) {
  app.component(Col.name, Col)
}
export default Col
