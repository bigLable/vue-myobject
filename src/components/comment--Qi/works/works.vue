<template>
<div>
  <br>

  <div class="col-xs-12" >
    <el-carousel :interval="4000"  height="600px" type="card" arrow="never">
      <el-carousel-item v-for="(work,index) in info" :key="index">
     <img v-bind:src="work.pice" class="img-responsive">
      </el-carousel-item>
    </el-carousel>
  </div>
<h3 style="text-align: center">镜头之中，有一个凤凰化开的路口</h3>
  <app-workskinds></app-workskinds>
  <h3 >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>

  <img src="https://www.sonystyle.com.cn/mysony/acafe/images/new/u1.jpg" class="img-responsive" alt="">
  <div style="height: 120px">&nbsp;</div>
<h3 style="text-align: center;font-family:宋体 ;font-size: 24px">拍照，从选机开始</h3>
  <h3 >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
  <br>
  <el-row class="" >
    <div class="col-md-3" v-for="shop in info3" >
      <div class="demo">
        <router-link :to="'/shops/'+shop.shopID">   <figure class="imghvr-flip-diag-2" style="background:rgba(0,0,0,0.8);height: 120px">  <img :src="shop.IMG1" alt="example-image">
          <figcaption style="text-align: center;">
            <span style="font-size: 18px;">{{shop.shopPara}}</span>
          </figcaption>
        </figure>
        </router-link>
        <span style="font-size: 18px;line-height: 50px">{{shop.shopName}}</span>
      </div>
    </div>
  </el-row>
  <h3 >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
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
          info3:[]


        };
      },
      components:{
        'app-workskinds':workskinds,

      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        gethotgoods() {
          let _this = this;
          axios.get('http://localhost:3000/gethot').then(function (result) {
            console.log('---');
            console.log(result.data)
            _this.info3 = result.data;
            console.log(_this.info3);
          }, function (err) {
            console.log(err)
          })
        },

     },
       mounted(){
         let _this = this;
         axios.get('http://localhost:3000/getpic').then(function(result){
           console.log('---');
           console.log(result.data)
           _this.info = result.data;
           console.log(_this.info);
         },function(err){
           console.log(err);
         });
         this.gethotgoods();


       }



    }

</script>

<style scoped>
img{
  width: 1920px;
}

</style>
