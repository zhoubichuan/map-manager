import DatePicker from './src/date-picker.vue'
import type { App } from 'vue'
DatePicker.install = function (app: App) {
  app.component(DatePicker.name, DatePicker)
}
export default DatePicker
