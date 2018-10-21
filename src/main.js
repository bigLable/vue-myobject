import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import store from './store'


Vue.use(store)
Vue.use(VueRouter)
Vue.use(ElementUI)
import {routes} from './routes'
const router =new VueRouter({
  routes:routes,
  mode:'history'
})
new Vue({
  el: '#app',
   store,
  router,
  render: h => h(App)
})
