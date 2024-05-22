<template>
  <i class="vk-icon" :class="{[`vk-icon--${type}`]: type }" :style="customStyle">
    <font-awesome-icon v-bind="filteredProps"/>
  </i>
</template>

<script setup lang="ts">
// import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome' fail to resolve 3-rd party import type
// import type { FontAwesomeIconProps } from'./types'  fail to reexport resolve 3-rd party  type
import type {IconProps} from './types'
import {omit} from 'lodash-es'
import { computed } from 'vue'
import  { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
defineOptions({
  name: 'VKIcon'
})
const props = defineProps<IconProps>()
const filteredProps = omit(props, ['tyep', 'color'])
const customStyle = computed( () => {
  return props.color ? { color: props.color } : {}
})
</script>

<style lang="scss" scoped>

</style>