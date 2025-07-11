import Calendar from './src/calendar.vue'
import type { App } from 'vue'
Calendar.install = function (app: App) {
  app.component(Calendar.name, Calendar)
}
export default Calendar
