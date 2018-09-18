import Vue from 'vue'
import Vuex from 'vuex'
import axios from'axios'

import * as images from '../Api/images'
import * as getters from './getters'
import * as texts from '../Api/data.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: images,
    data: texts
  },
    actions:{
    loadData(){
        axios.get('../Api/data.json')
            .then(res => console.log(res));

        console.log('sdsd')
    }

    },
  getters,
})
