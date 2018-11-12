<template>
  <div class="container" >
    <div style="background-image:url('https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/09/01/ChMkJlddIgKIZn8AAA1xKXfKqWEAAShoQFIZhIADXFB819.jpg'); background-position: center center;
 background-attachment: fixed;background-repeat: no-repeat;background-size: cover;">
      <div style="height: 250px"></div>

    <div class="body">
      <h3  style="text-align: center"><span class="el-icon-upload2" ></span>&nbsp;作品上传</h3><br>
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
              <div class="el-icon-circle-plus  " style="font-size: 60px;cursor:pointer;color: rgba(255,2,2,0.69)"  ></div>
            </div>
            <div class="view">
              <div class="item" v-for="(item, index) in imgBase64">
                <img :src="item" class="img-responsive" >
              </div>
            </div>
          </div>
        </div>
      </div><br>
      <form class="form">
        <div class="form-group">
        <label style="margin-left:25px">作品描述</label>
          <el-input
            placeholder="请输入内容"
            v-model="formLabelAlign.worksDescribe"
            clearable>
          </el-input>

      </div>
        <div class="form-group">
          <label style="margin-left:25px">摄影器材</label>
          <el-input
            placeholder="请输入内容"
            v-model="formLabelAlign.worksEquipment"
            clearable>
          </el-input>

        </div>
        <br><br>
        <div class="form-group">
          <el-button type="primary" style="width:150px;height:40px;margin-left:70px" class="form-control btn btn-default" @click="edit">确认提交</el-button>
        </div>
      </form>

    </div>
      <div style="height: 250px"></div>
      </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="28%"
      :show-close="false"
      :close-on-press-escape="false"
    >
      <span style="color: #2e6da4 ;font-size: 18px;height: 20px" >评论成功！</span>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary"><router-link role="presentation" to="works">确定</router-link></el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import {formatDate} from '../../../../static/js/date';
  import $ from 'jquery'
  import axios from 'axios'
  export default {
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    },
    name: "changeinfo",
    data() {
      return {
        dialogVisible: false,
        upath:'',
        userid:this.$store.state.user,
        worksDate:formatDate(new Date(), 'yyyy-MM-dd hh:mm'),
        labelPosition: 'right',
        formLabelAlign: {
          worksDescribe: '',
          worksEquipment: '',

        },
        radio:1,
        imgBase64:[]    //存储img base64的值将值传给后端处理
      }
    },
    created(){
      this.worksId=this.$store.state.works
    },
    methods: {

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
        zipFormData.append('worksDescribe',this.formLabelAlign.worksDescribe)
        zipFormData.append('userid',this.userid)
        zipFormData.append('worksEquipment',this.formLabelAlign.worksEquipment,)
        zipFormData.append('worksDate',this.worksDate)
        if((_this.formLabelAlign.worksDescribe == ''|| _this.formLabelAlign.worksDescribe!==_this.formLabelAlign.worksDescribe.replace(/(^\s*)|(\s*$)/g,""))||(_this.formLabelAlign.worksEquipment == ''|| _this.formLabelAlign.worksEquipment!==_this.formLabelAlign.worksEquipment.replace(/(^\s*)|(\s*$)/g,""))){
          _this.$message({
            showClose: true,
            message: '信息不能为空,且不可有空格！',
            type: 'warning'
          })
          return false;
        }
        let config = { headers: { 'Content-Type': 'multipart/form-data' } };
        axios.post('http://localhost:3000/works/addWorks', zipFormData,config)
          .then(function (response) {


              _this.dialogVisible = true
              // _this.$message({
              //   showClose: true,
              //   message: '上传成功！',
              //   type: 'success'
              // })
              // _this.getworks()
              // _this.$router.push({path: '/works'})



          });
      },
      //选中文件后，将文件保存到实例的变量中
      changeImage(e) {
        this.upath = e.target.files;
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

  }

</script>


<style scoped>
  .container {
    width: 100%;
    height: 1000px;
    color:black;
    font-family: 微软雅黑;
    background-color: #ffffff;

    background-position-y:0px;
    background-position-x:-80px;
  }
  .body {
    padding:30px;
    width: 600px;

    margin: 0 auto;
    background: white;
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
