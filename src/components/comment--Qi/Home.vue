<template>

  <div>
    <br>
    <div class="col-xs-12">
      <el-carousel :interval="4000" type="card" height="700px">
        <el-carousel-item v-for="item in 5" :key="item">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="color col-xs-12 ">
      <div id="hot" class="col-xs-12" ><span class="glyphicon glyphicon-fire" aria-hidden="true"><span>热门数码产品</span></span></div>
      <br><br><br><br>
      <el-row class="container" >
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0"   >
            <el-card :body-style="{ padding: '50px' }">
              <img src="../../assets/sh3.png" class="image">
              <div style="padding: 14px;">
                <span> 佳能EOS R(单机)</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">
                    ¥15364-16000</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      <br>
      <el-row  class="container" >
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0"   >
          <el-card :body-style="{ padding: '30px' }">
            <img src="../../assets/sh2.png" class="image">
            <div style="padding: 14px;">
              <span> 佳能EOS R(单机)</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">
                  ¥15364-16000</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>


    </div>



  </div>


</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        currentDate: new Date()
      };
    }
  }
</script>

<style scoped>

  .el-carousel__item:nth-child(3) {
    background-image: url("../../assets/ph1.jpg");
  }

  .el-carousel__item:nth-child(4) {
    background-image: url("../../assets/ph2.jpg");
  }

  .el-carousel__item:nth-child(5) {
    background-image: url("../../assets/ph3.jpg");
  }

  .el-carousel__item:nth-child(6) {;
    background-image: url("../../assets/ph4.jpg");
  }

  .el-carousel__item:nth-child(7) {
    background-image: url("../../assets/ph5.jpg");
  }

  #hot {
    font-size: 24px;
    color: #210008;
    text-align: center;

  }
  .color {
    width: 100%;
    height: 1200px;
    background-color: rgba(197, 255, 240, 0.25);
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

  .image {
    width: 100%;
    display: block;


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


