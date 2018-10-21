<template>

  <div>
    <br>
    <div class="col-xs-12">
      <el-carousel :interval="4000" type="card" height="700px">
        <el-carousel-item v-for="(work,index) in info1" :key="index">
          <img v-bind:src="work.worksPic">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="color col-xs-12 ">
      <div class="hot col-xs-12"><span class="glyphicon glyphicon-fire" aria-hidden="true"><span>热门数码产品</span></span>
      </div>
      <br><br><br><br>
      <el-row class="container">
        <el-col :span="6" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 2 : 2">
          <el-card :body-style="{ padding: '40px' }">
            <img src="../../assets/sh3.png" class="image">
            <div style="padding: 14px;">
              <span> 佳能EOS R(单机)</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">
                  ¥15364-16000
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <br>
    </div>
    <div class="new col-xs-12 ">
      <div class="hot col-xs-12"><span class="glyphicon-heart
glyphicon glyphicon-star" aria-hidden="true"><span>最新数码产品</span></span></div>
      <br><br><br><br>
      <el-row class="container">
        <el-col :span="6" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 2 : 2">
          <el-card :body-style="{ padding: '40px' }">
            <img src="../../assets/sh3.png" class="image">
            <div style="padding: 14px;">
              <span> 佳能EOS R(单机)</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">
                  ¥15364-16000
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <br>
    </div>
    <div class="work col-xs-12 ">
      <div class=" hot col-xs-12"><span class="
glyphicon glyphicon-eye-open" aria-hidden="true"><span>&nbsp;热门作品</span></span></div>
      <br><br><br><br>
      <el-row class="container">
        <el-col :span="6" v-for="(work, index) in info4" :key="work" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '10px' }">
            <img :src="work.worksPic" class="image">
            <div style="padding: 14px;">
              <span> 佳能EOS R(单机)</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">
                  ¥15364-16000
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <br>
  </div>


</template>

<script>
  import axios from 'axios'

  export default {
    name: "Home",
    data() {
      return {
        currentDate: new Date(),
        imgList: [
          {url: require("../../assets/ph1.jpg")},
          {url: require("../../assets/ph2.jpg")},
          {url: require("../../assets/ph3.jpg")},
          {url: require("../../assets/ph4.jpg")},
          {url: require("../../assets/ph5.jpg")},
        ],
        info1: [],
        info2: [],
        info3: [],
        info4: [],


      };
    },
    methods: {
      getpic: function () {
        let _this = this;
        axios.get('http://localhost:3000/works/hotworks').then(function (result) {
          console.log('---');
          console.log(result.data)
          _this.info1 = result.data;
          console.log(_this.info1);
        }, function (err) {
          console.log(err)
        })
      },
      getnewgoods:function() {
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
      getnewworks:function() {
        let _this = this;
        axios.get('http://localhost:3000/getnewworks').then(function (result) {
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
    height: 800px;
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


</style>


