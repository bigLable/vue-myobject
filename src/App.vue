<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>


  </div>

</template>

<script>
  import Header from './components/comment--Qi/Header'
  import Footer from './components/comment--Qi/Footer'


export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{

    'app-header':Header,
    'app-footer':Footer,




  }
}
</script>

<style lang="scss">

</style>
