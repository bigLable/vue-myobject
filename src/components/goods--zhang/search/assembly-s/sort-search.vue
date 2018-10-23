<template>

<div class="container">
  <div  id="d1" class="row">
    <div id="d2" class="col-lg-3 col-md-4 col-sm-5 col-xs-5">
      <form action="" class="form-inline">
        <input type="button" class="btn btn-default" value="默认排序">
        <input type="button" class="btn btn-default" value="价格升序">
        <input type="button" class="btn btn-default" value="价格降序">
      </form>


    </div>
    <div id="d3" class="col-lg-4 col-lg-offset-5 col-md-5 col-md-offset-3  col-sm-7 col-xs-7">


      <form action="" class="form-inline" method="post" id="kane">
        <span>价格：</span>
        <input  class=" textml form-control " v-model="name1" type="text" form="kane" placeholder="最小价格">~
        <input  class="textml form-control " v-model="name" type="text" form="kane" placeholder="最大价格">
        <input   class="btn btn-primary" type="button" form="kane" value="确认">
        <input  class="btn btn-primary " type="reset" form="kane" value="重置">
      </form>


    </div>
  </div>
  <div class="row text-center" >

    <div v-for="dat in user" class=" repudiv col-lg-3 col-md-3 col-sm-6 col-xs-6" >

    <div class="bbb">
      <router-link :to="'/shops/'+dat.ShopID">
      <div class="imgdiv center-block">
        <img class="img-responsive mme"  :src="dat.shopImg" alt="" :id="dat.ShopID">
      </div>
      <div>

        <h3>{{dat.shopName}}</h3>

        <p style="color: black">类型: <span style="font-size: 15px;">{{dat.shopType}}</span></p>
        <p style="font-size: 18px;color: royalblue">RMB:{{dat.shopPrice}}.00</p>
      </div> </router-link>
    </div>
  </div>

  </div>
</div>

</template>

<script>
import axios from 'axios'
    export default {
      name: "sort-search",
      data() {
        return {
          name: '',
          name1:'',
          user: [],
        };

      },
      methods: {
        // fun(){
        //   this.$router.push({path:'/shops/'+dat.ShopID})
        // },

        getData() {
          let _this = this
          axios.get('http://localhost:3000/shop/allshop').then(function (result) {
            console.log(result.data);
            _this.user = result.data;
            console.log(_this.user);

          })
        }, function(err) {
          console.log(err.msg)
        },

      }, mounted() {
        this.getData()

      }
    }

</script>

<style scoped>
  img{
    height: 200px;
    position:relative;
    margin: 0 auto;
  }
  .repudiv{
    height: 400px;
  }
  .bbb{
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #cccccc;
  }
  h3{
    color: royalblue;
    font-size: 22px;
  }
  p{
    font-size: 14px;
  }
  a{
    text-decoration: none;
  }
  #d1{
    height: 90px;
    position: relative;
  }
  .textml{
    display: inline;
    width: 90px;
  }
</style>
