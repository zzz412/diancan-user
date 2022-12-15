import App from './App'

// 封装弹框的方法
uni.$Toast = function(title = '数据请求失败！', duration = 1500) {
	uni.showToast({
		title,
		duration,
		icon: 'none'
	})
}

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import './style/animat.css'


export function createApp() {
  const app = createSSRApp(App)
	const pinia = Pinia.createPinia()
  return {
    app,
		pinia
  }
}
// #endif