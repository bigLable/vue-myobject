<template>
  <div class="container-fluid">
    <app-shoping></app-shoping>
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
