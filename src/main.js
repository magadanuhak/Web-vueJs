import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import routes from './routes'
import { store } from './store/store'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex, axios, VueRouter, BootstrapVue);
const router = new VueRouter({routes});
Vue.config.productionTip = false;

new Vue({
    router,
    store,
  render: h => h(App)

}).$mount('#app');
