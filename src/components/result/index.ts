import Result from './src/result.vue'
import type { App } from 'vue'
Result.install = function (app: App) {
  app.component(Result.name, Result)
}
export default Result
