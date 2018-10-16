<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>

</template>

<script>
  import Header from './components/comment--Qi/Header'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{

    'app-header':Header


  }
}
</script>

<style lang="scss">

</style>
