<template>
  <div class="wrapper">
    <div>Superhero: {{ $route.params.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'SuperHero'
}
</script>

<style scoped>
.hero-font {
  font-family: 'Bangers', sans-serif;
  font-size: 70px;
}
</style>
