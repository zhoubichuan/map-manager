<template>
  <el-table
    class="web-table"
    :data="data"
    stripe
    header-cell-class-name="up3-custom-header-cell"
    cell-class-name="up3-custom-cell"
  >
    <el-table-column v-for="(item, index) in column" :key="index" v-bind="item">
      <template #header="{ column }">
        <span class="text">{{ column.label }}</span>
      </template>
      <template #default="{ row, column }">
        <div class="operation" v-if="'操作' === column.label">
          <component
            v-text="item?.component?.text"
            :is="item?.component?.is"
            :class="item?.component?.class"
            @click="() => handleOperation(row)"
          />
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts" name="WebTableOperation">
import { ElTable, ElTableColumn } from 'element-plus'
type component = { is: string; class?: string; text: string }
const { data, column } = defineProps<{
  data?: component[]
  column?: { component?: component }[]
}>()

defineOptions({
  name: 'WebTableOperation'
})
const emit = defineEmits(['operation'])
const handleOperation = (row: typeof ElTableColumn & component) => {
  emit('operation', row)
}
</script>

<style lang="scss" scoped>
// @import '../../config.scss';

// .#{$prefix}-table {
//   width: 1400px;
//   max-height: 682px;
//   min-height: 248px;
//   border-radius: 12px 12px 0 0;

//   &::before {
//     display: none;
//   }

//   :deep(.#{$namespace}-table__header-wrapper) {
//     height: 49px;

//     .#{$namespace}-table__header {
//       height: 100%;

//       .#{$namespace}-table__cell {
//         padding: 0;

//         .cell {
//           font-weight: bold;
//           font-size: 18px;
//           color: #244367;
//           line-height: 25px;
//           text-align: center;
//           font-style: normal;
//           text-transform: none;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 0;
//         }

//         &.two-font {
//           .cell {
//             .text {
//               width: 44px;
//             }
//           }
//         }

//         &.three-font {
//           .cell {
//             .text {
//               width: 66px;
//             }
//           }
//         }

//         &.four-font {
//           .cell {
//             .text {
//               width: 88px;
//             }
//           }
//         }
//       }
//     }
//   }

//   :deep(.#{$namespace}-table__body-wrapper) {
//     height: calc(100% - 49px);
//     background: #f3f6f9;

//     .#{$namespace}-table__header {}

//     .#{$namespace}-scrollbar {
//       height: 100%;

//       .#{$namespace}-scrollbar__wrap {
//         max-height: 500px;

//         .#{$namespace}-scrollbar__view {
//           width: 100%;

//           .#{$namespace}-table__body {
//             // width: auto !important; // todo 为何组件内部会直接计算值
//           }
//         }
//       }
//     }
//   }

//   &.#{$namespace}-table--striped {
//     :deep(.#{$namespace}-table__header-wrapper) {
//       .#{$namespace}-table__header {
//         .#{$namespace}-table__cell {
//           background: #f3f6f9;
//         }
//       }
//     }

//     :deep(.#{$namespace}-table__body) {
//       .#{$namespace}-table__row--striped {
//         .#{$namespace}-table__cell {
//           background: #f7f8fc;
//         }
//       }
//     }
//   }
// }
</style>
