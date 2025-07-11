<template>
  <div class="control-panel" v-if="type === 'panel'">
    <button @click="() => show = !show">⬆️⬇️</button>
    <button @click="create('circle')" :disabled="mapData.isEditing || mapData.loading" class="create-btn">
      🗺️ 新建圆形围栏
    </button>
    <button @click="create('polygon')" :disabled="mapData.isEditing || mapData.loading" class="create-btn">
      🗺️ 新建多边形围栏
    </button>
    <button @click="finishedEdit" :disabled="mapData.isEditing || mapData.loading" class="create-btn">
      🗺️ 绘制完成
    </button>
    <button @click="getMapList" class="create-btn">
      🗺️ 获取列表
    </button>
    <button @click="cancelCreate" v-show="mapData.isCreating" class="cancel-btn">
      ❌ 取消创建
    </button>
    <button v-if="mapData.isEditing" @click="finishedEdit" class="edit-complete-btn">
      ✔️ 完成编辑
    </button>
    <slot :show="show"></slot>
  </div>
</template>
<script lang="ts" setup>
import { inject, ref } from 'vue'
const { mapData } = inject('mapData')
const { create, getMapList, statrAddress, type } = defineProps({
  fences: {
    type: Array,
    default: () => [],
  },
  handleToCity: {
    type: Function,
    default: () => { }
  },
  finishedEdit: {
    type: Function,
    default: () => { }
  },
  handleToLocal: {
    type: Function,
    default: () => { }
  },
  create: {
    type: Function,
    default: () => { }
  },
  getMapList: {
    type: Function,
    default: () => { }
  },
  safeCloseEditor: {
    type: Function,
    default: () => { }
  },
  statrAddress: {
    type: Array,
    default: () => [],
  },
  type: {
    type: String,
    default: 'panel'
  },
  gfid: {
    type: String,
    default: 'edit'
  }
})

const show = ref(true)
getMapList()

</script>

<style lang="scss">
.fence-container {
  position: relative;
  height: 100vh;
}

.map-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

.loading-text {
  margin-top: 15px;
  color: #666;
}

.control-panel {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.95);
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  min-width: 260px;
  z-index: 999;
}

button {
  margin: 5px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.create-btn {
  background: #4caf50;
  color: white;
}

.cancel-btn {
  background: #f44336;
  color: white;
}

.edit-complete-btn {
  background: #2196f3;
  color: white;
  animation: pulse 1.5s infinite;
}

.edit-btn {
  background: #ffc107;
  color: black;
}

.delete-btn {
  background: #9e9e9e;
  color: white;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.fence-list {
  margin-top: 15px;
  max-height: 60vh;
  overflow-y: auto;
}

.fence-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 8px 0;
  background: #f8f9fa;
  border-radius: 4px;
}

.fence-id {
  font-size: 14px;
  color: #333;
}

.actions {
  display: flex;
  gap: 8px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

.web-modal {
  .el-dialog {
    .el-dialog__body {
      padding: 22px 32px 42px;
    }
  }
}
</style>
