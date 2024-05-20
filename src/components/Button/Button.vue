<template>
  <button
    ref="_ref"
    class="v-button"
    :class="{
      [`v-button--${type}`]: type,
      [`v-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  > 
    <span><slot/></span>
  </button>
</template>
<script lang="ts">
// import { defineComponent } from 'vue';
// export default defineComponent({
//   name: 'VButton'
// })
// </script>
<script setup lang="ts"> 
import {ref} from 'vue'
import type {ButtonProps} from './types'
withDefaults(defineProps<ButtonProps>(),{
  nativeType: 'button'
})
defineOptions({
  name:'VButton'
})

const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref
})
</script>

<style lang="scss" scoped>

</style>