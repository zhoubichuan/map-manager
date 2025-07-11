import Container from './src/container.vue'
import type { App } from 'vue'
Container.install = function (app: App) {
  app.component(Container.name, Container)
}
export default Container
