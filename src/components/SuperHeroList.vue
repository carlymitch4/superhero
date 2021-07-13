<template>
  <div>
    <div class="p-20 hero-font text-white">Superheros</div>
    <div class="pb-20 flex justify-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
        <div v-for="(superhero, index) in superheros" :key='index'>
          <router-link
            :to="`/superhero/${superhero.name}`"
            class="flex flex-col justify-center rounded-lg w-60 font-mono text-xl transform hover:-translate-y-2 cursor-pointer"
          >
            {{superhero.name}}
            <img class="rounded-lg hover:shadow-md" :src="superhero.images.sm">
          </router-link>
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
