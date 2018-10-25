<template>
  <div>
    <div id="zpj">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link role="presentation" to="/works">推荐作品</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link role="presentation" to="/works/hotworks">热门作品</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link role="presentation" to="/works/newworks">最新作品</router-link>
      </el-menu-item>

    </el-menu>
    </div>
    <router-view></router-view>



  </div>
</template>

<script>

  export default {
    name: "workskinds",
    data() {
      return {

        activeIndex: '1',
        activeIndex2: '1',

      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  a {
    color: #fff;
    text-decoration: none;
    margin-left: 30px;
  }
  #zpj{
    padding-left: 40%;
  }
</style>
