<template>
  <div class="container">

<span class="title">个人中心</span>
    <div class="body">
      <div class="pic"></div>
      <router-link role="presentation" to="/changeinfo"><el-button class="btn" >修改资料</el-button></router-link>
      <div class="main">
        <span>用户名：数码达人</span><br><br>
        <span>性别：男</span><br><br>
        <span>出生年月：1997年1月1日</span><br><br>
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
    }
</script>

<style scoped>
  .container{
    width:100%;
    height:700px;
    background-color: #f4f4f4;
  }
  .title{
    display:block;
    font-size:35px;
    color:grey;
    position:absolute;
    margin-left:50px;
    margin-top:80px;
  }
  .body{
    width:800px;
    height:600px;
    background-color:white;
    margin:0 auto;
    margin-top:80px;
  }
  .pic{
    width:200px;
    height:200px;
    background-image:url('../../assets/pic.jpg');
    position:absolute;
    margin-left:50px;
    margin-top:50px;
  }
  .btn{
    margin-left:100px;
    margin-top:280px;
  }
  .main{
    width:400px;
    height:400px;
    margin-left:320px;
    margin-top:-200px;
    font-size:18px;
    font-family:"PingFang SC",sans-serif;
  }
</style>
