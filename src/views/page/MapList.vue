<template>
  <div class="fence-list" v-if="list.length">
    <h3>电子围栏列表（{{ list.length }}）</h3>
    <div v-for="fence in list" :key="fence.gfid" class="fence-item">
      <span class="fence-id">{{ fence.gfid }}</span>
      <span class="fence-id">{{ fence.name }}</span>
      <div class="actions">
        <button @click="editFence(fence)" class="edit-btn">
          ✏️ 编辑
        </button>
        <button @click="delFence(fence)" class="delete-btn">
          🗑️ 删除
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { editFence, delFence, list } = defineProps({
  editFence: {
    type: Function,
    require: true
  },
  delFence: {
    type: Function,
    require: true
  },
  list: {
    type: Array,
    default: () => []
  }
})


</script>
