<template>
  <div class="container">
    <div class="main">
      <div class="login"><h1>登 录</h1></div>
      <div class="login-1"><h5>Welcome Login</h5></div>
      <div class="input">
        <el-form :model="Form" ref="Form">
          <el-form-item
            prop="email"
            :rules="[{ required: true, message: '请输入邮箱地址', trigger: 'blur'},
                     { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
            <el-input v-model="Form.email" placeholder="请输入邮箱" name="userEmail"
                      id="userEmail"></el-input>
          </el-form-item>
          <el-form :model="Form2" status-icon :rules="rules2" ref="Form2">
            <el-form-item prop="pass">
              <el-input type="password" v-model="Form2.pass" autocomplete="off" placeholder="请输入密码" name="userPwd"
                        id="userPwd"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" style="width:250px" @click="UserButton">登 录</el-button>
          <router-link role="presentation" to="/registe">
            <el-button type="info" style="width:250px" id="btn">还没有账号</el-button>
          </router-link>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "login",
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.Form2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        Form: {
          email: ''
        },
        Form2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
        },
      };
    },
    methods: {
    UserButton() {
      let _this = this;
      $.post('http://localhost:3000/users/getOneUser',
        {
          userEmail: _this.Form.email,
          userPwd: _this.Form2.pass,
        }, function (res) {
            _this.$store.state.user=res.data[0].userID
            _this.$store.state.username=res.data[0].userName
            _this.$store.state.userPw=res.data[0].userPwd
            _this.$store.state.userEmail=res.data[0].userEmail
          if (res.data.length == 0 || res == null) {
            alert('用户不存在！请输入正确邮箱')
          } else if (res.data[0].length != 0) {
            let pwd = res.data[0].userPwd
            if (_this.Form2.pass == pwd) {

              //alert(`登录成功`)
              _this.$store.state.seletlogon=2
              //alert(JSON.stringify(res.data))
              _this.$store.commit('local', res.data[0])
            } else {
              alert('密码不正确！请重新输入密码')
            }
          }
          // sessionStorage.setItem('Email', _this.Form.email);

        });
          // location.reload()
         _this.$router.push({path: '/'})
    },
  }
  };
</script>

<style scoped>
  .container {
    width: 100%;
    height: 700px;
    background: url('../../assets/timg.jpg') no-repeat;
    background-position: -300px;
  }

  .main {
    width: 550px;
    height: 600px;
    margin: 70px auto;
  }

  .login {
    font-size:30px;
    text-align: center;
  }

  .login-1 {
    text-align: center;
    margin-top: 30px;
  }

  .input {
    width: 250px;
    height: 250px;
    margin: 0 auto;
    margin-top: 70px;
  }

  #btn {
    margin-top: 20px;
    margin-left: -1px;
  }

</style>
