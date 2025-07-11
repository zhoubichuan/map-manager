import Upload from './src/upload.vue'
import type { App } from 'vue'
Upload.install = function (app: App) {
  app.component(Upload.name, Upload)
}
export default Upload
