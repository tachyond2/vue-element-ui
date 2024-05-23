import type {VNode} from 'vue'

export interface MessageProps {
  content: string | VNode
  showClose?: boolean
  type?: 'success' | 'error' | 'info' | 'warning'
  duration?: number
}