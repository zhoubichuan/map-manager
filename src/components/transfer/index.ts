import Transfer from './src/transfer.vue'
import type { App } from 'vue'
Transfer.install = function (app: App) {
  app.component(Transfer.name, Transfer)
}
export default Transfer
