import TransferCascaderPanel from './src/transfer-cascader-panel.vue'
import type { App } from 'vue'
TransferCascaderPanel.install = function (app: App) {
  app.component(TransferCascaderPanel.name, TransferCascaderPanel)
}
export default TransferCascaderPanel
