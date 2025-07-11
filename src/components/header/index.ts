import Header from './src/header.vue'
import type { App } from 'vue'
Header.install = function (app: App) {
  app.component(Header.name, Header)
}
export default Header
