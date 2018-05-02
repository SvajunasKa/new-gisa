import Vue from 'vue'
import VueRouter from 'vue-router'
import Pagrindinis from './components/Pagrindinis'
import Apvietimas from './components/Apsvietimas'
import Darbai from './components/Darbai'
import Garsas from './components/Garsas'
import Kontaktai from './components/Kontaktai'
import Partneriai from './components/Partneriai'
import Sprendimai from './components/Sprendimai'


Vue.use(VueRouter);

const routes = [
  {path: '/', component: Pagrindinis,  meta: { bodyClass: 'dashboard' }},
  {path: '/sprendimai', component: Sprendimai},
  {path:'/apsvietimo_technika', component: Apvietimas},
  {path: '/atlikti_darbai', component: Darbai},
  {path: '/igarsinimo_technika', component:Garsas},
  {path: '/kontaktai', component: Kontaktai},
  {path: '/musu_draugai', component: Partneriai}
];

export default new VueRouter({mode: 'history', routes})
