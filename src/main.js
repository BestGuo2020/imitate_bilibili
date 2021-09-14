import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Meta from 'vue-meta'

import axios from "axios";
import VueLazyLoad from 'vue-lazyload'


Vue.config.productionTip = false
Vue.use(Meta, axios);
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

// 配置代理
axios.defaults.baseURL = "https://api.bilibili.com/x/web-interface/"

new Vue({
  router,
  store,
  metaInfo() {
    return {
      meta: [
        {
          name: 'referrer',
          content: 'no-referrer'
        }
      ]
    }
  },
  render: h => h(App)
}).$mount('#app')
