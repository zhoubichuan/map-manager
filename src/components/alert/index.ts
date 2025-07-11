import Alert from './src/alert.vue'
import type { App } from 'vue'
Alert.install = function (app: App) {
  app.component(Alert.name, Alert)
}
export default Alert
