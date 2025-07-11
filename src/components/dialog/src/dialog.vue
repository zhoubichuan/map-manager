<template>
  <el-dialog
    modal-class="web-modal"
    :class="{ 'web-dialog': true, [size]: true }"
    lock-scroll
    destroy-on-close
    @close="handleCancel('icon')"
    v-bind="$attrs"
  >
    <template v-if="slots.header" #header>
      <slot name="header"></slot>
    </template>
    <template v-if="$slots.title || mold.includes('message')" #title>
      <span v-if="mold.includes('message')" class="dialog-title">提示 </span>
      <slot v-else name="title"> </slot>
    </template>
    <slot>
      <p>弹窗内容自定义</p>
    </slot>
    <template v-if="slots.footer || mold.includes('edit') || mold.includes('create')" #footer>
      <span v-if="mold.includes('edit') || mold.includes('create')" class="dialog-footer">
        <web-button @click="handleCancel('button')">取 消</web-button>
        <web-button type="primary" @click="handleConfirm">确 定</web-button>
      </span>
      <slot v-else name="footer"> </slot>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup name="WebDialog">
import { useSlots } from 'vue'
import WebButton from '../../button/index'
const { mold, size } = defineProps({
  mold: {
    type: String, // create/edit/view  message
    default: 'create'
  },
  size: {
    type: String, // big middle small
    default: 'middle'
  }
})
const emit = defineEmits(['handleCancel', 'handleConfirm'])
const handleCancel = (type: string) => {
  emit('handleCancel', type)
}
const slots = useSlots()

const handleConfirm = () => {
  emit('handleConfirm')
}
defineOptions({
  name: 'WebDialog'
})
</script>

<style lang="scss">
.web-modal {
  .el-overlay-dialog {
    overflow: hidden;
  }
}

.web-dialog {
  top: 50%;
  margin-top: 0;
  transform: translateY(-50%);

  .el-dialog__body {
    max-height: calc(100vh - 200px);
    overflow-y: auto;
  }

  &.big {
    width: 80%;
  }

  &.middle {
    width: 60%;
  }

  &.small {
    width: 40%;
  }
}

.el-dialog__header {
  border-bottom: 1px solid #edeeef;
}

.el-dialog__body {
  padding: 22px 32px 32px;
}

.el-dialog__title {
  font-weight: bold;
}
</style>
