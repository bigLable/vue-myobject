<template>
  <div>

    <div id="head">
      <el-carousel :interval="4000" height="500px" arrow="always">
        <el-carousel-item v-for="(work,index) in info1" :key="index">
          <img v-bind:src="work.pic" class="img-responsive">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div style="text-align: center ;margin: 0 auto" id="f" @mouseover="fade"><span
      style="font-family:  'Times New Roman', Times, serif; cursor: pointer;font-size: 22px">带你走进想象力之门</span></div>
    <br>
    <router-link role="presentation" to="/search">
      <div class=" " style="height: 440px;">
        <img src="http://www.nikon.com.cn/tmp/CN/4016499630/3760176746/892078063/1046823830/639886146.jpg" alt=""
             class="img-responsive   animated pulse col-sm-6">
        <img src="http://www.nikon.com.cn/tmp/CN/4016499630/3760176746/892078063/1046823830/2966743444.jpg" alt=""
             class="img-responsive   animated  pulse  col-sm-6"> <br>
      </div>
    </router-link>

    <br>
    <div class=" col-xs-12 " id="new">
      <br> <br> <br><br> <br> <br>
      <div class="hot col-xs-12">
        <span style="color: rgba(255,0,0,0.8)" aria-hidden="true">&nbsp;<span>热力推荐</span></span></div>
      <br><br><br>
<p style="font-style: oblique;font-size: 16px;text-align: center;color: #878787;font-family: 宋体"class="col-xs-12">
        -------------------------------------------------This is the merchandise recommended for
        you-------------------------------------------------</p>
      <div>
        <br><br><br>
      </div>
      <el-row class="container">
        <div class="col-md-3 col-sm-6" v-for="shop in info3">
          <div class="demo">
            <router-link :to="'/shops/'+shop.shopID">
              <figure class="imghvr-shutter-in-out-diag-1" style="background:rgba(0,0,0,0.11)"><img :src="shop.shopImg"
                                                                                                    alt="example-image">
                <figcaption>
                  <span>规格:{{shop.shopPara}}</span>
                </figcaption>
              </figure>
            </router-link>
            <h3 style="color: #696969">{{shop.shopName}}</h3>
            <h4 style="color: #696969">￥{{shop.shopPrice}}</h4>
          </div>
          <!--<div class="box" style="background: rgba(255,0,0,0.31)" >-->
          <!--<img :src="shop.shopImg" alt="" class="img-responsive">-->
          <!--<div class="box-content">-->
          <!--<h3 class="title">{{shop.shopName}}</h3>-->
          <!--<span class="post">RMB:{{shop.shopPara}}</span>-->
          <!--<ul class="icon">-->
          <!--<router-link :to="'/shops/'+shop.shopID"> <li><a href="#"><i class="fa fa-link"></i></a></li></router-link>-->
          <!--</ul>-->
          <!--</div>-->
          <!--</div>-->
          <!--<span class="zi" style="color: #080808;font-size: 14px;font-family:新宋体"> 型号:{{shop.shopName}}</span>-->
          <!--<br>-->
          <!--<span class="zi" style="color: #080808;font-size: 14px;font-family:新宋体">RMB:{{shop.shopPrice}}</span>-->
          <!--</div>-->
          <!--<br>-->
        </div>
      </el-row>
      <br>
      <div style="height: 150px"></div>
    </div>


    <div class="col-xs-12">  <router-link role="presentation" to="/search"><img
      src="https://www.sonystyle.com.cn/content/dam/sonystyle/products/ilc/images/kv/qhf_kv_1920x600.jpg" alt="" style="width: 100%;" class="img-responsive"></router-link>
      <div style="height: 150px"></div>
    </div>

    <div id="old">

      <div class="hot col-xs-12">
        <span aria-hidden="true">&nbsp;<span>新品发布</span></span>
        <br><br>
      </div>

      <p style="font-style: oblique;font-size: 16px;text-align: center;color: #878787;font-family: 宋体"class="col-xs-12">
        -------------------------------------------------This is the latest product recommended for
        you-------------------------------------------------</p>
      <div>
        <router-link role="presentation" to="/search"> <div class="col-xs-offset-10"><img src="../../assets/jian.png" alt=""style="width:20px;height:23px ">more</div></router-link>
        <br><br><br>
      </div>
      <el-row class="container">
        <div class="col-md-4 col-sm-6" v-for="shop in info2">
          <div class="box">
            <img :src="shop.shopImg" alt="" class="img-responsive">
            <div class="box-content">
              <div class="content">
                <h3 class="title">{{shop.shopName}}</h3>
                <span class="post">规格:{{shop.shopPara}}</span>
                <ul class="icon">
                  <router-link :to="'/shops/'+shop.shopID">
                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                  </router-link>
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
      <div style="height: 50px"></div>
    </div>


    <div class="work col-xs-12  ">

      <div class=" hot col-xs-12"><h3 style="font-family:  'Times New Roman', Times, serif; cursor: pointer">
        最好的时光在路上</h3></div>
      <div>
        <router-link role="presentation" to="/works"> <div class="col-xs-offset-10"><img src="../../assets/jian.png" alt=""style="width:20px;height:23px ">more</div></router-link>
      </div>

      <div class="wrapper">
        <section class="sec01" style="height: 500px"></section>
        <section class="sec02" style="height: 500px"></section>
        <section class="sec03" style="height: 500px"></section>

      </div>

    </div>
    <br>


    <div style="height: 600px"></div>
    <div class="go-top">
      <img  id="ding" src="../../assets/ding.png" @click="goTop" alt="" ref="btn">
    </div>


  </div>
