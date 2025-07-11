import DialogView from './src/dialog-view.vue'
import type { App } from 'vue'
DialogView.install = function (app: App) {
  app.component(DialogView.name, DialogView)
}
export default DialogView
