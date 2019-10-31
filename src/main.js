import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App.vue'
import router from './router'
import store from './store'
import pdf from 'vue-pdf-cdn'

import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css' //Vuesax styles
import Firebase from 'firebase'

Vue.use(pdf);
Vue.use(Vuesax);
Vue.use(Firebase);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')