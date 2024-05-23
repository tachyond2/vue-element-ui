import { h, render } from 'vue'
import type { MessageProps } from './types'
import Message from './Message.vue'
export const  createMessage = (props:MessageProps) => {
  const vNode = h(Message, props)
  render(vNode, document.body)
}