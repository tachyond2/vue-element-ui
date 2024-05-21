<template>
  <div
    class="vk-collapse"
  >
   <slot/>
  </div>
</template>

<script setup lang="ts">
import {ref, provide, watch} from 'vue'

import {  type NameType, type CollapseProps, type CollapseEmits } from './types'
import {collapseContextKey} from './types'
defineOptions({
  name: 'VKCollapse'
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

const activeItems = ref<NameType[]>(props.modelValue)

watch(() => props.modelValue, () => {
  activeItems.value = props.modelValue
})

if(props.accordion && activeItems.value.length > 1){
  console.log('accordion mode should only have one active item')
}

const handleItemClick = (itemId: NameType) => {
  if(props.accordion){
    activeItems.value = [ itemId === activeItems.value[0] ? '' : itemId ]
  }else {
    const itemIndex = activeItems.value.indexOf(itemId)
    if(itemIndex > -1){
      activeItems.value.splice(itemIndex, 1)
    } else {
      activeItems.value.push(itemId)
    }
  }
  emits('update:modelValue', activeItems.value)
  emits('change', activeItems.value)
}

provide(collapseContextKey ,{
  activeItems,
  handleItemClick
})

</script>

<style lang="scss" scoped>

</style>