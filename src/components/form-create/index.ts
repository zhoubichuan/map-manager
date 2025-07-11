import formCreate from './src/form-create.vue'
import type { App } from 'vue'
formCreate.install = function (app: App) {
  app.component(formCreate.name, formCreate)
}
export default formCreate
