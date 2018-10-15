<template>
  <div id="app">
    <app-shops></app-shops>
    <router-link to="/Car">去往购物车</router-link>
    <router-link to="/Car/pay">去确定下单页面</router-link>
    <router-view></router-view>
  </div>

</template>

<script>
  import Shops from './components/goods--zhang/shops/shops'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    'app-shops':Shops,


  }
}
</script>

<style lang="scss">

</style>
