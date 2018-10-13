<template>
    <div class="container">
      <app-header-title></app-header-title>
      <app-shoping></app-shoping>
      <app-shoplist></app-shoplist>
    </div>
</template>

<script>
  import HeaderTitle from './header-title'
  import Shoping from './shoping'
  import Shoplist from './shoplist'
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
