<template>
  <div style="margin: 0;padding: 0" class="container-fluid">
    <!--===============================================-->
    <!--头部-->
  <div class="container">
    <div id="px" class="row">
      <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
        <p>咔嚓在线商城首页>{{user.shopType}}>{{user.shopName}}</p>
      </div>
    </div>
    <!--=====================================================-->
    <!--详情-->
    <div class="row">
     <div id="dv1" class="col-lg-6 col-md-6 col-sm-7 col-xs-11">
       <div  id="d1" >
         <img id="imge" style="margin: 0 auto" class="img-responsive" :src="user.shopImg" alt="">

         <div class="cen">
           <div @click="img1" class="ylt">
             <img  class="img-responsive" :src="user.shopImg" alt="">
           </div>
           <div @click="img1" class="ylt1">
             <img  class="img-responsive" :src="user.shopImg2" alt="">
           </div>
             <div @click ="img2" @mousedown="pa1" class="ylt">
               <img class="img-responsive" :src="user.shopImg3" alt="">
             </div>


         </div>

       </div>
       <span class="glyphicon glyphicon-chevron-right"></span>
       <span class="glyphicon glyphicon-chevron-left"></span>
     </div>
      <!--====================左侧img========================-->
      <div id="dv2" class="col-lg-6 col-md-6 col-sm-5 col-xs-12 ">
        <div id="page1">
          <span id="sh2">{{user.shopPara}}</span>
          <p>产品详情：{{user.shopifo}}</p>
        </div>
        <hr>
        <div id="shoping">
          <ul>
            <li style="width: 300px">价格：<span style="color:cornflowerblue;font-size: 24px;">RMB {{user.shopPrice}}.00</span></li>
            <li>规格：<input type="button" class="btn btn-default" id="bt2" :value="user.shopName"></li>
            <li>颜色：<input type="color" style="width: 30px;background: white;height: 30px;"></li>
            <li>库存：<span style="color: cornflowerblue ;font-size:22px">{{user.shopKC}}台</span></li>
          </ul>
          <hr>
        </div>
        <div id="z1">
          <ul>
          <li> <input class="btn btn-primary but cornflowerblue " @click="gwc" type="button" value="加入购物车"></li>
          <li>  <input  class="btn btn-default but" type="button" value="加入收藏"></li>
        </ul>


        </div>
<!--===================================右侧=======================================-->
      </div>
    </div>

  </div>
<!--========================================================================-->
    <!--腰部-->
    <div id="divsf" class="row">
      <div  class="container">
        <div id="tohard" class="col-xs-3 col-sm-4 col-md-6 col-lg-7">
          <span>{{user.shopName}}</span>
        </div>
        <div class="col-xs-9 col-sm-8 col-md-6 col-lg-5"   >
          <ul>
            <li  id="lii" @click="change(3)"><span>评论</span></li>

            <li   @click="change(2)"><span>详细参数</span></li>

            <li @click="change(1)"><span>概述</span></li>
          </ul>
        </div>
      </div>

    </div>
