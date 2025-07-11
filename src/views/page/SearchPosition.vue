<template>
  <div class="search-box">
    <input type="text" id="searchInputId" placeholder="请输入关键字搜索" class="search-input" />
  </div>
</template>

<style>
.amap-sug-result{
  z-index: 10000;
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
