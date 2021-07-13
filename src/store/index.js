import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Vuex)

const state = {
  superheros: []
}

const getters = {}

const actions = {
  getSuperheros({ commit }) {
    axios.get('https://akabab.github.io/superhero-api/api/all.json')
      .then(response => {
        commit('SET_SUPERHEROS', response.data)
    })
  }
}

const mutations = {
    SET_SUPERHEROS(state, superheros) {
        state.superheros = superheros
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})