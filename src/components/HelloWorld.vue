<template>
  <div>
    <div class="text-3xl pb-12 font-hero">Superheros</div>
    <div class="flex justify-center">
      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="(superhero, index) in superheros" :key='index'
          class="rounded-lg bg-gray-500 w-80"
        >
          {{superhero.name}}
          <img class="rounded-lg" :src="superhero.images.sm">
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
</style>
