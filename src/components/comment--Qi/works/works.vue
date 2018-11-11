<template>
  <div>
    <div class="col-xs-12" >
      <div style="border: 1px rgba(193,193,193,0.49) solid;height: 350px;" class="col-xs-3">

        <div> <img src="../../../assets/h1.png" alt="" class="img-responsive"></div>


        <p   style="font-size:23px;font-family:新宋体;text-align: center;font-weight: bold;height: 50px;">欢迎来到kaca摄影区</p>
    <el-button type="primary" round style="margin-left: 110px; margin-top: -25px;margin-bottom: 10px"  @click="getdata ">上传我的作品</el-button>
        <p style="text-align: center;font-size: 14px;font-family:新宋体;color: rgb(160,160,160)">为了方便您的互动交流<br>请您先登录或注册</p>
        <el-row style="text-align: center;height: 60px;">
          <router-link role="presentation" to="/login"> <el-button type="danger" plain >&nbsp;&nbsp;登录&nbsp;&nbsp;</el-button></router-link>
          <router-link role="presentation" to="/registe"> <el-button type="warning"  plain>&nbsp;&nbsp;注册&nbsp;&nbsp;</el-button></router-link>

        </el-row>


      </div>
<div class="col-xs-9">
      <el-carousel :interval="3000" height="350px">
        <el-carousel-item v-for="(work,index) in info" :key="index">
          <img v-bind:src="work.pice" class="img-responsive img-thumbnail">
        </el-carousel-item>
      </el-carousel>
</div>
    </div>
    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </h3>
    <h3 style="text-align: center">镜头之中，有一个凤凰花开的路口</h3>
    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </h3>
    <app-workskinds></app-workskinds>
    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </h3>
    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </h3>

    <img src="https://www.sonystyle.com.cn/mysony/acafe/images/new/u1.jpg" class="img-responsive" alt="">
    <div style="height: 120px">&nbsp;</div>
    <div v-for="work in info">
      <div class="col-sm-6" >
        <router-link role="presentation" to="/comment/1039" > <img :src="work.picc" alt="" class="img-responsive  img-thumbnail"></router-link>
        <br><br>
      </div>
    </div>
    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </h3>

    <h3 style="text-align: center;font-family:宋体 ;font-size: 24px">拍照，从选机开始</h3>
    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
    <br>
    <el-row class=" ">
      <div class="col-md-3" v-for="shop in info3">
        <div class="demo">
          <router-link :to="'/shops/'+shop.shopID">
            <figure class="imghvr-flip-diag-2" style="background:rgba(0,0,0,0.8);height: 85px"><img :src="shop.IMG1"
                                                                                                    alt="example-image" class="img-responsive">
              <figcaption style="text-align: center;">
                <span style="font-size: 12px;">{{shop.shopPara}}</span>
              </figcaption>
            </figure>
          </router-link>
          <span style="font-size: 18px;line-height: 50px">{{shop.shopName}}</span>
        </div>
      </div>
    </el-row>
    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
    <div class="go-top">
      <img  id="ding" src="../../../assets/ding.png" @click="goTop" alt="" ref="btn">
    </div>

  </div>
</template>
<script>


  import axios from 'axios'
  import workskinds from './workskinds'

  export default {
    name: "works",
    data() {
      return {
        isTop: true,
        timer: null,
        info: [],
        info3: []


      };
    },
    components: {
      'app-workskinds': workskinds,

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
      getdata() {
        let _this=this
        if (this.$store.state.user == '') {
          this.$message({
            showClose: true,
            message: '请先登录！！',
            type: 'warning'
          },

        );
          _this.$router.push({path: '/login'})
        }
        else {
          _this.$router.push({path: '/add'})
        }
      }


    },
    mounted() {
      let _this = this;
      axios.get('http://localhost:3000/getpic').then(function (result) {
        console.log('---');
        console.log(result.data)
        _this.info = result.data;
        console.log(_this.info);
      }, function (err) {
        console.log(err);
      });
      this.gethotgoods();
      this.needScroll();



    }


  }

</script>

<style scoped>
  @import '../../../../static/css/style.css';
  @import '../../../../static/css/imagehover.css';

  img {
    width: 1920px;
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

</style>
