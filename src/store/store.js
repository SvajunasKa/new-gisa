import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import * as images from '../Api/images'
import * as getters from './getters'
import * as texts from '../Api/data.json'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: texts
    },

    /*actions: {
        loadCoins({commit}) {
            axios.get('../src/Api/data.json')
                .then(r => r.data)
                .then(data => {
                    commit('SET_DATA', data)
                })
                .catch(error => console.log(error));
        }
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data
        }
    },*/
    getters: {
        getAllData: state =>{
            return state.data
        }
    }
    //getters,
})
