import CascaderPanel from './src/cascader-panel.vue'
import type { App } from 'vue'
CascaderPanel.install = function (app: App) {
  app.component(CascaderPanel.name, CascaderPanel)
}
export default CascaderPanel
