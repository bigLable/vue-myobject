<template>
<div class="container">
  <div class="main">
    <div class="login"><h1>登 录</h1></div>
    <div class="login-1"><h5>Welcome Login</h5></div>
    <div class="input">
      <el-input v-model="input" placeholder="请输入邮箱"></el-input><br><br>
      <el-input v-model="input2" placeholder="请输入密码" type="password"></el-input><br><br>
      <el-button type="primary" style="width:250px">登 录</el-button>
      <el-button type="info" style="width:250px" id="btn">还没有账号</el-button>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "login",
      data() {
        return {
          input: '',
          input2:''
        }
      }
    }
</script>

<style scoped>
  .container{
    width:100%;
    height:700px;
    background-image:url('../../assets/timg.jpg');
    background-position:-400px;
  }
  .main{
    width:550px;
    height:600px;
    margin:70px auto;
  }
  .login{
    text-align:center;
  }
  .login-1{
    text-align:center;
    margin-top:30px;
  }
  .input{
    width:250px;
    height:250px;
    margin:0 auto;
    margin-top:70px;
  }
  #btn{
    margin-top:20px;
    margin-left:-1px;
  }
</style>
