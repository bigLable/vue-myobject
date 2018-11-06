<template>
  <div class="container" >
    <div class="body">
      <h2 style="text-align: center;">修改信息</h2><br>
      <div class="form-group" style="width:250px;margin:0 auto">
        <div>
         <!-- <div class="app">
                  <div class="img">
                  <a href="#"><img src="../../assets/pic.jpg">
                    <input type="file" id="c1" name="avatar" @change="changeImage($event)" accept="image/gif,image/jpeg,image/jpg,image/png" ref="avatarInput" multiple>
                    <p class="focus"></p>
                    </a></div>
                  &lt;!&ndash;自定义的表单数据：<input type="text" v-model="mydata">&ndash;&gt;
                &lt;!&ndash;<button type="button" @click="edit">上传文件</button>&ndash;&gt;
            </div>-->
          <div class="image-view">
            <div class="addbox">
              <input type="file" @change="getImgBase($event)" accept="image/gif,image/jpeg,image/jpg,image/png">
              <div class="addbtn">+</div>
            </div>
            <div class="view">
              <div class="item" v-for="(item, index) in imgBase64">
                <img :src="item">
              </div>
            </div>
          </div>
        </div>
      </div><br>
      <form class="form">
        <div class="form-group">
          <label style="margin-left:25px">新的用户名</label>
          <input type="text" v-model="formLabelAlign.name" class="form-control"  style="margin:0 auto;width:250px;background-color: transparent;color: black">{{ reversedMessage1}}
          <span id="tip1" style="margin-left:25px">提示：请输入2-6个字符的用户名</span>
        </div>
        <div class="form-group" style="margin-left:25px;">
          <label for="man">男</label>
          <input type="radio" id="man" value=1 v-model="sex">
          <label for="woman">女</label>
          <input type="radio" id="woman" value=0 v-model="sex">

        </div>
        <div class="form-group">
          <label style="margin-left:25px">手机号</label>
          <input v-model="formLabelAlign.phone" id="phone" class="form-control" style="margin:0 auto;width:250px;background-color: transparent;color:white;">
        </div>
        <span style="font-weight: bold;margin-left:25px">是否需要修改密码:
        <button @click.prevent='sel(0)' class="form-control"  style="margin: auto auto;width:250px;background-color: transparent;color:black;" tag="li" active-class="active" role="presentation"  exact>否</button>
        <button  @click.prevent='sel(1)' class="form-control" style="margin: 0px auto;width:250px;background-color: transparent;color:black;"  tag="li" active-class="active" role="presentation">是</button>
        </span>
        <div v-show="show==1">
          <div class="form-group" style="width:250px;margin:0 auto">
            <label> 请输入密码 </label>
            <input type="password" v-model="formLabelAlign.userPwdone" placeholder="请输入6位密码" class="form-control" style="background-color: transparent;">
          </div>
          <div class="form-group" style="width:250px;margin:0 auto">
            <label style="color:black">请再次确定密码</label>
            <input type="password" v-model="formLabelAlign.userPwd"  class="form-control" style="background-color: transparent;">{{ reversedMessage}}
            <span id="tip" style="color:white">提示：两次输入密码不一致</span>
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
        imgBase64:[]    //存储img base64的值将值传给后端处理
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
        // alert('性别'+this.radio)
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
            if(_this.formLabelAlign.name.length < 2 || _this.formLabelAlign.name.length > 6 || _this.formLabelAlign.userPwd.length != 6 || !(/^1[34578]\d{9}$/.test(document.getElementById('phone').value))){
              alert('请输入正确信息！')
              }else{
              alert('修改成功！')
              _this.getuser()
              _this.$router.push({path: '/user'})
            }
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
      //获取图片base64实现预览
      getImgBase(e){
        var _this = this;
        var event = event || window.event;
        var file = event.target.files[0];
        var reader = new FileReader();
        //转base64
        reader.onload = function(e) {
          _this.imgBase64.push(e.target.result);
        }
        reader.readAsDataURL(file);
        this.upath = e.target.files;
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
      },
   reversedMessage1:function(){
        if(this.formLabelAlign.name.length<2 || this.formLabelAlign.name.length>6){
          $('#tip1').show()
        }else{
          $('#tip1').hide()
        }
      }
    }
  }

</script>

<style scoped>
  .container {
    width: 100%;
    height: 1000px;
    color:black;
    font-family: 微软雅黑;
    background-color: #ffffff;
    background:url('../../assets/1111.jpg') no-repeat;
    background-position-y:0px;
    background-position-x:-150px;
  }
  .body {
    padding:30px;
    width: 800px;
    height:800px;
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
  .clearboth::after{
    content:"";
    display:block;
    clear:both;
  }
  .image-view{
    width:100px;
    height:100px;
    margin:50px auto;
  }
  .image-view .addbox{
    float:left;
    position:relative;
    height:100px;
    width:100px;
    margin-bottom:20px;
    margin-left:60px;
    text-align:center;
  }
  .image-view .addbox input{
    position:absolute;
    left:0;
    height:100px;
    width:100px;
    opacity:0;
  }
  .image-view .addbox .addbtn{
    float:left;
    height:100px;
    width:100px;
    line-height:100px;
    color:#fff;
    font-size:40px;
    background:#ccc;
    border-radius:10px;
  }
  .image-view .item {
    position:relative;
    float:left;
    height:100px;
    width:100px;
    margin-top:-120px;
    margin-left:-80px;
  }
  .image-view .item .cancel-btn{
    position:absolute;
    right:0;
    top:0;
    display:block;
    width:20px;
    height:20px;
    color:#fff;
    line-height:20px;
    text-align:center;
    background:red;
    border-radius:10px;
    cursor:pointer;
  }
  .image-view .item img{
    width:100%;
    height:100%;
    margin-left:0px;
  }
  .image-view .view{
    clear:both;
  }
</style>
