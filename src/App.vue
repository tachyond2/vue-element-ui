<script setup lang="ts">
import { ref, onMounted} from 'vue'

import Icon from './components/Icon/Icon.vue'



</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>

    <Icon icon="arrow-up" size="xl" type="primary"/>    
    <Icon icon="arrow-up" rotation="90" type="info"/>    
    <Icon icon="arrow-up" flip="vertical" type="danger"/>    
    <Icon icon="arrow-up" spin type="warning"/>    
    <Icon icon="arrow-up" bounce type="success"/>    
   
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