<!--======================================================-->
    <!--详情图-->
  <div class="row"  v-show="mura == 1" >
    <img  class="img-responsive" :src="user.IMG1" alt="">
    <img  class="img-responsive" :src="user.IMG2" alt="">
    <img  class="img-responsive" :src="user.IMG3" alt="">
  </div>
    <!--===========================================================-->
    <!--详细信息-->
    <div class="container" v-show="mura == 2">
      <div id="info" class="row">
        <div id="bigt">
          主要规格
        </div>
        <br/>
        <hr>
        <div class="c100"></div>
        <div class="dkdg">
          影像传感器
      </div>
        <div class="right">
          <table>
            <tr><td>有效像素 </td><td>约2010万有效像素</td></tr>
          </table>

        </div>
        <div class="c100"></div>
        <hr>
        <!--=================================-->
        <div class="dkdg">
          液晶屏
        </div>
        <div class="right">
          <table>
            <tr><td>液晶屏类型</td><td>3.0” Xtra Fine可折叠液晶屏（约123 万像素）</td></tr>

          </table>

        </div>
        <div class="c100"></div>
        <hr>
        <!--=================================-->
        <div class="dkdg">
          取景器
        </div>
        <div class="right">
          <table>
            <tr><td>取景器类型</td><td>XGA OLED电子取景器</td></tr>
            <tr><td>取景器总像素</td><td>	约235万像素</td></tr>
          </table>

        </div>
        <div class="c100"></div>
        <hr>

        <div class="dkdg">
          液晶屏
        </div>
        <div class="right">
          <table>
            <tr><td>液晶屏类型</td><td>3.0” Xtra Fine可折叠液晶屏（约123 万像素）</td></tr>

          </table>

        </div>
        <div class="c100"></div>
        <hr>
        <!--=========================================-->
        <div class="dkdg">
          记录
    </div>
      <div class="right">
        <table>
          <tr><td>兼容存储卡</td><td>记忆棒：Memory Stick Duo™/ Memory Stick PRO Duo™/ Memory Stick PRO Duo™（高速）/ Memory Stick PRO-HG Duo™/ SD 存储卡/SDHC存储卡/SDXC存储卡</td></tr>
          <tr><td>静态影像尺寸</td><td>[3:2] 20M（5472×3648）/10M（3888×2592）/5.0M（2736×1824）
            [16:9] 17M（5472×3080）/7.5M（3648×2056）/4.2M（2720×1528）
            [4:3] 18M（4864×3648）/10M（3648×2736）/5.0M（2592×1944）/VGA
            [1:1] 13M（3648×3648）/6.5M（2544×2544）/3.7M（1920×1920）
            [扫描全景]宽尺寸（12416×1856/5536×2160），标准尺寸（8192×1856/3872×2160）
            [在拍摄动态影像的同时拍摄静态影像][16:9] 17M（5472×3080）/7.5M（3648×2056）/4.2M（2720×1528）</td></tr>
          <tr><td>动态影像尺寸</td><td>AVCHD:28M PS（1920×1080，50p）/24M FX（1920×1080，50i）/17M FH（1920×1080，50i）/24M FX（1920×1080，25p）/17M FH（1920×1080，25p）/
            XAVC S 4K:25p 100M（3840x2160，25p）/25p 60M（3840x2160，25p）/
            XAVC S HD:50p 50M（1920x1080，50p）/25p 50M（1920x1080，25p）/100P 100M（1920x1080，100p）/100P 60M（1920x1080，100p）/
            MP4:28M（1920x1080，50p）/16M（1920x1080，25p）/6M（1280x720，25p）/</td></tr>
        </table>

      </div>
      <div class="c100"></div>
      <hr>
        <div class="dkdg">
          其他
        </div>
        <div class="right">
          <table>
            <tr><td>外形尺寸（WxHxD）</td><td>	132.5 x 94.0 x 145.0mm（CIPA标准）*14
              132.5 x 94.0 x 127.4mm (从镜头前端到液晶屏)</td></tr>
            <tr><td>重量</td><td>约1095g（含电池与记忆棒）/ 约1051g（仅主机）（CIPA标准）*14
            </td></tr>
          </table>

        </div>
        <div class="c100"></div>
        <hr>
    </div>

    </div>
    <!--==============================================================-->
    <div id="qqq" v-show="mura == 3" class="container">
      <div class="row">
        <div class="p90"></div>
        <div id="divstu">
          <ul>
            <form action="" id="forms"></form>
            <li><input name="fluit" form="forms" type="radio">全部（）</li>
            <li><input name="fluit" form="forms" type="radio">好评（）</li>
            <li><input name="fluit" form="forms" type="radio">中评（）</li>
            <li><input name="fluit" form="forms" type="radio">差评（）</li>
          </ul>
        </div>
        <div id="m1">
          <div class="bbq col-md-6 col-xs-6 col-lg-6">
            <img class="img-responsive img-circle" src="https://www.sonystyle.com.cn/etc/designs/sonystyle/images/p0.jpg" alt="">
            <p>用户名</p>
          </div>
          <div class="star col-md-6 col-xs-6 col-lg-6">
            <ul>
              <li>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
              </li>
              <li>产品名称：{{user.shopName}}</li>
              <br/>

              <li>拍照非常清晰！</li>
              <br/>
              <li><img id="imge2" class="img-responsive" src="https://www.sonystyle.com.cn/content/dam/sonystyle/products/bravia/a9f/product/img_kd_a9f_b_0.jpg.thumb.537.537.png" alt=""></li>
            </ul>

          </div>

        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "shoping",
    data() {
      return {
        mura:1,
        name: '',
        user: [],
      };

    },
    methods: {
      change(index){
        this.mura=index
      },
      gwc(){
//         let  _this=this;
//         axios.get('http://localhost:3000/shoppingCart/getAllcar?ShopID='+`${this.$route.params.id}`).then(function (result) {
//           console.log(result.data);
//           _this.user = result.data[0];
//           console.log(_this.user);
// alert("添加购物车成功！")
//         }),function(err) {
//           console.log(err.msg)
//         }
        let shopid='';

        shopid=localStorage.getItem('shopid')+','+this.$route.params.id
        localStorage.setItem('shopid',shopid)
        alert('添加购物车成功！')
        alert(shopid)
      },

      getData(){
      let  _this=this;
        axios.get('http://localhost:3000/shop/shopGetid?id='+`${this.$route.params.id}`).then(function (result) {
          console.log(result.data);
          _this.user = result.data[0];
          console.log(_this.user);

        })
      }, function(err) {
        console.log(err.msg)
      },
      img1() {

      },
      img2() {
        alert('我被点击了')
      },
      pa1() {

      }
    },
    mounted(){
      $(document).ready(function() {
        $("#tohard").click(function () {
          $("html, body").animate({
            scrollTop: $("#px").offset().top
          }, {duration: 500, easing: "swing"});
          return false;
        });
      });
      $(function () {

      });
      $(window).scroll(function (){
      let wintop = document.documentElement.scrollTop || document.body.scrollTop;
      if (wintop>=800){
        $("#divsf").addClass('fi')
      }else{
        $("#divsf").removeClass('fi')
      }
    });
      this.getData();
      console.log('id value'+this.$route.params.id)

    }




  }

