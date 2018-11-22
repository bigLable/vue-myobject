<template>
  <div class="container-fluid">


  <div class="container">
  <title-indexes></title-indexes>
    <type-search></type-search>
  <sort-search></sort-search>

  </div>

  </div>
</template>

<script>
  import Indexes from './assembly-s/indexes'
  import Sortsearch from './assembly-s/sort-search'
  import Typesearch from './assembly-s/type-search'
  export default {
    name: "repair",
    components:{
      'title-indexes':Indexes,
      'sort-search':Sortsearch,
      'type-search':Typesearch,
    }
  }
</script>

<style scoped>

</style>
