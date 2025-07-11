import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import basicSsl from '@vitejs/plugin-basic-ssl';
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  /**
   * 根据当前工作目录中的 `mode` 加载 .env 文件
   * 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
   */
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // 开发或生产环境服务的公共基础路径
    base: env.VITE_BASE_URL,

    // 插件配置
    plugins: [
      vue(),
      vueDevTools(),
      basicSsl(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
    ],
    resolve: {
      alias: {
        'web-components': fileURLToPath(new URL('./src/components', import.meta.url)),
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: 3000,
      open: true,
      // 配置自定义代理规则
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: "http://localhost:8080",
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), ""),
        },
      },
    },
    // 构建配置
    build: {
      // 指定输出路径（相对于 项目根目录)
      outDir: "map-manager",
      // 指定生成静态资源的存放路径（相对于 build.outDir）
      assetsDir: "assets",
    },
  };
});
