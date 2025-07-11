/// <reference types="vite/client" />
// 原因：因为我们使用的是 ts 的语法，项目只识别 ts 后缀的文件，无法识别  .vue 文件，所以引入的时候会报错；
declare module "*.vue" {
  const component: ComponentOptions | ComponentOptions["setup"];
  export default component;
}
