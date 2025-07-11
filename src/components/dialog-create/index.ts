import DialogCreate from './src/dialog-create.vue'
import type { App } from 'vue'
DialogCreate.install = function (app: App) {
  app.component(DialogCreate.name, DialogCreate)
}
export default DialogCreate
