import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'

/**
 * 这个第三方包引入即可，它会自动根据页面宽度设置网页基准字体大小
 */
import 'amfe-flexible'
// 现在全部引入，方便使用
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(VeeValidate, {
  events: '' // 禁用默认事件验证
  // events: 'change'
})
Validator.localize('zh_CN', zhCN)

Vue.use(Vant)
// import {
//   Button
// } from 'vant'

// Vue.use(Button)

Vue.prototype.$sleep = time => {
  return new Promise((resolve, reject) => {
    window.setTimeout(resolve, time)
  })
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
