import InputMore from './src/input-more.vue'
import type { App } from 'vue'
InputMore.install = function (app: App) {
  app.component(InputMore.name, InputMore)
}
export default InputMore