</template>

<script>
  import axios from 'axios'
  import $ from 'jquery'
  import {videoPlayer} from 'vue-video-player'
  import '../../../node_modules/video.js/dist/video-js.css'
  import '../../../node_modules/vue-video-player/src/custom-theme.css'

  export default {
    name: "Home",
    data() {


      return {
        isTop: true,
        timer: null,

        info1: [],
        info2: [],
        info3: [],
        info4: [],

      }
    },


    methods: {
      needScroll () {
        let clientHeight = document.documentElement.clientHeight
        let obtn = this.$refs.btn
        window.onscroll = function () {
          let osTop = document.documentElement.scrollTop || document.body.scrollTop
          if (osTop >= clientHeight) {
            obtn.style.display = 'block'
          } else {
            obtn.style.display = 'none'
          }
          if (!this.isTop) {
            clearInterval(this.timer)
          }
          this.isTop = false
        }
      },
      goTop () {
        let self = this
        self.timer = setInterval(function () {
          let osTop = document.documentElement.scrollTop || document.body.scrollTop
          let ispeed = Math.floor(-osTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
          self.isTop = true
          if (osTop === 0) {
            clearInterval(self.timer)
          }
        }, 30)
      },
      fade: function () {
        $('#f').addClass('animated  pulse')
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
        axios.get('http://localhost:3000/getnewworks').then(function (result) {
          console.log('---');
          console.log(result.data)
          _this.info4 = result.data;
          console.log(_this.info4);
        }, function (err) {
          console.log(err)
        })
      }
    },
    mounted: function () {
      this.getpic();
      this.getnewgoods();
      this.gethotgoods();
      this.getnewworks();
      this.needScroll();
    },
  }


</script>

<style scoped>
  @import '../../../static/css/style.css';
  @import '../../../static/css/imagehover.css';
  #head {
    background-color: #ffffff;
  }
