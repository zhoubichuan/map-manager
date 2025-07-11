import Loading from './src/loading.vue'
import type { App } from 'vue'
Loading.install = function (app: App) {
  app.component(Loading.name, Loading)
}
export default Loading
