
export type ButtonType = 'default' | 'primary' | 'danger' | 'warning' | 'info' | 'success'
export type ButtonSize = 'small' | 'normal' | 'large'
export type NativeType = 'button' | 'reset' | 'submit'
export interface ButtonProps  {
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  round?: boolean;
  circle?: boolea;
  disabled?: boolean;
  icon?: string;
  loading?: boolean;
  // native support
  autofocus?: boolean;
  nativeType?: NativeType;

}
export interface ButtonInstance {
  ref: HTMLButtonElement
}