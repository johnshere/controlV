// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import HttpUtil from './httpUtil'

import '../../assets/css/vue2-animate.min.css'
// import { formateData } from '../../util/mUtils'

// Vue.filter('formateData', formateData)
Vue.prototype.$http = new HttpUtil()
Vue.config.productionTip = false

// Vue.use(iView)

/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
