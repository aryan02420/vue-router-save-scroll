<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Filler :items="[1, 2, 3, 4, 5, 6, 7, 8, 9]" bgColor="#2F9E9D"/>
</template>

<script>
import Filler from '@/components/Filler.vue'

export default {
  name: 'About',
  components: {
    Filler,
  },
}
</script>
