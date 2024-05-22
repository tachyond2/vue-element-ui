<template>
  <i class="vk-icon">
    <font-awesome-icon v-bind="$props"/>
  </i>
</template>

<script setup lang="ts">
// import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome' fail to resolve 3-rd party import type
// import type { FontAwesomeIconProps } from'./types'  fail to reexport resolve 3-rd party  type
import type {IconProps} from './types'

import  { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
defineOptions({
  name: 'VKIcon'
})
defineProps<IconProps>()

</script>

<style lang="scss" scoped>

</style>