<template>
  <el-upload
    v-model:file-list="fileList"
    class="web-upload-template"
    action="#"
    :on-preview="handlePreview"
    :http-request="uploadSubmit"
    :on-remove="handleRemove"
    v-bind="$attrs"
    :limit="1"
    :on-exceed="handleExceed"
  >
    <el-button :disabled="fileList.length" :icon="Upload">上传文件</el-button>
    <template #tip>
      <el-button class="download" link @click="handleDown">下载模板</el-button>
    </template>
  </el-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Upload } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { UploadProps, UploadUserFile } from 'element-plus'
const { requestDownload, templateUrl, requestUpload } = defineProps({
  requestDownload: {
    type: Function,
    default: () => {}
  },
  templateUrl: {
    type: String,
    default: ''
  },
  requestUpload: {
    type: Function,
    default: () => {}
  }
})
const emits = defineEmits(['update:modelValue'])
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const uploadSubmit = async (options: { file: Blob; onSuccess: Function; onError: Function }) => {
  const { file, onSuccess, onError } = options
  emits('update:modelValue', file)
  if (file.size > MAX_FILE_SIZE) {
    onError(new Error('文件大小超过限制，请上传小于5MB的图片'))
    return
  }
  try {
    const formData = new FormData()
    formData.append('file', file) // 文件对象
    const { c, m } = await requestUpload(formData)
    if (c === 200) {
      ElMessage.success('上传成功！')
    } else {
      ElMessage.error(m)
    }
  } catch (error) {
    onError(error)
    console.error('文件上传失败:', error)
  }
}
const handleDown = async () => {
  let url: string
  if (templateUrl) {
    url = templateUrl
  } else {
    const res = await requestDownload()
    url = window.URL.createObjectURL(new Blob([res]))
  }

  const link = document.createElement('a')
  link.href = url
  document.body.appendChild(link)
  link.click()
}
const fileList = ref<UploadUserFile[]>([])
const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}
const handlePreview: UploadProps['onPreview'] = uploadFile => {
  console.log(uploadFile)
}
const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length}`
  )
}
</script>

<style lang="scss" scoped>
.web-upload-template {
  margin-left: 10px;
}
</style>
