import Vue from 'vue'
import Vuex from 'vuex'
import * as texts from '../Api/data.json'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: texts
    },
    getters: {
        getAllData: state => state.data
    }
})
