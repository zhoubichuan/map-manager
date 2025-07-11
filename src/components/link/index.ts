import Link from './src/link.vue'
import type { App } from 'vue'
Link.install = function (app: App) {
  app.component(Link.name, Link)
}
export default Link
