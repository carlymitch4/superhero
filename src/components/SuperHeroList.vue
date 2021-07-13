<template>
  <div>
    <div class="p-20 hero-font text-white">Superheros</div>
    <div class="pb-20 flex justify-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
        <div
          v-for="(superhero, index) in customSuperheros" :key='index'
          class="flex flex-col justify-center rounded-lg w-60 font-mono text-xl transform hover:-translate-y-2 cursor-pointer"
        >
          {{superhero.name}}
          <img class="rounded-lg hover:shadow-md" :src="superhero.images.sm">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SuperHeroList',
  mounted () {
    this.$store.dispatch('getSuperheros')
  },
  computed: {
    ...mapState(['superheros']),
    customSuperheros () {
      let heroList = []
      for (let i = 0; i < this.superheros.length; i++) {

        if (this.superheros[i].name === 'Batgirl') {
          heroList.push(this.superheros[i])
        }

        if (this.superheros[i].name === 'Black Panther') {
          heroList.push(this.superheros[i])
        }

        if (this.superheros[i].name === 'Captain America') {
          heroList.push(this.superheros[i])
        }

        if (this.superheros[i].name === 'Deadpool') {
          heroList.push(this.superheros[i])
        }

        if (this.superheros[i].name === 'Groot') {
          heroList.push(this.superheros[i])
        }

        if (this.superheros[i].name === 'Iron Man') {
          heroList.push(this.superheros[i])
        }

        if (this.superheros[i].name === 'Spider-Man') {
          heroList.push(this.superheros[i])
        }

        if (this.superheros[i].name === 'Superman') {
          heroList.push(this.superheros[i])
        }

        if (this.superheros[i].name === 'Thor') {
          heroList.push(this.superheros[i])
        }

        if (this.superheros[i].name === 'Venom') {
          heroList.push(this.superheros[i])
        }
      }
      return heroList
    }
  }
}
</script>

<style scoped>
.hero-font {
  font-family: 'Bangers', sans-serif;
  font-size: 70px;
}
</style>
