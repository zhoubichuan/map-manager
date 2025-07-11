import CarouselItem from './src/carousel-item.vue'
import type { App } from 'vue'
CarouselItem.install = function (app: App) {
  app.component(CarouselItem.name, CarouselItem)
}
export default CarouselItem
