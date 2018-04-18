import Vue from 'vue'
import Router from 'vue-router'
import TEST from '@/components/test'
Vue.use(Router)
export default new Router({
// 后退后页面位置
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      name: 'TEST',
      component: TEST
    }
  ]
})
