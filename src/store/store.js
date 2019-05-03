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
    getters: {
        getAllData: state => state.data,
        wpData: state =>{
            axios.get('http://admin.gisa.lt/wp-json/wp/v2/pages')
                .then(response => {
                    this.$state.wp = response.data;
                });
            return console.log(state)
        }
    },

    mutations:{

    }
})
