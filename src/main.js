import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import './app.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
