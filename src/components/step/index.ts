import Step from './src/step.vue'
import type { App } from 'vue'
Step.install = function (app: App) {
  app.component(Step.name, Step)
}
export default Step
