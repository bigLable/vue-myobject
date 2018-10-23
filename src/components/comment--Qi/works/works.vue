<template>
<div>
  <div class="col-xs-12" >
    <el-carousel :interval="4000"  height="700px">
      <el-carousel-item v-for="(work,index) in info" :key="index">
     <img v-bind:src="work.pice">
      </el-carousel-item>
    </el-carousel>
  </div>
  <br>
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
         axios.get('http://localhost:3000/getpic').then(function(result){
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
