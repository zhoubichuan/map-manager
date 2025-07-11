import Main from './src/main.vue'
import type { App } from 'vue'
Main.install = function (app: App) {
  app.component(Main.name, Main)
}
export default Main
