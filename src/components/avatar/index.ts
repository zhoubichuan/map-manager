import Avatar from './src/avatar.vue'
import type { App } from 'vue'
Avatar.install = function (app: App) {
  app.component(Avatar.name, Avatar)
}
export default Avatar
