<template>
  <div class="container">
    <div class="main">
      <div class="login"><h1>注 册</h1></div>
      <div class="login-1"><h5>Welcome to registration</h5></div>
      <br>
      <!-- <el-input v-model="user" placeholder="请输入用户名" type="text" class="input" maxlength="8" minlength="1"></el-input>
       <br><br>
       <el-form :model="Form2" status-icon  ref="Form2" class="input">
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
       <el-input placeholder="请输入手机号" type="text" class="input" v-model="num" id="num"  prop="phone"></el-input>
       <br><br>-->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请确认密码"></el-input>
        </el-form-item>
        <el-form-item prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:250px" @click="getdata('ruleForm')" class="submit">注 册</el-button>
        </el-form-item>
      </el-form>
      <router-link role="presentation" to="/login">
        <el-button type="info" style="width:250px" id="btn">已经有账号</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "registe",
    /*data() {
      return {
        user: '',
        email: '',
        num: '',
        Form2: {
          pass: '',
          checkPass: '',
        }
      }
    },
    methods: {
      getdata() {
        if (this.user == '' || this.Form2.pass == '' || this.email == '' || this.num == '') {
          alert('请输入完整信息！！！')
        } else if (this.user.length < 2 || this.user.length > 8) {
          alert('用户名为2-8个字符！')
        } else if (this.Form2.pass.length != 6) {
          alert('请设置6位账号密码')
        } else if (this.Form2.pass != this.Form2.checkPass) {
          alert('两次密码不一致，请重新输入！')
        } else if (this.num != '') {
          var num = document.getElementById('num').value;
          if (!(/^1[34578]\d{9}$/.test(num))) {
            alert("手机号码有误，请重填");
            return false;
          }
        }
          else {
            let _this = this;
            $.post('http://localhost:3000/users/addUsers',
              {
                userName: _this.user,
                userPwd: _this.Form2.pass,
                userEmail: _this.email,
                userPhoneNum: _this.num
              }, function (res) {
                if (res.data.userEmail == _this.email) {
                  alert('该邮箱已被注册！')
                } else {
                  alert('注册完成！！！')
                  _this.$router.push({path: '/login'})
                }
              })
          }
        }
      }*/
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          pass: '',
          checkPass: '',
          phone: '',
          email: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur'}
          ],
          pass: [
            {validator: validatePass, required: true, message: '请输入6位账号密码', trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, required: true, message: '两次密码输入不一致', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入手机号', trigger: 'blur'},
            {min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请输入邮箱', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      getdata(ruleForm) {
        let _this = this
        _this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            $.post('http://localhost:3000/users/addUsers',
              {
                userName: this.ruleForm.name,
                userPwd: this.ruleForm.pass,
                userPhoneNum: this.ruleForm.phone,
                userEmail: this.ruleForm.email,
              }, function (res) {
                alert('注册完成！！！')
                _this.$router.push({path: '/login'})
              })
          } else {
            return false;
          }
        })
      }
    }
  }

</script>

<style scoped>
  .container {
    width: 100%;
    height: 700px;
    background: url('../../assets/registe.jpg') no-repeat;
  }

  .main {
    width: 550px;
    height: 90px;
    margin: 10px auto;
  }

  .login {
    font-size: 30px;
    text-align: center;
  }

  .login-1 {
    text-align: center;
    margin-top: 30px;
  }

  #btn {
    margin-top: 20px;
    margin-left: 150px;
  }

  .demo-ruleForm {
    width: 250px;
    margin: 0 auto;
  }
</style>
