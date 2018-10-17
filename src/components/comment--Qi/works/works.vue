<template>
<div>
  <br>
  <div class="col-xs-12">
    <el-carousel :interval="4000"  height="700px">
      <el-carousel-item v-for="(img,index) in imgList" :key="index">
        <img v-bind:src="img.url">
      </el-carousel-item>
    </el-carousel>
  </div>
  <app-workskinds></app-workskinds>


</div>
</template>

<script>

  import workskinds from './workskinds'
    export default {
        name: "works",
      data() {
        return {
          activeName: 'second', imgList:[
            {url:require("../../../assets/zp1.jpg")} ,
            {url:require("../../../assets/zp2.jpg")} ,
            {url:require("../../../assets/zp3.jpg")} ,
            {url:require("../../../assets/zp4.jpg")} ,

          ]


        };
      },
      components:{
        'app-workskinds':workskinds,

      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style scoped>
img{
  width: 1920px;
}

</style>
