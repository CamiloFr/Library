<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Contenido />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Contenido from '@/components/Contenido.vue'

export default {
  name: 'home',
  components: {
    Contenido,
    // HelloWorld
  }
}
</script>
