import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './routes'
import store from './store/store'
import VModal from 'vue-js-modal'
import Vuelidate from 'vuelidate'
import vueScrollto from 'vue-scrollto'
import 'bootstrap/dist/css/bootstrap-grid.css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: '/src/assets/images/ajax-loader.gif',
    attempt: 3
});
Vue.use(vueScrollto);
Vue.use(VueResource);
Vue.use(Vuelidate);
Vue.use(VModal,{ dynamic: true, height:500});
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
