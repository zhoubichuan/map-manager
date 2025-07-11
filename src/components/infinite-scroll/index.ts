import InfiniteScroll from './src/infinite-scroll.vue'
import type { App } from 'vue'
InfiniteScroll.install = function (app: App) {
  app.component(InfiniteScroll.name, InfiniteScroll)
}
export default InfiniteScroll
