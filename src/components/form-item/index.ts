import FormItem from './src/form-item.vue'
import type { App } from 'vue'
FormItem.install = function (app: App) {
  app.component(FormItem.name, FormItem)
}
export default FormItem
