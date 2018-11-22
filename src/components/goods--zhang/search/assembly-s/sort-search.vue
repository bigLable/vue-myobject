<template>

  <div class="container row">
    <div id="d1" class="row">

      <div id="d2" class="col-lg-3 col-md-4 col-sm-5 col-xs-5">
        <span> <span style="font-size: 30px">检索结果</span>共找到 <span style="color: deepskyblue;font-size: 18px">{{user.length}}</span>个产品</span>

        <!--<form action="" class="form-inline" method="post" id="kane">-->
          <!--<span>价格：</span>-->
          <!--<input class=" textml form-control " v-model="name1" type="text" form="kane" placeholder="最小价格">~-->
          <!--<input class="textml form-control " v-model="name" type="text" form="kane" placeholder="最大价格">-->
          <!--<input class="btn btn-primary" type="button" form="kane" value="确认">-->
          <!--<input class="btn btn-primary " type="reset" form="kane" value="重置">-->
        <!--</form>-->

      </div>
      <div id="d3" class="col-lg-4 col-lg-offset-5 col-md-5 col-md-offset-3  col-sm-7 col-xs-7">
        <form action="" class="form-inline">
          <input type="button" @click="paratt" class="btn btn-default t-5" value="随机排序">
          <input type="button" @click="paraup" class="btn btn-default t-5" value="价格升序">
          <input type="button" @click="paradown" class="btn btn-default t-5" value="价格降序">
          <span style="display: inline-block; float: right;position: relative;top:-4px;"><img class="img-responsive" style="height: 50px" src="../../../../assets/kac.png" alt=""></span>
        </form>




      </div>
    </div>
    <div class="row text-center">

      <div v-for="dat in activitys" class=" animated pulse repudiv col-lg-3  col-md-3 col-sm-6 col-xs-6">

        <div class="bbb image-hover img-shadow-1 ">
          <router-link :to="'/shops/'+dat.ShopID">
            <div class="imgdiv center-block">
              <img v-if="type == 0"  class="img-responsive mme" :src="dat.shopImg" alt="" :id="dat.ShopID">
              <img v-else-if="type == 1"  class="img-responsive mme" :src="dat.shopImg2" alt="" :id="dat.ShopID">
            </div>
            <div>

              <h3>{{dat.shopName}}</h3>
              <p>{{dat.shopType}}</p>
              <p style="font-size: 18px;color: royalblue">RMB: <span style="font-size: 24px">{{dat.shopPrice}}.00</span>
              </p>
            </div>
          </router-link>
        </div>

      </div>

    </div>
    <div style="height: 50px">&nbsp;</div>
    <div class="col-xs-12"  style="text-align: center">
      <el-pagination
        small
        @current-change="change()"
        :current-page.sync="pageIndex"
        layout="prev, pager, next"
        :total="pageCount"
        :page-size = "pagesize">
      </el-pagination>
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
        name1: '',
        user: [],
        mydata: [],
        pageIndex: 1,
        pagesize: 12,  //每页条数
        pageCount:0,
        info:[],
        activitys:[],
        type:"0"

      };

    },
    computed:{
      myActData1(){
        return this.activitys;
      }
    },





    methods: {
      // shang:function(index){
      //   this.user.type=index;
      // },
      // xia:function(index){
      //   this.user.type=index;
      // },
      loadData() {
        this.activitys = [];
        let start = (this.pageIndex-1) * this.pagesize;
        let end = start + this.pagesize;
        // console.log(this.myActData[1]);
        if(end>=this.pageCount){
          end=this.pageCount
        }
        for (var i = start; i < end; i++) {
          this.activitys.push(this.user[i])
        }
      },
      change(){
        return this.loadData();
      },
      paratt(){
        let arr = [];
        for (let a = 0; a < this.activitys.length; a++) {
          arr[a] = this.activitys[a].shopPrice;
        }
        let quicksort = function (arr) {
          if (arr.length <= 1) {
            return arr;
          }
          let pivotIndex = Math.floor(arr.length / 3);
          let pivot = arr.splice(pivotIndex, 1)[0];
          let left = [];
          let right = [];

          for (let i = 0; i < arr.length; i++) {

              left.push(arr[i]);



          }
          return quicksort(left).concat([pivot], quicksort(right));
        };
        let result = quicksort(arr);
        let newArr=[];
        for(let i=0;i<result.length;i++){
          for(let j=0;j<this.activitys.length;j++){
            if(this.activitys[j].shopPrice==result[i]){
              newArr.push(this.activitys[j])
            }
          }
        }
        this.activitys=newArr;
        console.log(JSON.stringify(this.activitys));
      },
      // ==========================冒泡排序==============================
      paraup() {
        let arr = [];
        for (let a = 0; a < this.activitys.length; a++) {
          arr[a] = this.activitys[a].shopPrice;
        }
        let quicksort = function (arr) {
          if (arr.length <= 1) {
            return arr;
          }
          let pivotIndex = Math.floor(arr.length / 2);
          let pivot = arr.splice(pivotIndex, 1)[0];
          let left = [];
          let right = [];

          for (let i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
              left.push(arr[i]);
            } else {
              right.push(arr[i]);
            }
          }
          return quicksort(left).concat([pivot], quicksort(right));
        };
        let result = quicksort(arr);
        let newArr=[];
        for(let i=0;i<result.length;i++){
          for(let j=0;j<this.activitys.length;j++){
            if(this.activitys[j].shopPrice==result[i]){
              newArr.push(this.activitys[j])
            }
          }
        }
        this.activitys=newArr;
        console.log(JSON.stringify(this.activitys));
      },
      paradown() {
        let arr = [];
        for (let a = 0; a < this.activitys.length; a++) {
          arr[a] = this.activitys[a].shopPrice;
        }
        let quicksort = function (arr) {
          if (arr.length <= 1) {
            return arr;
          }
          let pivotIndex = Math.floor(arr.length / 2);
          let pivot = arr.splice(pivotIndex, 1)[0];
          let left = [];
          let right = [];

          for (let i = 0; i < arr.length; i++) {
            if (arr[i] > pivot) {
              left.push(arr[i]);
            } else {
              right.push(arr[i]);
            }
          }
          return quicksort(left).concat([pivot], quicksort(right));
        };
        let result = quicksort(arr);
        let newArr=[];
        for(let i=0;i<result.length;i++){
          for(let j=0;j<this.activitys.length;j++){
            if(this.activitys[j].shopPrice==result[i]){
              newArr.push(this.activitys[j])
            }
          }
        }
        this.activitys=newArr;
        console.log(JSON.stringify(result));

      },


      // fun(){
      //   this.$router.push({path:'/shops/'+dat.ShopID})
      // },

      // getData() {
      //   let _this = this
      //   axios.get('http://localhost:3000/shop/allshop').then(function (result) {
      //     console.log(result.data);
      //     _this.user = result.data;
      //     console.log(_this.user);
      //
      //   })
      // }, function(err) {
      //   console.log(err.msg)
      // },

    },
    mounted() {
    let _this=this;
      // this.getData();
      axios.get('http://localhost:3000/shop/allshop').then(function(result){
        console.log('---');
        console.log(result.data)
        _this.user = result.data;
        _this.pageCount=_this.user.length;
        // console.log(_this.pageCount)
        _this.loadData()
        console.log(_this.user);
      },function(err){
        console.log(err)

      })

    }
  }

</script>

<style scoped>
  img {
    height: 200px;
    position: relative;
    margin: 0 auto;
  }

  .repudiv {
    height: 400px;

  }

  .bbb:hover {
    border: 1px solid #26a8df;
    transform: scale(1.05);
    position: relative;
    top: -7px;
    box-shadow: none;
  }

  .bbb {

    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #cccccc;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2)
  }

  h3 {
    color: black;
    font-size: 22px;
  }

  p {
    font-size: 14px;
  }

  a {
    text-decoration: none;
  }

  #d1 {
    height: 60px;
    position: relative;
  }

  .textml {
    display: inline;
    width: 90px;
  }

  #cad {
    height: 60px;
    background: #26a8df;
    display: none;
  }
  .t-5{
    position: relative;
    top: 5px;
    left: 20px;

  }





  .img-shadow-1
  {
    transition:all .6s ease-in-out;

  }

  .img-shadow-1:hover
  {
    transition:all .4s ease-in-out;

  }
</style>
