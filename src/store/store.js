import Vue from 'vue'
import Vuex from 'vuex'

import * as images from '../Api/images'
import * as getters from './getters'
import * as texts from '../Api/data.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /*images: item.images,
    menu: item.menu,
    banner_title: item.banner_title,
    banner_text: item.banner_text,
    button_text: item.button_text,
    //audio: item.audio,
    light: item.light,
    offer: item.offer,
    projects: item.projects,
    partners:item.partners,
    offer_title:item.offer_title,
    family_img: item.family_img,
    family_title: item.family_title,
    item:item,*/
    images: images,
    data: texts

  },
  getters,
})
