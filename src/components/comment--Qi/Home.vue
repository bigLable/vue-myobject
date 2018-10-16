<template>
  <div>
    <div>
      <el-carousel :interval="4000" type="card" height="700px">
        <el-carousel-item v-for="item in 5" :key="item">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="color"><span id="hot" class="glyphicon glyphicon-fire" aria-hidden="true">热门数码产品</span>
      <el-row>
        <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 1 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/u19.png" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
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
    position: absolute;
    right: 50%;
    top: 850px;

  }
  .color{
    width: 100%;
    height: 800px;
    background-color:	#f1f3f3;
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