#ding{
    width: 50px;
    height: 50px;
    position: fixed;
    right: 50px;
    bottom: 50px;
    border: none;
    display: none;

  }


  .hot {
    font-size: 24px;
    color: #210008;
    text-align: center;

  }

  .zi {
    color: #838383;
    font-family: "Times New Roman", Georgia, Serif;
    margin-left: 20px;
  }

  .work {
    background: #f1fff8;
    padding-top: 50px;
  }

  #new {
    background: white;

  }

  #old {
    background: white;

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

  .demo {
    padding: 2em 0;
  }

  .box {
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
    position: relative;
    width: 260px;
    height: 320px;
    background-color: #ffffff;
  }

  .box:before {
    content: '';
    background-color: rgba(255, 255, 255, 0.7);
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    transition: all 0.3s ease 0.1s;
  }

  .box:hover:before {
    left: 15px;
    right: 15px;
    bottom: 15px;
    top: 15px;
    opacity: 1;
    animation: bounce-left 1s ease-in forwards;
  }

  .box img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease 0s;

  }

  .box:hover img {
    transform: scale(1.5);
  }

  .box .box-content {
    color: #fff;
    text-align: center;
    width: 100%;
    height: 100%;
    transform: translateX(-50%) translateY(-50%) scale(1);
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    transition: all 0.3s ease 0.5s;
  }

  .box .content {
    opacity: 0;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    transition: all 0.3s ease 0s;
  }

  .box:hover .content {
    opacity: 1;
  }

  .box .title {
    color: #ff3a6f;
    font-size: 22px;
    font-weight: 600;
    text-transform: uppercase;
    transform: translateY(-500px);
    opacity: 0;
    transition: all 0.8s ease 0.3s;
  }

  .box .post {
    color: #000;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: capitalize;
    display: inline-block;
    margin-bottom: 10px;
    opacity: 0;
    transform: translateY(-500px);
    transition: all 0.8s ease 0.15s;
  }

  .box:hover .title,
  .box:hover .post {
    opacity: 1;
    transform: translateY(0);
  }

  .box .icon {
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  .box .icon li {
    margin: 0 4px;
    opacity: 0;
    display: inline-block;
    transform: translateY(-200px);
    transition: all 0.8s ease 0s;
  }

  .box .icon li:nth-child(2) {
    transition-delay: 0.1s;
  }

  .box:hover .icon li {
    opacity: 1;
    transform: translateY(0);
  }

  .box .icon li a {
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

  .box .icon li a:hover {
    color: #fff;
    background-color: #ff3a6f;
    box-shadow: 0 0 15px #ff3a6f;
  }

  @keyframes bounce-left {
    25%, 50%, 75%, 100% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(30px);
    }
    70% {
      transform: translateX(15px);
    }
    90% {
      transform: translateX(5px);
    }
  }

  @media only screen and (max-width: 990px) {
    .box {
      margin-bottom: 30px;
    }
  }

  @media only screen and (max-width: 479px) {
    .box .title {
      font-size: 18px;
    }
  }

  .wrapper {
    width: 100%;
    height: 100%;
    padding-left: 40px;
  }

  .wrapper section {

    width: calc(100% / 3.1);
    height: 100%;
    float: left;
    -webkit-filter: grayscale(50%);
    filter: grayscale(50%);
    transition-duration: 0.5s;
    position: relative;
  }

  .wrapper section::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.6), transparent);
    opacity: 1;
    transition: 0.3s;
  }

  .wrapper section.sec01 {
    background: url("https://desk-fd.zol-img.com.cn/t_s1280x1024c5/g5/M00/0A/0B/ChMkJ1tEfAKIeyCwAF6u9pbKmU0AAplXQBdHUIAXq8O746.jpg");
  }

  .wrapper section.sec02 {
    background: url("https://desk-fd.zol-img.com.cn/t_s1280x1024c5/g5/M00/0A/0F/ChMkJ1tFZQKIU-mEABLiJ_5aa0AAApmNQJEw4wAEuI_739.jpg");
  }

  .wrapper section.sec03 {
    background: url("https://desk-fd.zol-img.com.cn/t_s1280x1024c5/g5/M00/0D/0E/ChMkJ1ZFpNqIX9pSABAipaLl7xEAAE3CQLRnCMAECK9265.jpg");
  }

  .wrapper section.sec01, .wrapper section.sec02, .wrapper section.sec03 {
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }

  .wrapper:hover section:hover {
    width: 40%;
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
  }

  .wrapper:hover section:hover::before {
    opacity: 0;
  }

  .wrapper:hover section:not(:hover) {
    width: 30%;
  }

  .alternative a {
    margin-top: 1500px;
    font-size: 1.2rem;
    display: block;
    padding: 0.6em 0;
    background: rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition-duration: 0.3s;
  }

  .alternative a:hover {
    background: rgba(255, 255, 255, 0.6);
    color: #333;
  }


</style>


