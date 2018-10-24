<template>

  <div>
    <br>
    <div id="head">
      <el-carousel :interval="4000" type="card" height="600px" arrow="never">
        <el-carousel-item v-for="(work,index) in info1" :key="index">
          <img v-bind:src="work.pic" class="img-responsive">
        </el-carousel-item>
      </el-carousel>
    </div>




    <div class=" col-xs-12 "  id="new">
      <div class="hot col-xs-12">
        <span class="glyphicon-heart glyphicon glyphicon-fire" aria-hidden="true"><span>热门数码产品</span></span></div>
      <div>
        <br><br><br>
      </div>
      <el-row class="container" >
          <div class="col-md-4 col-sm-6" v-for="shop in info3" >
            <div class="box" >
              <img :src="shop.shopImg" alt="" class="img-responsive">
              <div class="box-content">
                <div class="content">
                  <h3 class="title">{{shop.shopName}}</h3>
                  <span class="post">RMB:{{shop.shopPrice}}</span>
                  <ul class="icon">
                    <router-link :to="'/shops/'+shop.shopID"> <li><a href="#"><i class="fa fa-link"></i></a></li></router-link>
                  </ul>
                </div>
              </div>
              <span class="zi"> 产品名称:{{shop.shopName}}</span>
              <br>
            <span class="zi">RMB:{{shop.shopPrice}}</span>
            </div>
            <br>
          </div>
      </el-row>
      <br>
    </div>
    <div class=" col-xs-12 "  id="old">
      <br><br>
      <div class="hot col-xs-12">
        <span class="glyphicon-heart glyphicon glyphicon-star" aria-hidden="true"><span>最新数码产品</span></span></div>
      <div>
        <router-link role="presentation" to="/search"><p
          class="el-icon-caret-right more col-md-offset-10 col-xs-offset-10">more</p></router-link>
        <br><br><br>
      </div>
      <el-row class="container" >
        <div class="col-md-4 col-sm-6" v-for="shop in info2" >
          <div class="box" >
            <img :src="shop.shopImg" alt="" class="img-responsive">
            <div class="box-content">
              <div class="content">
                <h3 class="title">{{shop.shopName}}</h3>
                <span class="post">RMB:{{shop.shopPrice}}</span>
                <ul class="icon">
                  <router-link :to="'/shops/'+shop.shopID"> <li><a href="#"><i class="fa fa-link"></i></a></li></router-link>
                </ul>
              </div>
            </div>
            <span class="zi"> 产品名称:{{shop.shopName}}</span>
            <br>
            <span class="zi">RMB:{{shop.shopPrice}}</span>
          </div>
          <br>
        </div>
      </el-row>
      <br>
    </div>





    <div class="work col-xs-12  ">
      <div class=" hot col-xs-12"><span class="
glyphicon glyphicon-eye-open" aria-hidden="true"><span>&nbsp;热门作品</span></span></div>

      <div>
        <router-link role="presentation" to="/works"><p
          class="el-icon-caret-right more col-md-offset-10 col-xs-offset-10">more</p></router-link>
      </div>

      <br><br>
      <el-row class="container">
        <el-col :span="6" v-for="(work, index) in info4" :offset="index > 0 ? 1: 1">
          <el-card :body-style="{ padding: '10px' }"style="height: 300px">
            <img :src="work.worksPic" class="image">
            <div style="padding: 14px;" >
              <span> {{work.worksauthor}}</span>
              <div class="bottom clearfix">
                <router-link :to="'/comment/'+work.worksId">
                  <el-button type="text" class="button">
                    {{work.worksDescribe}}
                  </el-button>
                </router-link>
              </div>
            </div>
          </el-card>
          <br>
        </el-col>
      </el-row>
    </div>
    <br>
  </div>


</template>

