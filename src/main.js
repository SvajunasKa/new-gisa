import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './routes'
import store from './store/store'
import VModal from 'vue-js-modal'
import Vuelidate from 'vuelidate'
import vueScrollto from 'vue-scrollto'
import 'bootstrap/dist/css/bootstrap-grid.css'
import style from '../src/assets/style/main.scss'

Vue.use(vueScrollto);
Vue.use(VueResource);
Vue.use(Vuelidate);
Vue.use(VModal,{ dynamic: true,  });
new Vue({
    el: '#app',
    style,
    router,
    store,
    render: h => h(App)
});
