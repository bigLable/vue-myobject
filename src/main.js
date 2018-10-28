import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import store from './store'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
require('../static/css/aboutcss.css');
require('../static/css/aboutstyle.css');
require('../static/css/base.css');
require('../static/css/menu.css');
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
