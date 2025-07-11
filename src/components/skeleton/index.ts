import Skeleton from './src/skeleton.vue'
import type { App } from 'vue'
Skeleton.install = function (app: App) {
  app.component(Skeleton.name, Skeleton)
}
export default Skeleton
