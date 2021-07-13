import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

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
      let heroList = []
      for (let i = 0; i < superheros.length; i++) {

        if (superheros[i].name === 'Batgirl') {
          heroList.push(superheros[i])
        }

        if (superheros[i].name === 'Black Panther') {
          heroList.push(superheros[i])
        }

        if (superheros[i].name === 'Captain America') {
          heroList.push(superheros[i])
        }

        if (superheros[i].name === 'Deadpool') {
          heroList.push(superheros[i])
        }

        if (superheros[i].name === 'Groot') {
          heroList.push(superheros[i])
        }

        if (superheros[i].name === 'Iron Man') {
          heroList.push(superheros[i])
        }

        if (superheros[i].name === 'Spider-Man') {
          heroList.push(superheros[i])
        }

        if (superheros[i].name === 'Superman') {
          heroList.push(superheros[i])
        }

        if (superheros[i].name === 'Thor') {
          heroList.push(superheros[i])
        }

        if (superheros[i].name === 'Venom') {
          heroList.push(superheros[i])
        }
      }
      state.superheros = heroList
  }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})