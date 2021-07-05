<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
  <Filler :items="['A', 'B', 'C', 'D', 'E']" />
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Filler from '@/components/Filler.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Filler,
  },
}
</script>
