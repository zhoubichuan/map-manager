import Cascader from './src/cascader.vue'
import type { App } from 'vue'
Cascader.install = function (Vue: App) {
  Vue.component(Cascader.name, Cascader)
}
export default Cascader
