import TimelineItem from './src/timeline-item.vue'
import type { App } from 'vue'
TimelineItem.install = function (app: App) {
  app.component(TimelineItem.name, TimelineItem)
}
export default TimelineItem
