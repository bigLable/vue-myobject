<template>
  <div class="container-fluid">
    <title-repair></title-repair>
    <router-view></router-view>


  </div>

</template>

<script>
  import Titlerepair from './assembly-r/title-repair'
  import Raputor from './assembly-r/raputor/raputor'
    export default {
        name: "repair",
      components:{
        'title-repair':Titlerepair,
        'raputor':Raputor,
      }
    }
</script>

<style scoped>

</style>
