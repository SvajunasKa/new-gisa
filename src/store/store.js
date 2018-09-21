import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import * as images from '../Api/images'
import * as getters from './getters'
import * as texts from '../Api/data.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: images,
    data: [],
  },

  actions: {
    loadCoins ({ commit }) {
      axios
        .get('../src/Api/data.json')
        .then(r => r.data)
        .then(data => {
          commit('SET_COINS', data)
        })
        .catch(error => console.log(error))
    }
  },
  mutations: {
    SET_COINS (state, data) {
      state.data = data
    }
  }



 // getters,
})
