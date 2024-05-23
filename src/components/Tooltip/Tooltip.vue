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

import {ref, reactive, watch, computed} from 'vue'
import type { TooltipProps } from './types'
import type { TooltipInstance } from './types'
import {useFloating} from '@floating-ui/vue' 
import useClickOutside  from '../../hooks/useClickOutside.ts'

import { createPopper } from '@popperjs/core'
import type { Instance } from '@popperjs/core'

defineOptions({
  name: 'VKTooltip'
})

const props = withDefaults( defineProps<TooltipProps>(), {
  placement: 'buttom',
  triggerMode: 'hover',
})




let popperInstance: null | Instance = null

const triggerEl = ref<HTMLElement>()
const popperEl = ref<HTMLElement>()
const tooltipEl = ref<HTMLElement>()

const {floatingStyles} = useFloating(triggerEl, popperEl);


const popperOptions = computed(()=>{
  return {
    placement: props.placement,
    ...props.options
  }
})


const isOpen = ref(false)

watch(isOpen, (newValue) =>{
  if(newValue) {
    if(triggerEl.value && popperEl.value) {
       popperInstance = createPopper(triggerEl.value, popperEl.value, popperOptions.value)
    } else {
      popperInstance?.destroy()
    }
  }
})

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
if(!props.manual){
  attachEvents()
}

watch(()=> props.manual, (isManual) => {
    if(isManual){
      inEvents = {}
      outEvents = {}
    } else {
      attachEvents()
    }
})

useClickOutside(tooltipEl, () => {
  if(props.triggerMode === 'focus' && isOpen.value && !props.manual){
    isOpen.value = false
    console.log('useClickOutside get executed')
  }
})

watch(() => props.triggerMode, (newTrigger, oldTrigger) => {
  if(newTrigger !== oldTrigger){
    inEvents = {}
    outEvents = {}
    attachEvents()
  }
 })

defineExpose<TooltipInstance>({
  'open': openTooltip,
  'close': closeTooltip
})


</script>

<style scoped>

</style>