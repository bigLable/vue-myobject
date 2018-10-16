<template>
  <div  >
    <div class="line "></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo "
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="1a1a1a" >
      <el-menu-item index="1" >
       <img src="../../assets/u19.png" alt="">
      </el-menu-item>
      <el-menu-item index="2">
       <span>2018-2028咔嚓中国有限公司版权所有</span>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link role="presentation" to=""><a>责任声明</a></router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link role="presentation" to=""><a>联系我们</a></router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link role="presentation" to=""><a>网站所有者信息</a></router-link>
      </el-menu-item>
      <el-menu-item index="6">
        <router-link role="presentation" to=""><img class="tu" src="../../assets/qq.png" alt=""></router-link>
      </el-menu-item>
      <el-menu-item index="7">
        <router-link role="presentation" to=""><img  class="tu" src="../../assets/weixin.png" alt=""></router-link>
      </el-menu-item>

    </el-menu>


  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  img {
    width: 70px;
    height: 40px;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-left: 30px;
  }

  .move {
    font-size: 12px;
    position: absolute;
    right: 20px;
    top: -10px;
  }
  .sou{
    font-size: 30px;
  }
  .el-menu-demo{
    clear: both;
    height: 100px;
  }
  .tu{
    width: 20px;
    height: 20px;
  }
</style>
