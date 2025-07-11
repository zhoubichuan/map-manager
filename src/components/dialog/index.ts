import Dialog from './src/dialog.vue'
import type { App } from 'vue'
Dialog.install = function (app: App) {
  app.component(Dialog.name, Dialog)
}
export default Dialog
