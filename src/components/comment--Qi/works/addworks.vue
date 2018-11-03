<template>
<div>
  <div class="avatar">
    <div @mouseover="showBg=true" @mouseleave="showBg=false">
      <div class="bg" v-if="showBg" :style="`line-height:${imgHeight}`">点击上传</div>
      <input type="file" class="input-file" :style="`width:${imgWidth};height:${imgHeight};`" name="avatar" ref="avatarInput" @change="changeImage($event)" accept="image/gif,image/jpeg,image/jpg,image/png">
      <img :src="avatar?avatar:require('../../../assets/logo.png')" alt="" :style="`width:${imgWidth};height: ${imgHeight};`" name="avatar">
    </div>
    <div class="text" @click="upload" v-if="file">确定上传</div>
  </div>
  <div>111</div>
</div>
</template>

<script>

  export default {
    name: 'addworks',
    data(){
      return{
        avatar: '',
        file: '',
        showBg: false
      }
    },
    props: ["uploadType", "imgUrl", "imgWidth", "imgHeight"],
    created(){
      this.avatar = this.imgUrl
    },
    methods: {
      changeImage: function(e){
        let file = e.target.files[0];
        this.file = file
        console.log(this.file)
        let reader = new FileReader()
        let that = this
        reader.readAsDataURL(file)
        reader.onload= function(e){
          that.avatar = this.result
        }
      },
      upload: function(){
        if(this.$refs.avatarInput.files[0].length !== 0){
          let data = new FormData();
          data.append('multfile', this.$refs.avatarInput.files[0]);
          data.append('operaType', this.uploadType);
          this.$store.dispatch('UPLOAD_HEAD', data) //调用上传接口,把data传递给接口
            .then(res => {
              this.file = '';
              let data = res.data.data;
              //给父组件传递emit事件，把返回的图片路径相关参数传递过去
              this.$emit("upload", data );
              this.$message({
                type: "success",
                message: "上传成功！"
              })
            }).catch(err => {
            console.log(err)
            if(err.data.msg){
              this.$message({
                type: "error",
                message: err.data.msg
              })
            }else {
              this.$message({
                type: "error",
                message: "上传失败"
              })
            }
          })
        }
      },
    }
  }

</script>

<style scoped>

</style>
