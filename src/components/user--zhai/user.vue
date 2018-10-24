<template>
  <div class="container">

    <span class="title">个人中心</span>
    <div class="menu">
      <el-col :span="24">
        <el-menu
          default-active="2"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="1">
            <span slot="title" to="/user">我的资料</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <span>我的订单</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">已付款</el-menu-item>
              <el-menu-item index="1-2">待付款</el-menu-item>
              <el-menu-item index="1-3">已发货</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
    <div class="body">
      <div class="pic"></div>
      <router-link role="presentation" to="/changeinfo">
        <el-button class="btn">修改资料</el-button>
      </router-link>
      <div class="main">
        <span>用户名：数码达人</span><br><br>
        <span>性别：男</span><br><br>
        <span>职业：摄影</span><br><br>
        <span>手机号码：18888888888</span><br><br>
        <span>邮箱：mike@163.com</span><br><br>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0
  }

  .container {
    width: 100%;
    height: 700px;
    background-color: #f4f4f4;
  }

  .title {
    display: block;
    font-size: 35px;
    color: grey;
    position: absolute;
    margin-left: 50px;
    margin-top: 80px;
  }

  .menu {
    width: 250px;
    height: 500px;
    position: absolute;
    float: left;
    margin-left: 15px;
    margin-top: 150px;
  }

  .body {
    width: 800px;
    height: 600px;
    background-color: white;
    margin: 0 auto;
    margin-top: 80px;
  }

  .pic {
    width: 200px;
    height: 200px;
    background-image: url('../../assets/pic.jpg');
    position: absolute;
    margin-left: 50px;
    margin-top: 50px;
  }

  .btn {
    margin-left: 100px;
    margin-top: 280px;
  }

  .main {
    width: 400px;
    height: 400px;
    margin-left: 320px;
    margin-top: -200px;
    font-size: 18px;
    font-family: "PingFang SC", sans-serif;
  }
</style>