</script>

<style scoped>
  ul{
   list-style: none;
  }
  #z1 li{
    display: inline-block;
    width: 255px;
    height: 75px;
  }
  li{

    height: 50px;
    width: 200px;
  }
#dv1{
  position: relative;
  height: 670px;
}
#dv2{
  height: 600px;
}
  div #d1{
    /*border:1px solid #cccccc;*/


  }
.glyphicon.glyphicon-chevron-right{
  font-size: 45px;
  color: #5bc0de;
  float: right;
  position: absolute;
  right: 5px;
  top: 87%;

}
  .glyphicon.glyphicon-chevron-left{
    font-size: 45px;
    color: #5bc0de;
    float: left;
    position: absolute;
    left: 5px;
    top: 87%;
  }
  .ylt:first-child  {
     display: inline-block;
     width: 100px;
     position: absolute;
     bottom: 15px;
     left: 65px;

   }

.ylt:last-child  {
  display: inline-block;
  width: 100px;
  position: absolute;
  bottom: 15px;
  left: 180px;

}
  .ylt1{
    display: inline-block;
    width: 100px;
    position: absolute;
    bottom: 15px;
    left: 295px;
  }
  #d1 img {
    border: 1px solid #cccccc;
  }
  .cen{

  }
  #sh2{
    font-size: 22px;
    font-weight: 500;
  }
  p{
    font-size: 14px;
    color: grey;
  }
  #shoping{
    font-size: 14px;
    color: gray;
  }
  .but{
    width: 250px;
    height: 60px;
    font-size: 20px;
  }
  .btn:hover{
    background: cornflowerblue;
    color: white;
  }
  .btn:active{
    background: cornflowerblue;
    color: white;
  }
  .btn:focus{
    background: cornflowerblue;
    color: white;
  }
  #px{
    height: 50px;

  }
  #px p{
    font-size: 16px;
    color: darkgray;
    position: relative;
    top: 10px;
  }
  /*=====================================*/
  /*腰*/
  #divsf{
    height: 70px;
    border: 1px solid lightgray;
  }
  #divsf ul{
    list-style: none;
  }
  #divsf li{
    font-size: 18px;
    width: 120px;
    height: 40px;
    display: inline-block;
    text-align: center;
    border-left: #cccccc 1px solid;
    position: relative;
    bottom: -15px;
    float: right;

  }
  #divsf li span{
    font-size: 18px;
    position: relative;
    top: 10px;
  }
  #divsf li:hover{
    color: dodgerblue;

  }
  #divsf span{
    font-size: 25px;
    position: relative;
    top: 15px;
  }
 .fi {
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    width: 100%;
  }
/*=========================================================*/
  /*详细信息*/
  #bigt{
    width: 150px;
    height: 45px;
    border-left:cornflowerblue 15px solid;
    font-size: 25px;
    font-weight: 500;
    color: gray;
    text-align: center;
    position: relative;
    top: 20px;
    padding-top: 5px;


  }
  #info hr{
    border: lightgray 1px solid;
  }
  #info .c100{
    height: 20px;
  }
  #info .dkdg{
    height: 30px;
    width: 200px;
    font-size: 18px;
    color: #cccccc;
    float: left;
  }
  #info .right{

  }
  #info td{
    width: 220px;
    height: 40px;
  }
  /*============================================================*/
  /*评论*/
  #divstu{
    background:#f7f7f7;
    height: 40px;
  }
  #qqq ul{
    list-style: none;
    position: relative;
    top: 10px;
  }
  #qqq li{
    display: inline-block;
    width: 160px;
    height: 30px;
  }
  .p90{
    height: 70px;
  }
  .bbq{
    margin-top: 20px;
    width: 100px;
  }
  .bbq p{
    text-align:center;
    font-size: 16px;

  }
  .glyphicon.glyphicon-star{
    color: orangered;
    font-size: 20px;
  }
  .star li{
    width: 500px;
    height: 30px;
  }
  #m1{
    height: 200px;
  }
  #imge2{
    width: 100px;
  }
</style>

