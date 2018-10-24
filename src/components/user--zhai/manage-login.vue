<template>
  <div class="container">
    <div class="main">
      <span>后台管理员登录</span>
      <div class="input">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item
            prop="name"
            :rules="[
             { required: true, message: '管理员ID不能为空', trigger: 'blur' }]">
            <el-input v-model="ruleForm.name" placeholder="请输入管理员ID"></el-input>
          </el-form-item>
        </el-form>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-form>
        <router-link to="/manage">
          <el-button type="primary" round style="margin-left:85px">登 录</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "manage-login",
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
        ruleForm2: {
          pass: '',
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ]
        },
        ruleForm: {
          name: '',
        },
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 700px;
    background-image: url('../../assets/managebg.jpg');
  }

  .main {
    width: 550px;
    height: 500px;
    margin: 170px auto;
  }

  span {
    display: block;
    text-align: center;
    font-size: 28px;
    margin-top: 40px;
  }

  .input {
    width: 250px;
    height: 250px;
    margin: 0 auto;
    margin-top: 80px;
  }
</style>
