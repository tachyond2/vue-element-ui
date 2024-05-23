<template>
  <div
    class="vk-tooltip"
  >
    <div
      class="vk-tooltip__trigger"
      ref="trigger"
      v-on="events"
    >
      <slot/>
    </div>
    <div
      v-show="isOpen"
      class="vk-tooltip__popper"
      ref="popper"
      :style="floatingStyles"
    >
      <slot name="content">{{content}}</slot>
    </div>


  </div>
</template>

<script lang="ts" setup>
import {ref, reactive} from 'vue'

import type { TooltipProps } from './types'
import {useFloating} from '@floating-ui/vue';

defineOptions({
  name: 'VKTooltip'
})

const props = withDefaults( defineProps<TooltipProps>(), {
  placement: 'buttom',
  trigger: 'hover',

})






const trigger = ref<HTMLElement>()
const popper = ref<HTMLElement>()

const {floatingStyles} = useFloating(trigger, popper);


const isOpen = ref(false)

const openTooltip = () => {
  isOpen.value = true
}
const closeTooltip = () => {
  isOpen.value = false
}

let events:Record<string, Function> = reactive({})

const attachEvents = () => {
  if(props.trigger === 'hover') {
    events = {
      'mouseenter': openTooltip,
      'mouseleave': closeTooltip
    }
  } else if( props.trigger === 'focus' ) {
    events = {
      'focus': openTooltip,
      'blur': closeTooltip
    }
  }
}
attachEvents()


</script>

<style scoped>

</style>