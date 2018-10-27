<template>
  <div class="container">
    <div class="body">
      <form role="form" >
        <div class="form-group">
          <h2 >修改信息</h2>
          <label >用户名</label>
          <input type="email" v-model="formLabelAlign.name" class="form-control"  placeholder="新昵称">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">性别</label>
          <label><input v-model="userSex" name="sex" type="radio" value="1" />男 </label>
          <label><input v-model="userSex"  name="sex" type="radio" value="0" />女 </label>
        </div>
        <div class="form-group">
          <label for="exampleInputFile">手机号</label>
          <input v-model="formLabelAlign.phone" class="form-control">
        </div>
        <span style="font-weight: bold">是否需要修改密码:
        <button @click.prevent='sel(0)' class="form-control"  style="margin: auto 0" tag="li" active-class="active" role="presentation"  exact>否</button>
        <button  @click.prevent='sel(1)' class="form-control" style="margin: auto 0"  tag="li" active-class="active" role="presentation">是</button>
        </span>
        <div v-show="show==1">
          <div class="form-group">
            <label> 请输入密码 </label>

             <input type="password" v-model="formLabelAlign.userPwdone" class="form-control" >
            </div>
            <div class="form-group">
              <label>请再次确定密码</label>
              <input type="password" v-model="formLabelAlign.userPwd"  class="form-control">{{ reversedMessage}}
            <span id="tip">tip：两次输入密码不一致</span>
            </div>
        </div>
        <div class="form-group">
          <label for="exampleInputFile">点击修改头像</label>
          <input @change="File($event)" type="file" class="form-control">
        </div>
        <button type="submit" class="btn btn-default" @click=" updateinfo">Submit</button>
      </form>

    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "changeinfo",
    data() {
      return {
        userSex:'',
        lmodel:{},
        show: '0',
        labelPosition: 'right',
        pwd:'',
        formLabelAlign: {
          userPwdone: '',
          name: '',
          phone: '',
          userPwd: '',
        },
        radio: 1,
        //是否修改密码
        imageUrl: ''
      }
    },
    methods: {
      //图片上传
      File : function (event) {
        var file = event.target.files; // (利用console.log输出看结构就知道如何处理档案资料)
        // do something...
        this.lmodel=file
        // console.log('++++++++++++'+this.lmodel)
      },
      //是否需要修改密码
      sel(index) {
        if (index == 0) {
          this.show = 0
        } else {
          this.show = 1
        }
      },
      // handleAvatarSuccess(res, file) {
      //   this.imageUrl = URL.createObjectURL(file.raw);
      //   // this.imageURL=file
      //   // alert(JSON.stringify(file.raw))
      // },
      // beforeAvatarUpload(file) {
      //   const isJPG = file.type === 'image/jpeg';
      //   const isLt2M = file.size / 1024 / 1024 < 2;
      //
      //   if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 格式!');
      //   }
      //   if (!isLt2M) {
      //     this.$message.error('上传头像图片大小不能超过 2MB!');
      //   }
      //   return isJPG && isLt2M;
      // },
      updateinfo() {

        if(this.show==1){
          this.pwd=this.formLabelAlign.userPwd
        }else{
          this.pwd=this.$store.state.userPw
        }
        let _this = this;
        $.post('http://localhost:3000/users/updateUsers',
          {
            userID:_this.$store.state.user,
            userName:_this.formLabelAlign.name,
            userSex: _this.radio,
            userPhoneNum:_this.formLabelAlign.phone,
            userPwd: _this.pwd,
            userPic:_this.model

          }, function (res) {
            alert('开始修改信息！')
          })
        alert('已提交成功！')
      }
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
    background-color: #f4f4f4;
  }

  .title {
    display: block;
    font-size: 35px;
    color: grey;
    position: absolute;
    margin-left: 50px;
    margin-top: 80px;
  }

  .body {
    padding:30px;
    width: 800px;
    height: 600px;
    background-color: white;
    margin: 0 auto;
    margin-top: 80px;
  }

  .form {
    position: absolute;
    width: 300px;
    margin-left: 350px;
    margin-top: 60px;
  }

  .radio {
    position: relative;
    margin-left: 80px;
    margin-top: -15px;
  }

  .pic {
    width: 265px;
    float: left;
    margin-top: 60px;
    margin-left: 70px;
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

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
