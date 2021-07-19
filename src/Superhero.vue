<template>
  <div class="wrapper p-10">
    <div>Superhero: {{ superheros[superheroIndex].name }}</div>
    <div class="text-black">Strength: {{ superheros[superheroIndex].powerstats.strength }}</div>
    <div class="text-black">Combat: {{ superheros[superheroIndex].powerstats.combat }}</div>
    <div class="text-black">Power: {{ superheros[superheroIndex].powerstats.power }}</div>
    <div class="text-black">Durability: {{ superheros[superheroIndex].powerstats.durability }}</div>
    <div class="text-black">Speed: {{ superheros[superheroIndex].powerstats.speed }}</div>
    <div class="text-black">Intelligence: {{ superheros[superheroIndex].powerstats.intelligence }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SuperHero',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  mounted () {
    this.$store.dispatch('getSuperheros')
  },
  computed: {
    ...mapState(['superheros']),
    superheroIndex () {
      return this.superheros.findIndex(x => x.id == this.id)
    }
  }
}
</script>

<style scoped>
.wrapper {
  font-family: 'Bangers', sans-serif;
  font-size: 70px;
}
</style>
