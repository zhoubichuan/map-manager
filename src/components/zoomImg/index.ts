import ZoomImg from './src/zoomImg'
import type { App } from 'vue'
ZoomImg.install = function (app: App) {
  app.component(ZoomImg.name, ZoomImg)
}
export default ZoomImg
