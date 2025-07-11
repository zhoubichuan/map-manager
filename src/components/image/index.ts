import Image from './src/image.vue'
import type { App } from 'vue'
Image.install = function (app: App) {
  app.component(Image.name, Image)
}
export default Image
