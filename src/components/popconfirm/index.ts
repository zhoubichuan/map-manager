import Popconfirm from './src/popconfirm.vue'
import type { App } from 'vue'
Popconfirm.install = function (app: App) {
  app.component(Popconfirm.name, Popconfirm)
}
export default Popconfirm
