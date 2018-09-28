import Vue from 'vue'
import Router from 'vue-router'
import welcome from '../views/welcome/Welcome'
import detailShow from '../views/detailshow/DetailShow'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'welcome', component: welcome },
    { path: '/detailShow', name: 'detailShow', component: detailShow }
  ]
})