<script>
  import axios from 'axios'
  import {videoPlayer} from 'vue-video-player'
  import '../../../node_modules/video.js/dist/video-js.css'
  import '../../../node_modules/vue-video-player/src/custom-theme.css'
  export default {
    name: "Home",
    data() {


      return {

        info1: [],
        info2: [],
        info3: [],
        info4: [],

      }
    },


    methods: {
      fade:function(){
        $('#f').addClass('animated bounce')
      },
      getpic: function () {
        let _this = this;
        axios.get('http://localhost:3000/getpic').then(function (result) {
          console.log('---');
          console.log(result.data)
          _this.info1 = result.data;
          console.log(_this.info1);
        }, function (err) {
          console.log(err)
        })
      },
      getnewgoods: function () {
        let _this = this;
        axios.get('http://localhost:3000/getnew').then(function (result) {
          console.log('---');
          console.log(result.data)
          _this.info2 = result.data;
          console.log(_this.info2);
        }, function (err) {
          console.log(err)
        })
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
      getnewworks: function () {
        let _this = this;
        axios.get('http://localhost:3000/works/hotworks').then(function (result) {
          console.log('---');
          console.log(result.data)
          _this.info4 = result.data;
          console.log(_this.info4);
        }, function (err) {
          console.log(err)
        })
      },

    },
    mounted: function () {
      this.getpic();
      this.getnewgoods();
      this.gethotgoods();
      this.getnewworks();
    },
  }
</script>

<style scoped>
#head{
  background-color: #ffffff;
}
  .hot {
    font-size: 24px;
    color: #210008;
    text-align: center;

  }
.zi{
  color: #838383;
  font-family:"Times New Roman",Georgia,Serif;
  margin-left: 20px;
}


  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;

  }

  .work {
    background: linear-gradient(#e5f2ff,#e5f2ff);
    padding-top: 50px;
  }

  .image {
    width: 100%;
    display: block;
  }

#new {
  background: linear-gradient(#ffffff, #ffffff);


  }
#old{
  background: linear-gradient(  #ffffff,#e5f2ff);

}

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  a {
    text-decoration: none;
  }

  .more {
    font-size: 18px;
    color: #b8b8b8;

  }

  .more:hover {
    cursor: pointer;
    color: #5b5b5b;
  }
  .demo{
    padding: 2em 0;
  }
  .box{
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
    position: relative;
    width: 260px;
    height: 300px;
    background-color:#ffffff;
  }
  .box:before{
    content: '';
    background-color: rgba(255,255,255,0.7);
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    transition: all 0.3s ease 0.1s;
  }
  .box:hover:before{
    left: 15px;
    right: 15px;
    bottom: 15px;
    top: 15px;
    opacity: 1;
    animation:bounce-left 1s ease-in forwards;
  }
  .box img{
    width: 100%;
    height: auto;
    transition: all 0.3s ease 0s;

  }
  .box:hover img{ transform: scale(1.5); }
  .box .box-content{
    color: #fff;
    text-align: center;
    width: 100%;
    height: 100%;
    transform:translateX(-50%) translateY(-50%) scale(1);
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    transition:all 0.3s ease 0.5s;
  }
  .box .content{
    opacity: 0;
    transform:translateX(-50%) translateY(-50%);
    position: absolute;
    left:50%;
    top:50%;
    z-index: 2;
    transition:all 0.3s ease 0s;
  }
  .box:hover .content{ opacity: 1; }
  .box .title{
    color: #ff3a6f;
    font-size: 22px;
    font-weight: 600;
    text-transform: uppercase;
    transform: translateY(-500px);
    opacity: 0;
    transition:all 0.8s ease 0.3s;
  }
  .box .post{
    color: #000;
    font-size:15px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: capitalize;
    display: inline-block;
    margin-bottom: 10px;
    opacity: 0;
    transform:translateY(-500px);
    transition:all 0.8s ease 0.15s;
  }
  .box:hover .title,
  .box:hover .post{
    opacity: 1;
    transform:translateY(0);
  }
  .box .icon{
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
  }
  .box .icon li{
    margin:0 4px;
    opacity: 0;
    display: inline-block;
    transform: translateY(-200px);
    transition: all 0.8s ease 0s;
  }
  .box .icon li:nth-child(2){ transition-delay: 0.1s; }
  .box:hover .icon li{
    opacity: 1;
    transform: translateY(0);
  }
  .box .icon li a{
    color: #fff;
    background-color: #0eb1dc;
    font-size: 18px;
    line-height: 33px;
    height: 35px;
    width: 35px;
    border: 2px solid #fff;
    border-radius: 50%;
    display: block;
    transition: all 0.3s ease 0s;
  }
  .box .icon li a:hover{
    color: #fff;
    background-color: #ff3a6f;
    box-shadow: 0 0 15px #ff3a6f;
  }
  @keyframes bounce-left{
    25%,50%,75%,100%{ transform:translateX(0); }
    40%{ transform:translateX(30px); }
    70%{ transform:translateX(15px); }
    90%{ transform:translateX(5px); }
  }
  @media only screen and (max-width:990px){
    .box{ margin-bottom: 30px; }
  }
  @media only screen and (max-width:479px){
    .box .title{ font-size: 18px; }
  }
</style>


