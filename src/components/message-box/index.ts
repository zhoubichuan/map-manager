import { ElMessageBox } from 'element-plus'
export default {
  alert: function (content: string, title: string, options?: any) {
    return ElMessageBox.alert(
      content,
      title,
      Object.assign(
        {},
        {
          customClass: 'web-message-box',
          cancelButtonClass: 'web-message-box-btn-cancel',
          confirmButtonClass: 'web-message-box-btn-confirm',
          confirmButtonText: '保存',
          cancelButtonText: '取消',
          type: 'warning'
        },
        options
      )
    )
  },
  confirm: function (content: string, title: string, options?: any) {
    return ElMessageBox.confirm(
      content,
      title,
      Object.assign(
        {},
        {
          customClass: 'web-message-box',
          cancelButtonClass: 'web-message-box-btn-cancel',
          confirmButtonClass: 'web-message-box-btn-confirm',
          confirmButtonText: '保存',
          cancelButtonText: '取消',
          type: 'warning'
        },
        options
      )
    )
  },
  prompt: function (content: string, title: string, options?: any) {
    return ElMessageBox.prompt(
      content,
      title,
      Object.assign(
        {},
        {
          customClass: 'web-message-box',
          cancelButtonClass: 'web-message-box-btn-cancel',
          confirmButtonClass: 'web-message-box-btn-confirm',
          confirmButtonText: '保存',
          cancelButtonText: '取消',
          type: 'warning'
        },
        options
      )
    )
  }
}
