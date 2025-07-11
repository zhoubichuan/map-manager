<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";

let map = null;
let autoComplete = null;
onMounted(() => {
  window._AMapSecurityConfig = {
    securityJsCode: "c5ad846e9880e98de72881171dd9be07",
  };
  AMapLoader.load({
    key: "9df9010e5c62aa7b08130181a1e98879", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.Scale,AMap.AutoComplete"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
  })
    .then((AMap) => {
      map = new AMap.Map("container", {
        zoom: 10, //地图级别
        center: [116.397428, 39.90923], //地图中心点
        viewMode: "2D", //设置地图模式
      });
      const autoOptions = {
        input: "searchInputId", //"searchInputId"替换为输入框实际 id
      };
      //无需再手动执行 search 方法，autoComplete 会根据传 input 对应的 DOM 动态触发 search
      autoComplete = new AMap.AutoComplete(autoOptions);
      //添加事件
      autoComplete.on("select", function (e) {
        // e.poi 包含选中的POI信息
        const poi = e.poi;
        console.log("选中的位置：", poi.name);
        console.log("经纬度：", poi.location);
      });
    })
    .catch((e) => {
      console.log(e);
    });
});
onUnmounted(() => {
  map?.destroy();
});
</script>

<template>
  <div class="map-container">
    <div id="container"></div>
    <div class="search-box">
      <input type="text" id="searchInputId" placeholder="请输入关键字搜索" class="search-input" />
    </div>
  </div>
</template>

<style>
#container {
  width: 100%;
  height: 800px;
}

.map-container {
  position: relative;
}

.search-box {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
}

.search-input {
  width: 300px;
  height: 40px;
  padding: 0 15px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  font-size: 14px;
  transition: all 0.3s;
}

.search-input:hover {
  border-color: #c0c4cc;
}

.search-input:focus {
  outline: none;
  border-color: #409eff;
  box-shadow: 0 0 8px rgba(64, 158, 255, 0.2);
}

.search-input::placeholder {
  color: #909399;
}
</style>
