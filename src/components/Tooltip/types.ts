
export interface TooltipProps {
  placement?: string;
  content?: string;
  triggerMode?: 'hover' | 'focus' ;
  manual?: boolean;
}

export interface TooltipInstance {
  open: () => void
  close: () => void
}