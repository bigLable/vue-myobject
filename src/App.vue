<template>
  <div id="app">

  </div>

</template>

<script>
  import Shops from './components/goods--zhang/shops/shops'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    'app-shops':Shops
  }
}
</script>

<style lang="scss">

</style>
