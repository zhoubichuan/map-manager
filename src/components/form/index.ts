import Form from './src/form.vue'
import type { App } from 'vue'
Form.install = function (app: App) {
  app.component(Form.name, Form)
}
export default Form
