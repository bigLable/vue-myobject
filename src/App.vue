<template>
  <div id="app">
    <app-shops></app-shops>

  </div>

</template>

<script>
  import Shops from './components/goods--zhang/shops/shops'
  import tscardata from './components/transaction--shen/tsCardata'

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
