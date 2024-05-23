import type { Placement, Options } from '@popperjs/core'

export interface TooltipProps {
  content?: string;
  triggerMode?: 'hover' | 'focus' ;
  manual?: boolean
  placement?: Placement;
  popperOptions?: Partial<Options>;
  openDelay?: number;
  closeDelay?: number;
}

export interface TooltipInstance {
  open: () => void
  close: () => void
}