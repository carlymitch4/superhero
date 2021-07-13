<template>
  <div id="app">
    <SuperHeroList/>
  </div>
</template>

<script>
import SuperHeroList from './components/SuperHeroList.vue'

export default {
  name: 'App',
  components: {
    SuperHeroList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(to right, #8B0001 , #C34632);
}
</style>
