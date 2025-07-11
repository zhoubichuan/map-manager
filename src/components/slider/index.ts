import Slider from './src/slider.vue'
import type { App } from 'vue'
Slider.install = function (app: App) {
  app.component(Slider.name, Slider)
}
export default Slider
