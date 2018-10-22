<template>
<div class="container">
  <div class="main">
    <div class="login"><h1>登 录</h1></div>
    <div class="login-1"><h5>Welcome Login</h5></div>
    <div class="input">
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" class="demo-dynamic">
        <el-form-item
          prop="email"
          :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur'},
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]">
          <el-input v-model="dynamicValidateForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入密码"></el-input>
          </el-form-item>
      <el-button type="primary" style="width:250px" @click="log">登 录</el-button>
      <router-link role="presentation" to="/registe"><el-button type="info" style="width:250px" id="btn">还没有账号</el-button></router-link>
      </el-form>
        <router-link to="/managelogin"><el-button plain size="mini" style="margin-top:10px;margin-left:158px">管理员登录</el-button></router-link>
      </el-form>
    </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "login",
      data() {
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm2.checkPass !== '') {
              this.$refs.ruleForm2.validateField('checkPass');
            }
            callback();
          }
        };
        return {
          dynamicValidateForm: {
            domains: [{
              value: ''
            }],
            email: ''
          },
          ruleForm2: {
            pass: '',
            checkPass: '',
            age: ''
          },
          rules2: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
          }
        };
        },
      methods:{

      },
      mounted(){
        let _this = this;
        axios.get('http://localhost:3000/users/getOneUser?userEmail='+`${_this.dynamicValidateForm.email}`).then(function(result){
          console.log('---');
          console.log(result.data)
          _this.ruleForm2.pass = result.data[0];
        },function(err){
          console.log(err)

        })
      }
    }
</script>

<style scoped>
  .container{
    width:100%;
    height:700px;
    background-image:url('../../assets/timg.jpg');
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
