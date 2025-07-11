import Footer from './src/footer.vue'
import type { App } from 'vue'
Footer.install = function (app: App) {
  app.component(Footer.name, Footer)
}
export default Footer
