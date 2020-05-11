import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import './app.css';

library.add(faUserSecret)
dom.watch()

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
