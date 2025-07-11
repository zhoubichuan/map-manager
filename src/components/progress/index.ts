import Progress from './src/progress.vue'
import type { App } from 'vue'
Progress.install = function (app: App) {
  app.component(Progress.name, Progress)
}
export default Progress
