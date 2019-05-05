import Vue from 'vue'
import Vuex from 'vuex'
import * as texts from '../Api/data.json'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: texts,
        wp:''
    },
    actions: {
        loadData({commit}) {
            axios.get('http://admin.gisa.lt/wp-json/wp/v2/pages')
                .then(res => res.data)
                .then(pages => {
                    commit('SET_PAGES', pages)
                })
        }

    },
    mutations: {
        SET_PAGES(state, pages) {
            state.pages = pages
        }
    }
})
