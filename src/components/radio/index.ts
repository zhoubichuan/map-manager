import Radio from './src/radio.vue'
import type { App } from 'vue'
Radio.install = function (app: App) {
  app.component(Radio.name, Radio)
}
export default Radio
