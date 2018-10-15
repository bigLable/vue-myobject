<template>
  <div id="app">
    <app-shops></app-shops>
    <app-login></app-login>
  </div>

</template>

<script>
  import Shops from './components/goods--zhang/shops/shops'
  import tscardata from './components/transaction--shen/tsCardata'
  import login from './components/user--zhai/login.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    'app-shops':Shops,
    'app-login':login
  }
}
</script>

<style lang="scss">

</style>
