import App from './App'
import { gReq } from './utils/greq.js'
import gql from 'graphql-tag'
  
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
export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.gReq = gReq
  app.config.globalProperties.gql = gql
  
  return {
    app
  }
}
// #endif