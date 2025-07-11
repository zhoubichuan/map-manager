import Steps from './src/steps.vue'
import type { App } from 'vue'
Steps.install = function (app: App) {
  app.component(Steps.name, Steps)
}
export default Steps
