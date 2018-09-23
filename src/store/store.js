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
        loading:false
    },

    actions: {
        loadCoins({commit}) {
            axios.get('../src/Api/data.json')
                .then(r => r.data)
                .then(data => {
                    commit('SET_DATA', data)
                })
                .catch(error => console.log(error))
            this.loading = true;
        }
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data
        }
    },
    getters: {
        getAllData: state =>{
            return state.data
        }
    }

    //getters,
})
