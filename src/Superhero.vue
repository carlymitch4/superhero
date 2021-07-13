<template>
  <div class="wrapper">
    <div>This is a test {{ $route.params.name }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SuperHero',
  mounted () {
    this.$store.dispatch('getSuperheros')
  },
  computed: {
    ...mapState(['superheros'])
  }
}
</script>

<style scoped>
.hero-font {
  font-family: 'Bangers', sans-serif;
  font-size: 70px;
}
</style>
