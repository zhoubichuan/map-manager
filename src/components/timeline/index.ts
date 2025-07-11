import Timeline from './src/timeline.vue'
import type { App } from 'vue'
Timeline.install = function (app: App) {
  app.component(Timeline.name, Timeline)
}
export default Timeline
