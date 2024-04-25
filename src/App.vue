<template>
  <nav-bar />
  <main class="container">
    <RouterView />
  </main>
</template>

<script>
import NavBar from '@/components/NavBarComponent.vue'
export default { 
  components: {
    NavBar
  }
}
</script>
