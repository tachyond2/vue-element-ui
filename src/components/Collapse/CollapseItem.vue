<template>
  <div
    class="vk-collapse-item"
  >
    <div class="vk-collapse-item__header"
    :class="{
      'is-disabled': disabled,
      'is-active': isActive
    }"
    :id="`item-header-${name}`"
    @click="handleClick"
  >
    <slot name="title">{{title}}</slot>
    </div>
    <div class="vk-collapse-item__content" v-show="isActive"
      :id="`item-content-${name}`"
    >
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import type { CollapseItemProps } from './types'
import {collapseContextKey} from './types'
defineOptions({
  name: 'VKCollapseItem'
})
const props = defineProps<CollapseItemProps>()

const collapseContext = inject(collapseContextKey)

const isActive = computed( () => collapseContext?.activeItems.value.includes(props.name))

const handleClick = () => {
  if(props.disabled) return 
  collapseContext?.handleItemClick(props.name)
}

</script>

<style lang="scss" scoped>

</style>