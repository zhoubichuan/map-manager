import Carousel from './src/carousel.vue'
import type { App } from 'vue'
Carousel.install = function (app: App) {
  app.component(Carousel.name, Carousel)
}
export default Carousel
