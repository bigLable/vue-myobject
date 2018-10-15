<template>
  <div class="container-fluid">
    <title-repair></title-repair>
    <select-repair></select-repair>
    <raputor></raputor>
  </div>

</template>

<script>
  import Titlerepair from './assembly-r/title-repair'
  import Selectrepair from './assembly-r/select-repair'
  import Raputor from './assembly-r/raputor'
    export default {
        name: "repair",
      components:{
        'title-repair':Titlerepair,
        'select-repair':Selectrepair,
        'raputor':Raputor,
      }
    }
</script>

<style scoped>

</style>
