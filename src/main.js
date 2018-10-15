import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routers from './routes'
const router =new VueRouter({
  routers:routers,
  model:history
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
