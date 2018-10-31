<template>
  <div id="app">
    <app-header></app-header>
    <router-view v-if="isRouterAlive">></router-view>
    <app-footer></app-footer>

  </div>

</template>

<script>
  import Header from './components/comment--Qi/Header'
  import Footer from './components/comment--Qi/Footer'


export default {
  name: 'app',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  components: {

    'app-header': Header,
    'app-footer': Footer,
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })

    }
  }
}
</script>

<style lang="scss">

</style>
