// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  dateFns from 'date-fns'
import 'url-search-params-polyfill';
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import  Velocity from 'velocity-animate';
import $ from 'jquery'
import api from './api'
Vue.use(YDUI);
Vue.prototype.api=api;
Vue.prototype.$dateFns=dateFns;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
