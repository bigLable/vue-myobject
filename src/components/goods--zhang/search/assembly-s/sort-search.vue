<template>
<div class="container">
  <div class="row text-center" >

    <div v-for="dat in user" class=" repudiv col-lg-3 col-md-3 col-sm-6 col-xs-6" >

    <div class="bbb">
      <router-link :to="'/shops/'+dat.ShopID">
      <div class="imgdiv center-block">
        <img class="img-responsive" :src="dat.shopImg" alt="" :id="dat.ShopID">
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
    left: 10px;
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
</style>
