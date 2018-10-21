<template>
  <div class="container-fluid">
    <app-shoping></app-shoping>
    <app-shoplist></app-shoplist>
    <router-view></router-view>
  </div>


</template>

<script>
  import Shoping from './shopindex/shoping'
  import Shoplist from './shopindex/shoplist'
  export default {
    name: "shops",
    components:{
      'app-shoping':Shoping,
      'app-shoplist':Shoplist,
    }
  }

</script>

<style scoped>

</style>
