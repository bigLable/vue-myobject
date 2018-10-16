<template>
  <div class="container">
    <div class="main">
      <div class="login"><h1>注 册</h1></div>
      <div class="login-1"><h5>Welcome to registration</h5></div>
      <div class="input">
        <el-input v-model="input" placeholder="请输入用户名" maxlength="8" minlength="2"></el-input><br><br>
        <el-input v-model="input2" placeholder="请输入密码" type="password"></el-input><br><br>
        <el-input v-model="input3" placeholder="再次输入密码" type="password"></el-input><br><br>
        <el-input v-model="input4" placeholder="请输入手机号码"></el-input><br><br>
        <el-input v-model="input5" placeholder="请输入邮箱地址"></el-input><br><br>
        <el-button type="primary" style="width:250px">注 册</el-button>
        <router-link role="presentation" to="/login"><el-button type="info" style="width:250px" id="btn">已经有账号</el-button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "registe",
    data() {
      return {
        input: '',
        input2:'',
        input3:'',
        input4:'',
        input5:''
      }
    }
  }
</script>

<style scoped>
  .container{
    width:100%;
    height:700px;
    background-image:url('../../assets/registe.jpg');
    background-position:-300px;
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
