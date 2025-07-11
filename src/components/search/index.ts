import Search from './src/search.vue'
import type { App } from 'vue'
Search.install = function (app: App) {
  app.component(Search.name, Search)
}
export default Search
