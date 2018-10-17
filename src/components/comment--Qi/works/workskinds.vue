<template>
    <div>
      <router-link role="presentation" to="/works">推荐作品</router-link>
      <router-link role="presentation" to="/works/hotworks">热门作品</router-link>
      <router-link role="presentation" to="/works/newworks">最新作品</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "workskinds"
    }
</script>

<style scoped>

</style>
