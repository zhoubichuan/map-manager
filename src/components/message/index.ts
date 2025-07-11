import { ElMessage } from 'element-plus'

export default function (options: any) {
  return ElMessage(options)
}
export const info = (options: any) => {
  return ElMessage.info(options)
}
export const success = (options: any) => {
  return ElMessage.success(options)
}
export const warning = (options: any) => {
  return ElMessage.warning(options)
}
export const error = (options: any) => {
  return ElMessage.error(options)
}