import DescriptionsItem from './src/descriptions-item.vue'
import type { App } from 'vue'
DescriptionsItem.install = function (app: App) {
  app.component(DescriptionsItem.name, DescriptionsItem)
}
export default DescriptionsItem
