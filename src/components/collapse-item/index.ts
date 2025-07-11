import CollapseItem from './src/collapse-item.vue'
import type { App } from 'vue'
CollapseItem.install = function (app: App) {
  app.component(CollapseItem.name, CollapseItem)
}
export default CollapseItem
