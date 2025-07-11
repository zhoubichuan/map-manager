import UploadTemplate from './src/upload-template.vue'
import type { App } from 'vue'
UploadTemplate.install = function (app: App) {
  app.component(UploadTemplate.name, UploadTemplate)
}
export default UploadTemplate
