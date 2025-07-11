import TimePicker from './src/time-picker.vue'
import type { App } from 'vue'
TimePicker.install = function (app: App) {
  app.component(TimePicker.name, TimePicker)
}
export default TimePicker
