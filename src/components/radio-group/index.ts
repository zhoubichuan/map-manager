import RadioGroup from './src/radio-group.vue'
import type { App } from 'vue'
RadioGroup.install = function (app: App) {
  app.component(RadioGroup.name, RadioGroup)
}
export default RadioGroup
