<template>

  <div>
    <br>
    <div>
      <el-carousel :interval="4000" type="card" height="600px" arrow="never">
        <el-carousel-item v-for="(work,index) in info1" :key="index">
          <img v-bind:src="work.pic" class="img-responsive">
        </el-carousel-item>
      </el-carousel>

    </div>


    <div class="new col-xs-12 ">
      <div class="hot col-xs-12">
        <span class="glyphicon-heart glyphicon glyphicon-fire" aria-hidden="true"><span>热门数码产品</span></span></div>
      <div>
        <br><br><br>
      </div>
      <el-row class="container">
        <el-col :span="7" v-for="(shop, index) in info3" :offset="index > 0 ? 1:1"   >
          <el-card :body-style="{ padding: '12px' }"style="height: 400px">
            <img :src="shop.shopImg" class="img-responsive" >
            <div style="padding: 14px;">
              <router-link :to="'/shops/'+shop.shopID"><span> 产品名称:{{shop.shopName}}</span></router-link>
              <div class="bottom clearfix">
                <el-button type="text" class="button">
                  RMB:{{shop.shopPrice}}
                </el-button>
              </div>
            </div>
          </el-card>
          <br>
        </el-col>
      </el-row>
      <br>
    </div>

    <div class="new col-xs-12 ">
      <br><br>
      <div class="hot col-xs-12">
        <span class="glyphicon-heart glyphicon glyphicon-star" aria-hidden="true"><span>最新数码产品</span></span></div>
      <div>
        <router-link role="presentation" to="/search"><p
          class="el-icon-caret-right more col-md-offset-10 col-xs-offset-10">more</p></router-link>
      </div>
      <el-row class="container">
        <el-col :span="7" v-for="(shop, index) in info2" :offset="index > 0 ? 1 : 1">
          <el-card :body-style="{ padding: '12px' }"style="height: 400px">
            <img :src="shop.shopImg" class="img-responsive">
            <div style="padding: 14px;">
              <router-link :to="'/shops/'+shop.shopID"><span> 产品名称:{{shop.shopName}}</span></router-link>
              <div class="bottom clearfix">
                <el-button type="text" class="button">
                  RMB:{{shop.shopPrice}}
                </el-button>
              </div>
            </div>
          </el-card>
          <br>
        </el-col>
      </el-row>
      <br>
    </div>
    <div class="work col-xs-12 ">
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

  .hot {
    font-size: 24px;
    color: #210008;
    text-align: center;

  }

  .color {
    width: 100%;
    background-color: rgba(197, 255, 240, 0.25);
    padding-left: -200px;
  }

  .time {
    font-size: 13px;
    color: #999;
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
    background-color: rgba(92, 195, 226, 0.2);
    padding-top: 50px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .new {
    background-color: rgba(197, 255, 240, 0.25);
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

</style>


