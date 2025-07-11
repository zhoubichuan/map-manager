import SelectImage from './src/select-image.vue'
import type { App } from 'vue'
SelectImage.install = function (app: App) {
  app.component(SelectImage.name, SelectImage)
}
export default SelectImage
