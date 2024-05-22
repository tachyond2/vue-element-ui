<script setup lang="ts">
import { ref, onMounted} from 'vue'

import Icon from './components/Icon/Icon.vue'

import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'


const openFAQs = ref(['a'])

onMounted(()=>{
  if(buttonRef.value){
    console.log(buttonRef.value.ref)
  }
  setTimeout(() => openFAQs.value = ['a', 'b'], 2000)
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>

    <Icon icon="arrow-up"/>    
    <Collapse v-model="openFAQs" accordion>
      <Item name="a">
        <template #title>
          <h1>this is title a </h1>
        </template>
        <div> this is content a</div>
      </Item>
      <Item name='b' title="this is title b">
        <div> this is content b</div>
      </Item>
      <Item name="c" disabled title="this is title c">
        <div>this is content c</div>
      </Item>
      
    </Collapse>
    {{ openFAQs }}
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
