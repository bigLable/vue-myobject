import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(ElementUI)
import {routes} from './routes'
const router =new VueRouter({
  routes:routes,
  model:history
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
