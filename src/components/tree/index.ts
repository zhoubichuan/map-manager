import Tree from './src/tree.vue'
import type { App } from 'vue'
Tree.install = function (app: App) {
  app.component(Tree.name, Tree)
}
export default Tree
