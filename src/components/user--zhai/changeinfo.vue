<template>
  <div class="container">
    <span class="title">修改资料</span>
    <div class="body">
      <div class="pic"><el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      </div>
      <div class="form">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="用户名"
                      prop="name"
                      :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
          <el-input v-model="formLabelAlign.name" maxlength="8" minlength="1"></el-input>
        </el-form-item>
        <el-radio v-model="radio" label="2" class="radio">男</el-radio>
        <el-radio v-model="radio" label="3" class="radio">女</el-radio>
          <el-form-item label="生日">
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        <el-form-item label="职业">
          <el-input v-model="formLabelAlign.work"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="formLabelAlign.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱"
                      prop="email"
                      :rules="[
                        { required: true, message: '请输入邮箱地址', trigger: 'blur'},
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
          <el-input v-model="formLabelAlign.email"></el-input>
        </el-form-item>
        <el-button type="primary" round>提交修改</el-button>
      </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "changeinfo",
    data(){
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          work: '',
          phone: '',
          email: '',
          word:'',
        },
        radio:1,
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
      },
        value1: '',
        textarea: '',
        imageUrl: ''
    }
  },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
}

</script>

<style scoped>
  .container{
    width:100%;
    height:700px;
    background-color: #f4f4f4;
  }
  .title{
    display:block;
    font-size:35px;
    color:grey;
    position:absolute;
    margin-left:50px;
    margin-top:80px;
  }
  .body{
    width:800px;
    height:600px;
    background-color:white;
    margin:0 auto;
    margin-top:80px;
  }
  .form{
    position: absolute;
    width:300px;
    margin-left:350px;
    margin-top:60px;
  }
  .radio{
    position:relative;
    margin-left:80px;
    margin-top:-15px;
  }
  .pic{
    width:265px;
    float:left;
    margin-top:60px;
    margin-left:70px;
  }
  .avatar-uploader .el-upload {
    float:left;
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
