<template>
  <div class="container" >
    <div class="body">
      <h2 style="text-align: center;">修改信息</h2><br>
      <div class="form-group" style="width:250px;margin:0 auto">
        <div>
          <div class="app">
            <div class="admin-content">
              <div class="edit">
                <div class="avatar">
                  <div class="img"></div>
                  <input type="file" name="avatar"
                         @change="changeImage($event)"
                         accept="image/gif,image/jpeg,image/jpg,image/png"
                         ref="avatarInput"
                         multiple><br/>
                  <!--自定义的表单数据：<input type="text" v-model="mydata">-->
                </div>
                <!--<button type="button" @click="edit">上传文件</button>-->
              </div>
            </div>
          </div>
        </div>
      </div><br>
      <form class="form">
        <div class="form-group">
          <label style="margin-left:25px">新的用户名</label>
          <input type="text" v-model="formLabelAlign.name" class="form-control"  style="margin:0 auto;width:250px;background-color: transparent;border: 2px solid rgba(255,255,255,0.3);color: white">
        </div>
        <div class="form-group" style="margin-left:25px;">
          <label for="man">男</label>
          <input type="radio" id="man" value=1 v-model="sex">
          <label for="woman">女</label>
          <input type="radio" id="woman" value=0 v-model="sex">

        </div>
        <div class="form-group">
          <label style="margin-left:25px">手机号</label>
          <input v-model="formLabelAlign.phone" class="form-control" style="margin:0 auto;width:250px;background-color: transparent;color:white">
        </div>
        <span style="font-weight: bold;margin-left:25px">是否需要修改密码:
        <button @click.prevent='sel(0)' class="form-control"  style="margin: auto auto;width:250px;background-color: transparent;color:black" tag="li" active-class="active" role="presentation"  exact>否</button>
        <button  @click.prevent='sel(1)' class="form-control" style="margin: 0px auto;width:250px;background-color: transparent;color:black"  tag="li" active-class="active" role="presentation">是</button>
        </span>
        <div v-show="show==1">
          <div class="form-group" style="width:250px;margin:0 auto">
            <label> 请输入密码 </label>
            <input type="password" v-model="formLabelAlign.userPwdone" class="form-control" style="background-color: transparent;">
          </div>
          <div class="form-group" style="width:250px;margin:0 auto">
            <label>请再次确定密码</label>
            <input type="password" v-model="formLabelAlign.userPwd"  class="form-control" style="background-color: transparent;">{{ reversedMessage}}
            <span id="tip">提示：两次输入密码不一致</span>
          </div>
        </div>
        <br><br>
        <div class="form-group">
          <el-button type="primary" round style="width:150px;height:40px;margin-left:70px" class="form-control btn btn-default" @click="edit">提交修改</el-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import axios from 'axios'
  export default {
    name: "changeinfo",
    data() {
      return {
        upath:'',
        sex:0,
        userId:'',
        show: '0',
        labelPosition: 'right',
        pwd:'',
        formLabelAlign: {
          userPwdone: '',
          name: '',
          phone: '',
          userPwd: '',
        },
        radio:1,
        //是否修改密码

      }
    },
    created(){
      this.userId=this.$store.state.user
    },
    methods: {
      getuser() {
        let _this = this
        $.post("http://localhost:3000/users/getOneUser",
          {
            userEmail: _this.$store.state.userEmail
          },
          function (res) {
            // alert(JSON.stringify(res.data[0]))
            _this.user = res.data[0]
            // alert(JSON.stringify(res.data[0]))
          });

      },
      edit() {
        alert('性别'+this.radio)
      let _this=this
        console.log(this.upath);
        var zipFormData = new FormData();
        //依次添加多个文件
        for(var i = 0 ; i< this.upath.length ; i++){
          zipFormData.append('filename', this.upath[i]);
        }
        //添加其他的表单元素
        zipFormData.append('userId',this.userId)
        zipFormData.append('userName',this.formLabelAlign.name)
        zipFormData.append('userSex',this.sex)
        zipFormData.append('userPhoneNum',this.formLabelAlign.phone,)
        zipFormData.append('userPwd',this.formLabelAlign.userPwd)
        let config = { headers: { 'Content-Type': 'multipart/form-data' } };
        axios.post('http://localhost:3000/users/updateUsers', zipFormData,config)
          .then(function (response) {
            alert('修改成功！')
            _this.getuser()
            _this.$router.push({path: '/user'})
          });
      },
      //选中文件后，将文件保存到实例的变量中
      changeImage(e) {
        this.upath = e.target.files;
      },

      //是否需要修改密码
      sel(index) {
        if (index == 0) {
          this.show = 0
        } else {
          this.show = 1
        }
      },


    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        if(this.formLabelAlign.userPwd!=this.formLabelAlign.userPwdone){
          $('#tip').show()
        }else{
          $("#tip").hide()
        }
        // return this.message.split('').reverse().join('')
      }
    }
  }

</script>

<style scoped>
  .container {
    width: 100%;
    height: 700px;
    color:black;
    font-family: 微软雅黑;
    background-color: #ffffff;
    background:url('../../assets/1111.jpg') no-repeat;
    background-position-y:-200px;
    background-position-x:-150px;
  }
  .body {
    padding:30px;
    width: 800px;
    height: 600px;
    margin: 0 auto;
    margin-top: -10px;
  }

  .form {

    width: 300px;
    margin:0 auto;
  }

  .avatar-uploader .el-upload {
    float: left;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

</style>
