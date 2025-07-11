<template>
  <div class="boxsd left" ref="boxRef" @mousewheel.prevent="rollImg">
    <div ref="imgDiv" class="img">
      <img :src="imgSrc" @mousedown="move" :style="{ width: width + 'px', height: height + 'px' }" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const imgDiv = ref()
    const boxRef = ref()
    const zoomIndex = ref(100)

    const imgMove = (e: any, x: number, y: number) => {
      const img = imgDiv.value
      const Xpx = e.pageX - x
      const maxX = (props.width * ((zoomIndex.value - 100) / 100)) / (zoomIndex.value / 100)
      if (Xpx > 0) {
        img.style.left = 0
      } else if (maxX < Xpx * -1) {
        img.style.left = maxX * -1 + 'px'
      } else {
        img.style.left = Xpx + 'px'
      }

      const Ypx = e.pageY - y
      const maxY = (props.height * ((zoomIndex.value - 100) / 100)) / (zoomIndex.value / 100)

      if (e.pageY - y > 0) {
        img.style.top = 0
      } else if (maxY < Ypx * -1) {
        img.style.top = maxY * -1 + 'px'
      } else {
        img.style.top = e.pageY - y + 'px'
      }
    }

    const rollImg = (e: any) => {
      /* 获取当前页面的缩放比 若未设置zoom缩放比，则为默认100%，即1，原图大小 */
      let zoom = parseInt(imgDiv.value.style.zoom) || 100
      /* event.wheelDelta 获取滚轮滚动值并将滚动值叠加给缩放比zoom wheelDelta统一为±120，其中正数表示为向上滚动，负数表示向下滚动 */
      zoom += e.wheelDelta / 12
      /* 最小范围 和 最大范围 的图片缩放尺度 */
      if (zoom >= 100 && zoom < 500) {
        imgDiv.value.style.zoom = zoom + '%'
        if (zoomIndex.value > zoom) {
          zoomIndex.value = zoom
          const img = imgDiv.value
          const x = e.pageX - img.offsetLeft
          const y = e.pageY - img.offsetTop
          imgMove(e, x, y)
        }
        zoomIndex.value = zoom
      }
      return false
    }

    const move = (e: { preventDefault: () => void; pageX: number; pageY: number }) => {
      e.preventDefault()
      // 获取元素
      const left = boxRef.value
      const img = imgDiv.value
      const x = e.pageX - img.offsetLeft
      const y = e.pageY - img.offsetTop
      // 添加鼠标移动事件
      left.addEventListener('mousemove', move)
      function move(e: { pageX: number; pageY: number }) {
        imgMove(e, x, y)
      }
      // 添加鼠标抬起事件，鼠标抬起，将事件移除
      img.addEventListener('mouseup', function () {
        left.removeEventListener('mousemove', move)
      })
      // 鼠标离开父级元素，把事件移除
      left.addEventListener('mouseout', function () {
        left.removeEventListener('mousemove', move)
      })
    }

    return {
      imgDiv,
      boxRef,
      rollImg,
      move
    }
  }
})
</script>

<style lang="scss" scoped>
.boxsd {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000;

  > div {
    position: absolute;
    width: 100%;
    height: 100%;

    > img {
      cursor: move;
    }
  }
}
</style>
