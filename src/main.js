import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './routes'
import store from './store/store'
import VModal from 'vue-js-modal'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap-grid.css'

Vue.use(VueResource);
Vue.use(Vuelidate);
Vue.use(VModal);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
