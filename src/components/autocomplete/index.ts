import Autocomplete from './src/autocomplete.vue'
import type { App } from 'vue'
Autocomplete.install = function (app: App) {
  app.component(Autocomplete.name, Autocomplete)
}
export default Autocomplete
