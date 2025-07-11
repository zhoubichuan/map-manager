import SkeletonItem from './src/skeleton-item.vue'
import type { App } from 'vue'
SkeletonItem.install = function (app: App) {
  app.component(SkeletonItem.name, SkeletonItem)
}
export default SkeletonItem
