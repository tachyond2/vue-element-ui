<script setup lang="ts">
import { ref, onMounted} from 'vue'

import Icon from './components/Icon/Icon.vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'
import type { NameType } from './components/Collapse/types'
import type { TooltipInstance} from './components/Tooltip/types.ts'
import type { Options} from '@popperjs/core'
import Tooltip from './components/Tooltip/Tooltip.vue'


const size = ref<any>('1x')

const openFAQs = ref<NameType[]>(['a'])


const placement = ref<any>('buttom')

const trigger = ref<any>('hover')

const tooltipRef = ref<TooltipInstance>()
const options:Partial<Options> = { placement:' bottom-end', strategy: 'fixed'}
const open = () => {
  tooltipRef.value?.open()
}
const close = () => {
  tooltipRef.value?.close()
}

onMounted(()=>{
  setTimeout(()=>{
    size.value = '3x',
    placement.value = 'right'
    trigger.value = 'focus'
  },2000)
})

</script>

<template>
  <header>
    <Tooltip  content="showing content" :placement="placement" :triggerMode="trigger">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    </Tooltip>
    <Tooltip  content="showing content" :placement="placement" manual ref="tooltipRef" :popper-options="options">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    </Tooltip>

  </header>
  
  <br/>
  <Button icon="angle-right" type="primary" @click="open">open </Button>
  <Button icon="angle-right" type="primary" @click="close">close </Button>
  <br/>
  <br/>

  <main>

    <Button icon="angle-right" type="primary" >with icon </Button>
    <Button loading > loading... </Button> <br/><br/>
    <Icon icon="arrow-up" :size="size" type="primary"/>    
    <Icon icon="arrow-up" rotation="90" type="info"/>    
    <Icon icon="arrow-up" flip="vertical" type="danger"/>    
    <Icon icon="arrow-up" spin type="warning"/>    
    <Icon icon="arrow-up" bounce type="success"/><br/><br/>
    <Collapse v-model="openFAQs">
      <Item title="this is the header"  name="a">
        this is the item-content-
      </Item>
    </Collapse><br/><br/>

   
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
