<template>
  <div>
    <div class="p-20 hero-font text-white">Superheros</div>
    <div class="flex justify-center">
      <div class="grid grid-cols-5 gap-8">
        <div
          v-for="(superhero, index) in superheros" :key='index'
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
  name: 'HelloWorld',
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
