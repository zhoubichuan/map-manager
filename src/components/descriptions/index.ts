import Descriptions from './src/descriptions.vue'
import type { App } from 'vue'
Descriptions.install = function (app: App) {
  app.component(Descriptions.name, Descriptions)
}
export default Descriptions
