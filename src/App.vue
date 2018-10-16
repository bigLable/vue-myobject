<template>
  <div id="app">
    <router-link to="/Car">去往购物车</router-link>
    <router-link to="/repair">wx</router-link>
    <router-view></router-view>
  </div>

</template>

<script>
  import Shops from './components/goods--zhang/shops/shops'
export default {
  name: 'app',
  components:{
    'app-shops':Shops,


  }
}
</script>

<style lang="scss">

</style>
