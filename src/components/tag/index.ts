import Tag from './src/tag.vue'
import type { App } from 'vue'
Tag.install = function (app: App) {
  app.component(Tag.name, Tag)
}
export default Tag
