import Vue from 'vue'
import './assets/main.css'
import store from './store'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Superhero from './Superhero.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/superhero/:id', name: 'superhero', component: Superhero }
]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
