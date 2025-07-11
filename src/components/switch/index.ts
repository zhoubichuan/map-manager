import Switch from './src/switch.vue'
import type { App } from 'vue'
Switch.install = function (app: App) {
  app.component(Switch.name, Switch)
}
export default Switch
