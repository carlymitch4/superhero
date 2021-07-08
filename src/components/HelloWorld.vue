<template>
  <div>
    <div
      v-for="(superhero, index) in superheros" :key='index'
      class="text-blue-500"
    >
      {{superhero.id}} {{superhero.name}}
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
