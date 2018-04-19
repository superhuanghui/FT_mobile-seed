import Vue from 'vue'
import Router from 'vue-router'
import TEST from '@/components/test'
import Landlord from '@/views/landlord'
import Login from '@/views/Login'
Vue.use(Router)
export default new Router({
// 后退后页面位置
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      name: '',
      component: Login
    }, {
      path: '/landlord',
      name: 'landlord',
      component: Landlord
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/test',
      name: 'test',
      component: TEST
    }
  ]
})
