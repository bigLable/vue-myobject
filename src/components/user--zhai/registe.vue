<template>
  <div class="container">
    <div class="main">
      <div class="login"><h1>注 册</h1></div>
      <div class="login-1"><h5>Welcome to registration</h5></div>
      <el-input v-model="user" placeholder="请输入用户名" type="text" class="input"></el-input><br><br>
      <el-input v-model="pwd" placeholder="请输入密码" type="text" class="input"></el-input><br><br>
      <el-input v-model="email" placeholder="请输入邮箱" type="text" class="input"></el-input><br><br>
      <el-button type="primary" style="width:250px" @click="getdata" class="input">注 册</el-button><br><br>
      <router-link role="presentation" to="/login"><el-button type="info" style="width:250px" id="btn">已经有账号</el-button></router-link>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "registe",
    data() {
      return {
        user:'',
        pwd:'',
        email:'',
      };
    },
    methods:{
     getdata(){
       let _this=this;
       $.post('http://localhost:3000/users/addUsers',
         {
           userName:_this.user,
           userPwd:_this.pwd,
           userEmail:_this.email
         },function(res){
           alert('开始注册ok！')
         })
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
    height:40px;
    margin-left:150px;
  }
  #btn{
    margin-top:20px;
    margin-left:150px;
  }
</style>
