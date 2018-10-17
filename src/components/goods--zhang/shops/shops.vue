<template>
  <div class="container-fluid">
    <app-header-title></app-header-title>
    <app-shoping></app-shoping>
    <app-shoplist></app-shoplist>
    <router-view></router-view>
  </div>


</template>

<script>
  import HeaderTitle from './shopindex/header-title'
  import Shoping from './shopindex/shoping'
  import Shoplist from './shopindex/shoplist'
  import Shopimgs from './shopindex/shop/shopimgs'
  export default {
    name: "shops",
    components:{
      'app-header-title':HeaderTitle,
      'app-shoping':Shoping,
      'app-shoplist':Shoplist,
      'app-shopimgs':Shopimgs
    }
  }

</script>

<style scoped>

</style>
