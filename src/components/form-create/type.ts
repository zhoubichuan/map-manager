export interface Component {
  placeholder?: string
  disabled?: boolean
  request?: () => {}
}
export interface FormItemData {
  prop: string
  label: string
  init?: unknown
  type?: string
  component: Record<string, any> & Component
}
export type FormData = Array<FormItemData> | {}
