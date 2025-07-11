import ButtonGroup from './src/button-group.vue'
import type { App } from 'vue'
ButtonGroup.install = function (app: App) {
  app.component(ButtonGroup.name, ButtonGroup)
}
export default ButtonGroup
