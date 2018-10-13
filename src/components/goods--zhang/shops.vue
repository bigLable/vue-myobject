<template>
  <div class="container">
    <app-header-title></app-header-title>
    <app-shoping></app-shoping>
    <app-shop-list></app-shop-list>
  </div>

</template>

<script>
  import Shoping from './shoping'
  import HeaderTitle from './header-title'
  import Shoplist from './shoplist'
    export default {
        name: "shops",
      components:{
          'app-shoping':Shoping,
        'app-header-title':HeaderTitle,
        'app-shop-list':Shoplist ,
      }
    }


</script>

<style scoped>

</style>
