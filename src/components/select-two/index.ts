import SelectTwo from './src/select-two.vue'
import type { App } from 'vue'
SelectTwo.install = function (app: App) {
  app.component(SelectTwo.name, SelectTwo)
}
export default SelectTwo
