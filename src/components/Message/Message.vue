<template>
  <div
    class="message"
    v-show="visible"
    :class="{
      [`vk-message-${type}`]: type
    }"
    role="alert"
  >
    <div class="message__content">
      <slot>{{content}}</slot>
    </div>
    <!-- <div class="message__close" v-if="showClose" @click="() => visible = false"> -->
        <Icon icon="xmark" v-if="showClose" @click="() => visible = false" class="message__close"/>   
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
import type { MessageProps } from './types'
import Icon from '../Icon/Icon.vue'
import { ref, onMounted} from 'vue'

const props = withDefaults(defineProps<MessageProps>(), {
  showClose: false,
  type: 'info',
  duration: 3000
})

const visible = ref(false)

function startTimer() {

  if(props.duration === 0) return 
  setTimeout(()=>{
    visible.value = false
  }, props.duration)
  
}

onMounted(() => {
  visible.value = true
  startTimer()
})
</script>

<style scoped>
.message{
  --vk-message-border-color: var(--vk-border-color)
}
.message{
  display: flex;
  gap: 10px;
  align-items:center;
  position: fixed;
  left: 50%;
  top:5%;
  transform: translateX(-50%);
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid var(--vk-message-border-color)
}


.vk-message-success {
  --vk-message-border-color: var(--vk-color-success-light-3)

  
}
</style>