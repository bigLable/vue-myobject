<template>
  <div class="container">
    <div id="px" class="row">
      <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
        <p>咔嚓在线商城首页>{{user.shopType}}>{{user.shopName}}</p>
      </div>
    </div>
    <div class="row">
     <div id="dv1" class="col-lg-6 col-md-6 col-sm-7 col-xs-11">
       <div  id="d1">
         <img id="imge" class="img-responsive" :src="user.shopImg" alt="">

         <div class="cen">
           <div @click="img1" class="ylt">
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
        name: '',
        user: [],
      };

    },
    methods: {
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
      this.getData()
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
     left: 50px;

   }
.ylt:last-child  {
  display: inline-block;
  width: 100px;
  position: absolute;
  bottom: 15px;
  left: 160px;

}
  img {
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
</style>
