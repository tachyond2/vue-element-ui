<template>
  <div
    class="vk-tooltip"
    ref="tooltipEl"
    v-on="outEvents"
  > 
    <div
      class="vk-tooltip__trigger"
      ref="triggerEl"
      v-on="inEvents"
    >
      <slot/>
    </div>
    <div
      v-show="isOpen"
      class="vk-tooltip__popper"
      ref="popperEl"
      :style="floatingStyles"
    >
      <slot name="content">{{content}}</slot>
    </div>


  </div>
</template>

<script lang="ts" setup>

import {ref, reactive, watch} from 'vue'
import type { TooltipProps } from './types'
import {useFloating} from '@floating-ui/vue';
import useClickOutside  from '../../hooks/useClickOutside'

defineOptions({
  name: 'VKTooltip'
})

const props = withDefaults( defineProps<TooltipProps>(), {
  placement: 'buttom',
  triggerMode: 'hover',
})






const triggerEl = ref<HTMLElement>()
const popperEl = ref<HTMLElement>()
const tooltipEl = ref<HTMLElement>()

const {floatingStyles} = useFloating(triggerEl, popperEl);


const isOpen = ref(false)

const openTooltip = () => {
  isOpen.value = true
}
const closeTooltip = () => {
  isOpen.value = false
}

let inEvents:Record<string, Function> = reactive({})
let outEvents:Record<string, Function> = reactive({})

const attachEvents = () => {
  if(props.triggerMode === 'hover') {
    inEvents['mouseenter'] = openTooltip
    outEvents['mouseleave'] = closeTooltip
    
  } else if( props.triggerMode === 'focus' ) {
    inEvents['click'] = openTooltip
  }
}
attachEvents()

useClickOutside(tooltipEl, () => {
  if(props.triggerMode === 'focus' && isOpen.value){
    isOpen.value = false
  }
})

watch(() => props.triggerMode, (newTrigger, oldTrigger) => {
  if(newTrigger !== oldTrigger){
    inEvents = {}
    outEvents = {}
    attachEvents()
  }
 })

</script>

<style scoped>

</style>