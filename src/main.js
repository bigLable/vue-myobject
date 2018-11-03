import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import store from './store'
import VideoPlayer from 'vue-video-player'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
//Vue.use(Viewer) 默认配置写法
import Distpicker from 'v-distpicker'
Vue.component('v-distpicker', Distpicker)

Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

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
//跳转后回到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
