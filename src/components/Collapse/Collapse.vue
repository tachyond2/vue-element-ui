<template>
  <div
    class="vk-collapse"
  >
   <slot/>
  </div>
</template>

<script setup lang="ts">
import {ref, provide} from 'vue'

import type {  NameType } from './types'
import {collapseContextKey} from './types'
defineOptions({
  name: 'VKCollapseItem'
})
// defineProps<collapseProps>()
const activeItems = ref<NameType[]>([])

const handleItemClick = (itemId: NameType) => {
  const itemIndex = activeItems.value.indexOf(itemId)
  if(itemIndex > -1){
    activeItems.value.splice(itemIndex, 1)
  } else {
    activeItems.value.push(itemId)
  }
}

provide(collapseContextKey ,{
  activeItems,
  handleItemClick
})

</script>

<style lang="scss" scoped>

</style>