import Vue from 'vue'
import VueRouter from 'vue-router'
import Pagrindinis from './components/Pagrindinis'
import Apvietimas from './components/Apsvietimas'
import Darbai from './components/Darbai'
import Garsas from './components/Garsas'
import Partneriai from './components/Partneriai'
import Sprendimai from './components/Sprendimai'


Vue.use(VueRouter);

const routes = [
    { path: '/', component: Pagrindinis },
    { path: '/sprendimai', component: Sprendimai },
    { path: '/apsvietimo_technika', component: Apvietimas },
    { path: '/atlikti_darbai', component: Darbai },
    { path: '/igarsinimo_technika', component: Garsas, props: true },
    { path: '/musu_draugai', component: Partneriai },
    { path: '*', component: Pagrindinis },
];

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
    }
})