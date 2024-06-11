<template>
  <nav-bar />
  <main class="container">
    <RouterView />
  </main>
  <app-footer class="footer"/>
</template>

<script>
import NavBar from '@/components/NavBarComponent.vue'
import AppFooter from '@/components/AppFooterComponent.vue'
import { useCounterStore } from './stores/CounterStore.js';

export default { 
  data(){
    return {
      counterStore: useCounterStore()
    
    }
  },
  components: {
    NavBar,
    AppFooter
  },
  created(){
    this.counterStore.init()
  }
}
</script>
<style scoped>
main{
  height: 100%;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
