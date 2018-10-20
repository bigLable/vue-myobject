<template>
<div>
  <div class="col-xs-12" >
    <el-carousel :interval="4000"  height="700px">
      <el-carousel-item v-for="(work,index) in info" :key="index">
     <img v-bind:src="work.worksPic">
      </el-carousel-item>
    </el-carousel>
  </div>

  <app-workskinds></app-workskinds>




 </div>
</template>
<script>
 import axios from 'axios'
  import workskinds from './workskinds'
    export default {
        name: "works",
      data() {
        return {
          activeName: 'second',
          imgList:[
            {url:require("../../../assets/zp1.jpg")} ,
            {url:require("../../../assets/zp2.jpg")} ,
            {url:require("../../../assets/zp3.jpg")} ,
            {url:require("../../../assets/zp4.jpg")} ,

          ],
          info:[],


        };
      },
      components:{
        'app-workskinds':workskinds,

      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
     },
       mounted(){
         let _this = this;
         axios.get('http://localhost:3000/works/hotworks').then(function(result){
           console.log('---');
           console.log(result.data)
           _this.info = result.data;
           console.log(_this.info);
         },function(err){
           console.log(err)

         })
       }
    }
</script>

<style scoped>
img{
  width: 1920px;
}

</style>
