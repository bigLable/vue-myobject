<template>
  <div id="app">
    <app-shops></app-shops>
  </div>

</template>

<script>
  import Shops from './components/goods--zhang/search/search'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
    'app-shops':Shops
  }
}
</script>

<style lang="scss">

</style>
