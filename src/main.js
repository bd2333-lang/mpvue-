import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)
App.mpType = 'app'
// Vue异常捕获
// Vue.config.errorHandler = errorHandler
// console.log(mpvue, mpvuePlatform)
// if (mpvuePlatform === 'my') {
// } else {
//   // App全局异常捕获
//   mpvue.onError((err) => onError(err, app))
// }
const app = new Vue(App)
app.$mount()
