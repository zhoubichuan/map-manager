import { h } from 'vue'
const FC = (props, context) => {
  return props.render(h, props.formData)
}

export default FC
