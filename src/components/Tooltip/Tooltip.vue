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
    <Transition name="fade">

      <div
        v-show="isOpen"
        class="vk-tooltip__popper"
        ref="popperEl"
        :style="floatingStyles"
      >
        <slot name="content">{{content}}</slot>
      <div id="arrow" data-popper-arrow></div>

      </div>
    </Transition>


  </div>
</template>

<script lang="ts" setup>

import {ref, reactive, watch, computed} from 'vue'
import type { TooltipProps } from './types'
import type { TooltipInstance } from './types'
import {useFloating} from '@floating-ui/vue' 
import useClickOutside  from '../../hooks/useClickOutside'

import { createPopper } from '@popperjs/core'
import type { Instance } from '@popperjs/core'

import { debounce } from 'lodash-es'
import type { log } from 'console'

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

let openTimes = 0
let closeTimes = 0


const popperOptions = computed(()=>{
  return {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9],
        },
      }
    ],
    ...props.popperOptions
  }
})

// const {floatingStyles} = ref(useFloating(triggerEl, popperEl, popperOptions.value)).value;
const {floatingStyles} = useFloating(triggerEl, popperEl, popperOptions.value)



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
  openTimes++
  console.log('open times', openTimes)
  isOpen.value = true
}
const closeTooltip = () => {
  closeTimes++
  console.log('close times', closeTimes)
  isOpen.value = false
}

const openDebounce = debounce(openTooltip, props.openDelay)
const closeDebounce = debounce(closeTooltip, props.closeDelay)

const openFinal = () => {
  closeDebounce.cancel()
  openDebounce()
}
const closeFinal = () => {
  openDebounce.cancel()
  closeDebounce()
}

let inEvents:Record<string, Function> = reactive({})
let outEvents:Record<string, Function> = reactive({})

const attachEvents = () => {
  if(props.triggerMode === 'hover') {
    inEvents['mouseenter'] = openFinal
    outEvents['mouseleave'] = closeFinal
    
  } else if( props.triggerMode === 'focus' ) {
    inEvents['click'] = openFinal
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
    closeTooltip()
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
  'open': openFinal,
  'close': closeFinal
})


</script>

<style scoped>


</style>