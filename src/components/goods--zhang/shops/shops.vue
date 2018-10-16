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
  export default {
    name: "shops",
    components:{
      'app-header-title':HeaderTitle,
      'app-shoping':Shoping,
      'app-shoplist':Shoplist,
    }
  }

</script>

<style scoped>

</style>
