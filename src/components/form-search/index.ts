import formSearch from './src/form-search.vue'
import type { App } from 'vue'
formSearch.install = function (app: App) {
  app.component(formSearch.name, formSearch)
}
export default formSearch
