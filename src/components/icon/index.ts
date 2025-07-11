import Icon from './src/icon.vue'
import type { App } from 'vue'
Icon.install = function (app: App) {
  app.component(Icon.name, Icon)
}
export default Icon
