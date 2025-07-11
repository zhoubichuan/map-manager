import ColorPicker from './src/color-picker.vue'
import type { App } from 'vue'
ColorPicker.install = function (app: App) {
  app.component(ColorPicker.name, ColorPicker)
}
export default ColorPicker
