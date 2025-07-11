import MenuItemGroup from './src/menu-item-group.vue'
import type { App } from 'vue'
MenuItemGroup.install = function (app: App) {
  app.component(MenuItemGroup.name, MenuItemGroup)
}
export default MenuItemGroup
