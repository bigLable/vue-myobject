<template>
    <div>
      <app-header-title></app-header-title>
      <app-shoping></app-shoping>
      <app-shoplist></app-shoplist>
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
