import Vue from 'vue'
import Vuex from 'vuex'
import * as texts from '../Api/data.json'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: texts,
    wpData: ''
  },
  actions: {
    loadData({commit}) {
      axios.get('https://admin.gisa.lt/wp-json/wp/v2/pages')
        .then(res => res.data)
        .then(wpData => {
          commit('SET_PAGES', wpData)
        })
    }

  },
  mutations: {
    SET_PAGES(state, wpData) {
      state.wpData = wpData
    }
  },
  getters: {
    getAllData: state => {
      return state.data
    },
    getWpData: state => {
      return state.wpData
    }
  }
})
