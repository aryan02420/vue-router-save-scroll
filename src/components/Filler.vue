<template>
  <div>
      <div
        v-for="item in items"
        :key="item"
        :style="{ backgroundColor: bgColor, color: color }"
      >
        <h1>{{ item }}</h1>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Filler',
  props: {
    items: Array,
    bgColor: {
      type: String,
      required: false,
      default: '#41B883',
    },
    color: {
      type: String,
      required: false,
      default: '#ffffff',
    },
  },
}
</script>

<style scoped>
h1 {
    font-size: 10rem;
    padding: 5rem;
}
</style>
