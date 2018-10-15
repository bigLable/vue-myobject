<template>
  <div class="container">
    <app-shop-imgs></app-shop-imgs>
    <app-shop-info></app-shop-info>
    <app-shop-comment></app-shop-comment>
  </div>

</template>

<script>
  import Shopimgs from './shop/shopimgs'
  import Shopinfo from './shop/shopinfo'
  import Shopcomment from './shop/shopcomment'
    export default {
        name: "applist",
      components:{
        'app-shop-imgs':Shopimgs,
        'app-shop-info':Shopinfo,
        'app-shop-comment':Shopcomment ,
      }
    }
</script>

<style scoped>

</style>
