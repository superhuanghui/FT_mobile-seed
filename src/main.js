import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import 'lib-flexible'
import router from './router'

FastClick.attach(document.body)

Vue.config.productionTip = false

// 是否需要登录
let needLogin = false

const vm = new Vue({
  el: '#app-box',
  router,
  template: '<App/>',
  components: { App }
})

Vue.use(vm)

const urlSearchParams = {}
if (location.search.indexOf('?') !== -1) {
  const searchArr = location.search.substr(1).split('&')
  for (let i = 0; i < searchArr.length; i++) {
    if (searchArr[i].split('=')[1]) {
      urlSearchParams[searchArr[i].split('=')[0]] = unescape(searchArr[i].split('=')[1])
    }
  }
}

if (!urlSearchParams.sessionId && needLogin) {
  const fromUrlPath = window.location.origin
  window.location.href = 'http://www.mdguanjia.com/activities/login/login.html?resource=h5&fromUrlPath=' + fromUrlPath
}
