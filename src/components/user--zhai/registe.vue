<template>
  <div class="container">
    <div class="main">
      <div class="login"><h1>注 册</h1></div>
      <div class="login-1"><h5>Welcome to registration</h5></div>
      <el-input v-model="user" placeholder="请输入用户名" type="text" class="input" maxlength="8" minlength="1"></el-input>
      <br><br>
      <el-form :model="Form2" status-icon :rules="rules2" ref="Form2" class="input">
        <el-form-item prop="pass">
          <el-input type="password" v-model="Form2.pass" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="Form2.checkPass" autocomplete="off" placeholder="请确认密码"></el-input>
        </el-form-item>
      </el-form>
      <br><br><br><br>
      <el-input id="email" v-model="email" placeholder="请输入邮箱" type="email" class="input"></el-input>
      <br><br>
      <el-input placeholder="请输入手机号" type="text" class="input" v-model="num" id="num"></el-input>
      <br><br>
      <el-button type="primary" style="width:250px" @click="getdata" class="input">注 册</el-button>
      <router-link role="presentation" to="/login">
        <el-button type="info" style="width:250px" id="btn">已经有账号</el-button>
      </router-link>
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
          if (this.Form2.checkPass !== '') {
            this.$refs.Form2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.Form2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        user: '',
        email: '',
        num: '',
        Form2: {
          pass: '',
          checkPass: '',
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ]
        },
      };
    },
    methods: {
      getdata() {
        if (this.user == '' || this.Form2.pass == '' || this.email == '' || this.num == '') {
          alert('请输入完整信息！！！')
        } else {
          let _this = this;
          $.post('http://localhost:3000/users/addUsers',
            {
              userName: _this.user,
              userPwd: _this.Form2.pass,
              userEmail: _this.email,
              userPhoneNum: _this.num
            }, function (res) {
            if(res.data.userEmail==_this.email){
              alert('该邮箱已被注册！')
            }else{
              alert('注册完成！！！')
              _this.$router.push({path: '/login'})}
            })
        }
      },
    },
  }

</script>

<style scoped>
  .container {
    width: 100%;
    height: 700px;
    background: url('../../assets/registe.jpg') no-repeat;
    background-position: -300px;
  }

  .main {
    width: 550px;
    height: 90px;
    margin: 10px auto;
  }

  .login {
    text-align: center;
  }

  .login-1 {
    text-align: center;
    margin-top: 30px;
  }

  .input {
    width: 250px;
    height: 40px;
    margin-left: 150px;
  }

  #btn {
    margin-top: 20px;
    margin-left: 150px;
  }
</style>
