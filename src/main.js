import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './apis/firebase'

firebase.initializeApp(firebaseConfig)

window.axios = axios
window.axios.defaults.baseURL = 'https://rickandmortyapi.com/api/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
