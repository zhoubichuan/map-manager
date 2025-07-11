import Row from './src/row.vue'
import type { App } from 'vue'
Row.install = function (app: App) {
  app.component(Row.name, Row)
}
export default Row
