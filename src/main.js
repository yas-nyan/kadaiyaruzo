// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import feather from 'vue-icon'

import App from './App'
import Config from "./config/config"
import routes from './routes'
import About from './about'
import Top from './top'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(feather, "v-icon")
Vue.config.productionTip = false

/* 定数を無理やりぶち込む */
Vue.prototype.$config = Config;
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: routes
})
console.log(router);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
