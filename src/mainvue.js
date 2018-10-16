import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(ElementUI)
import routerinstall from './routerinstall'
const routerin =new VueRouter({
  routerinstall,
  model:history
})
new Vue({
  el: '#app',
  routerin ,
  render: h => h(App)
})
