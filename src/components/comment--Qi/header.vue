<template>
  <div >
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="1a1a1a">
      <el-menu-item index="1">
        <router-link role="presentation" to="/"><img src="../../assets/u19.png" alt=""></router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <router-link role="presentation" to="/shops"><a>商品分类</a></router-link>
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <router-link role="presentation" to="/about"><a>关于我们</a></router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link role="presentation" to="/repair"><a>售后服务</a></router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link role="presentation" to="/works"><a>摄影展示</a></router-link>
      </el-menu-item>
      <el-menu-item index="10" class="sou">
        <el-input
          placeholder="请输入内容"
          v-model="input23">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-menu-item>
      <el-menu-item index="6">
        <router-link role="presentation" to="/login"><a class="move">登录</a></router-link>
      </el-menu-item>
      <el-menu-item index="7">
        <router-link role="presentation" to="/registe"><a class="move">注册</a></router-link>
      </el-menu-item>
      <el-menu-item index="8">
        <router-link role="presentation" to="/Car"><a class="move">购物车</a></router-link>
      </el-menu-item>

      <el-menu-item index="9">
        <router-link role="presentation" to="/user"><a class="move">个人中心</a></router-link>
      </el-menu-item>

    </el-menu>

  </div>
</template>

<script>
  export default {
    name: "Header",
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
    height: 60px;
  }
</style>
