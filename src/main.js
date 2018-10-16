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

// import Vue from 'vue'
// import App from './App.vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// //1.导入并使用路由模块
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
// Vue.use(ElementUI)
// //2.导入配置路由的文件
// import {routes} from './routes.js'
// //3.实例路由对象
// const router = new VueRouter({
//   routes:routes,
//   mode:'history' //默认时hash模式（#）
// })
// //4.注入（加载）路由
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })

