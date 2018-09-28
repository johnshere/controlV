// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由管理
import router from './router/index'
// 引入状态管理
import store from './store/index'
// 引入axios，ajax工具
import HttpUtil from './httpUtil'
// 引入常量配置
import constants from '@/api/constants'
// index.html浏览器版本提示蒙版，针对PC端
import '@/assets/css/index.cover.css'
// 引入过渡动画样式
import '../../assets/css/vue2-animate.min.css'
// 引入i18n国际化插件
import i18n from './i18n'

// import { formateData } from '../../util/mUtils'

// Vue.filter('formateData', formateData)

// Vue.config.productionTip = false

// 挂在$http对象到全局vue
Vue.prototype.$http = new HttpUtil()
// 挂在常量对象
Vue.prototype.$consts = constants

// Vue.use(iView)

/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
var vm = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
