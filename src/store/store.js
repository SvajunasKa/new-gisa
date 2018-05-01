import Vue from 'vue'
import Vuex from 'vuex'

import * as item from '../Api/data'

import * as getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: item.images,
    menu: item.menu,
    banner_title: item.banner_title,
    banner_text: item.banner_text
  },
  getters
})
