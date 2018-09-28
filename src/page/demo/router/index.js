import Vue from 'vue'
import Router from 'vue-router'
import welcome from '../views/welcome/Welcome'
import detailShow from '../views/detailshow/DetailShow'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'welc', component: welcome },
    { path: '/welcome', name: 'welcome', component: welcome },
    { path: '/welcome/detailShow', name: 'detailShow', component: detailShow }
  ]
})
