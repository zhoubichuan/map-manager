import FormView from './src/form-view.vue'
import type { App } from 'vue'
FormView.install = function (app: App) {
  app.component(FormView.name, FormView)
}
export default FormView
