import type { Ref, InjectionKey } from 'vue'

export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}


export type NameType = string | number


export interface collapseContext {
  activeItems: Ref<NameType[]>;
  handleItemClick: (itemId:NameType) => void;
}

export const collapseContextKey: InjectionKey<collapseContext> = Symbol('collapseContextKey')