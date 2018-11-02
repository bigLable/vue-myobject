<template>
  <div class="container" >
    <div class="body">

          <h2 style="text-align: center;color:white">修改信息</h2>
          <div class="form-group" style="width:250px;margin:0 auto">
            <div>
              <h1>上传文件</h1>
              <div class="app">
                <div class="admin-content">
                  <div class="edit">
                    <div class="avatar">
                      <div class="img">
                        <img src=''>
                        <span>更改</span>
                      </div>
                      <input type="file" name="avatar"
                             @change="changeImage($event)"
                             accept="image/gif,image/jpeg,image/jpg,image/png"
                             ref="avatarInput"
                             multiple
                      ><br/>
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
          <label style="color:white;margin-left:25px">新的用户名</label>
          <input type="text" v-model="formLabelAlign.name" class="form-control"  style="margin:0 auto;width:250px;background-color: transparent;border: 2px solid rgba(255,255,255,0.3);color: white">
        </div>
        <!--<div class="form-group">-->
          <!--<label >性别</label>-->
          <!--<label><input v-model="userSex" name="sex" type="radio" value="1" />男 </label>-->
          <!--<label><input v-model="userSex"  name="sex" type="radio" value="0" />女 </label>-->
        <!--</div>-->
        <div class="form-group">
          <label style="color:white;margin-left:25px">手机号</label>
          <input v-model="formLabelAlign.phone" class="form-control" style="margin:0 auto;width:250px;background-color: transparent;border: 2px solid rgba(255,255,255,0.3);">
        </div>
        <span style="font-weight: bold;color:white;margin-left:25px">是否需要修改密码:
        <button @click.prevent='sel(0)' class="form-control"  style="margin: auto auto;width:250px;background:rgba(0,0,0,0.2);color:white;border: 2px solid rgba(255,255,255,0.3);" tag="li" active-class="active" role="presentation"  exact>否</button>
        <button  @click.prevent='sel(1)' class="form-control" style="margin: 0px auto;width:250px;background-color: transparent;color:white;border: 2px solid rgba(255,255,255,0.3);"  tag="li" active-class="active" role="presentation">是</button>
        </span>
        <div v-show="show==1">
          <div class="form-group" style="width:250px;margin:0 auto">
            <label style="color:white"> 请输入密码 </label>

             <input type="password" v-model="formLabelAlign.userPwdone" class="form-control" style="background-color: transparent;border: 2px solid rgba(255,255,255,0.3);">
            </div>
            <div class="form-group" style="width:250px;margin:0 auto">
              <label style="color:white">请再次确定密码</label>
              <input type="password" v-model="formLabelAlign.userPwd"  class="form-control" style="background-color: transparent;border: 2px solid rgba(255,255,255,0.3);">{{ reversedMessage}}
            <span id="tip" style="color:white">tip：两次输入密码不一致</span>
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
        userSex:'',
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
        radio: 1,
        //是否修改密码

      }
    },
    created(){
      this.userId=this.$store.state.user
    },
    methods: {

      edit() {

        console.log(this.upath);
        var zipFormData = new FormData();
        //依次添加多个文件
        for(var i = 0 ; i< this.upath.length ; i++){
          zipFormData.append('filename', this.upath[i]);
        }
        //添加其他的表单元素
        alert(this.$store.state.user)
        alert(this.userId)
        zipFormData.append('userId',this.userId)
        zipFormData.append('userName',this.formLabelAlign.name)
        zipFormData.append('userSex',this.radio)
        zipFormData.append('userPhoneNum',this.formLabelAlign.phone,)
        zipFormData.append('userPwd',this.formLabelAlign.userPwd)
        let config = { headers: { 'Content-Type': 'multipart/form-data' } };
        axios.post('http://localhost:3000/users/updateUsers', zipFormData,config)
          .then(function (response) {
            console.log(response);
            console.log(response.data);
            console.log(response.bodyText);
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
    background-color: #ffffff;
    background:url('../../assets/1111.jpg') no-repeat;
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
    margin: 0 auto;
    margin-top: 10px;
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

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  /*.avatar {*/
    /*width: 178px;*/
    /*height: 178px;*/
    /*display: block;*/
  /*}*/
</style>
