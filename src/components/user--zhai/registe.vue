<template>
  <div class="container">
    <div class="main">
      <div class="login"><h1>注 册</h1></div>
      <div class="login-1"><h5>Welcome to registration</h5></div>
      <div class="input">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item
            prop="name"
            :rules="[
             { required: true, message: '用户名不能为空', trigger: 'blur' }]">
            <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
            <el-form-item prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item  prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" placeholder="再次输入密码"></el-input>
            </el-form-item>
          </el-form>
          <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" class="demo-dynamic">
            <el-form-item
              prop="email"
              :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                      ]">
              <el-input v-model="dynamicValidateForm.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-button type="primary" style="width:250px">注 册</el-button>
            <router-link role="presentation" to="/login"><el-button type="info" style="width:250px" id="btn">已经有账号</el-button></router-link>
          </el-form>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "registe",
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        input: '',
        input2:'',
        input3:'',
        input4:'',
        input5:'',
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
      },
        ruleForm: {
          name: '',
        },
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        }
      };
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
