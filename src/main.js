// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
import './config/rem'

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
}).$mount('#app')
