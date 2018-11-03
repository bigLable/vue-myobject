<template>
  <div>
    <div style="height: 80px">&nbsp;</div>
    <div v-for="(activity,index) in myActData1" :key="index" style="margin: 0 auto">

      <div class="m-artlist m-artlist-2  col-md-3 col-sm-6">
        <div class="item">
          <div class="img " >

            <router-link role="presentation" :to="'/comment/'+activity.worksId" class="img-thumbnail">
				<span class="bor">
				</span>
              <span class="bor">
				</span>
              <span class="bor">
				</span>
              <span class="bor">
				</span>
              <img :src="activity.worksPic" >

            </router-link>
          </div>
          <br>
          <h4 class="title">简介:{{activity.worksDescribe}}</h4>
          <p class="description">
            <img src="../../../assets/user.png" alt="" class="img-responsive" style="width: 20px;height: 20px;display: inline">&nbsp;{{activity.worksauthor}}作品
          </p>
          <br>
          <br>
        </div>

      </div>

    </div>



    <!--<div class="pic " v-for="work in info">-->
    <!--<div class="  col-md-3 col-sm-6">-->
    <!--<div class="box">-->
    <!--<img :src="work.worksPic" class="img-thumbnail">-->
    <!--<div class="box-content">-->
    <!--<h3 class="title">{{work.worksauthor}}作品</h3>-->
    <!--<p class="description">-->
    <!--{{work.worksDescribe}}-->
    <!--</p>-->
    <!--<router-link role="presentation" :to="'/comment/'+work.worksId">Read More</router-link>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <div style="height: 50px">&nbsp;</div>
    <div class="col-xs-12" style="text-align: center">
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
    name: "newworks",
    data(){
      return{
        mydata: [],
        pageIndex: 1,
        pagesize: 12,  //每页条数
        pageCount:0,
        info:[],
        activitys:[],

      }
    },
    computed:{
      myActData1(){
        return this.activitys;
      }
    },
    methods:{
      loadData() {
        this.activitys = [];
        let start = (this.pageIndex-1) * this.pagesize;
        let end = start + this.pagesize;
        // console.log(this.myActData[1]);
        if(end>=this.pageCount){
          end=this.pageCount
        }
        for (var i = start; i < end; i++) {
          this.activitys.push(this.myActData[i])
        }
      },
      change(){
        return this.loadData();
      },

    }
    , mounted(){
      let _this = this;
      axios.get('http://localhost:3000/works/newworks').then(function(result){
        console.log('---');
        console.log(result.data)
        _this.myActData = result.data;
        _this.pageCount=_this.myActData.length;
        // console.log(_this.pageCount)
        _this.loadData()
        console.log(_this.myActData);
      },function(err){
        console.log(err)

      })
    }
  }
</script>

<style scoped>
  .m-artlist {

  }

  .m-artlist-2 img, .m-artlist-2 .bor, .m-artlist-2 a, .m-slbanner .prev a, .m-slbanner .next a {
    transition:all 0.3s ease 0s;
  }

  .m-artlist .item {
    float:left;
    width:262px;
    margin:0px 30px 0px 0px;
  }
  h4{
    position:relative;
    left:45px;
  }
  p{
    position:relative;
    left:45px;
    color: rgba(120, 120, 120, 0.91);
    font-size: 13px;
  }
  .m-artlist .img {
    position:relative;
    height:262px;
    left:45px;
  }

  .m-artlist .img a, .m-artlist .img img, .m-artlist .bor, .m-artlist-2 .imgbg {
    position:absolute;
    left:0px;
    top:0px;
    width:100%;
    height:100%;
  }

  .m-artlist .bor {
    width:240px;
    height:240px;
    border:10px solid rgb(0, 0, 0);
    opacity:0;
  }

  .m-artlist-1 .bor:nth-child(2), .m-artlist-1 .bor:nth-child(3), .m-artlist-1 .bor:nth-child(4) {
    display:none;
  }

  .m-artlist-2 .img {
    height:176px;
  }

  .m-artlist-2 .bor {
    width:258px;
    height:174px;
    border:1px solid #ccc;
    background:none repeat scroll 0% 0% rgb(255, 255, 255);
    opacity:1;
  }

  .m-artlist-2 .bor:first-child {
    left:8px;
    top:8px;
  }

  .m-artlist-2 .bor:nth-child(2) {
    left:6px;
    top:6px;
  }

  .m-artlist-2 .bor:nth-child(3) {
    left:4px;
    top:4px;
  }

  .m-artlist-2 .bor:nth-child(4) {
    left:2px;
    top:2px;
  }

  .m-artlist-2 .txt {
    margin-top:10px;
  }

  .m-artlist-2 a:hover img {
    -moz-transform:rotate(-1deg);
    -webkit-transform:rotate(-1deg);
    -o-transform:rotate(-1deg);
    -ms-transform:rotate(-1deg);
    transform:rotate(-1deg);
  }

  .m-artlist-2 a:hover .bor:first-child {
    -moz-transform:rotate(20deg);
    -webkit-transform:rotate(20deg);
    -o-transform:rotate(20deg);
    -ms-transform:rotate(20deg);
    transform:rotate(20deg);
  }

  .m-artlist-2 a:hover .bor:nth-child(2) {
    -moz-transform:rotate(1deg);
    -webkit-transform:rotate(1deg);
    -o-transform:rotate(1deg);
    -ms-transform:rotate(1deg);
    transform:rotate(1deg);
  }

  .m-artlist-2 a:hover .bor:nth-child(3) {
    -moz-transform:rotate(-1deg);
    -webkit-transform:rotate(-1deg);
    -o-transform:rotate(-1deg);
    -ms-transform:rotate(-1deg);
    transform:rotate(-1deg);
  }

  .m-artlist-2 a:hover .bor:nth-child(4) {
    -moz-transform:rotate(-5deg);
    -webkit-transform:rotate(-5deg);
    -o-transform:rotate(-5deg);
    -ms-transform:rotate(-5deg);
    transform:rotate(-5deg);
  }
  /*.box{*/
  /*background: #fff;*/
  /*box-shadow: 0 0 5px #bababa;*/
  /*text-align: center;*/
  /*overflow: hidden;*/
  /*position: relative;*/
  /*}*/
  /*.box img{*/
  /*width: 100%;*/
  /*height: auto;*/
  /*transition: all 0.4s ease-in-out 0.2s;*/
  /*}*/
  /*.box:hover img{*/
  /*transform: scale(0);*/
  /*transition-delay: 0s;*/
  /*}*/
  /*.box .box-content{*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*background: #425770;*/
  /*color: #fff;*/
  /*padding: 30px;*/
  /*position: absolute;*/
  /*top: 0;*/
  /*left: 0;*/
  /*opacity: 0;*/
  /*transform: scale(0) rotate(-180deg);*/
  /*transition: all 0.4s ease-in 0s;*/
  /*}*/
  /*.box:hover .box-content{*/
  /*opacity: 1;*/
  /*transform: scale(1) rotate(0deg);*/
  /*transition-delay: 0.2s;*/
  /*}*/
  /*.box .title{*/
  /*font-size: 20px;*/
  /*font-weight: 800;*/
  /*border-bottom: 1px solid #334a65;*/
  /*padding-bottom: 10px;*/
  /*margin-top: 0;*/
  /*text-transform: capitalize;*/
  /*}*/
  /*.box .description{*/
  /*font-size: 13px;*/
  /*font-style: italic;*/
  /*line-height: 20px;*/
  /*margin-bottom: 30px;*/
  /*}*/
  /*.box .read{*/
  /*display: inline-block;*/
  /*font-size: 14px;*/
  /*color: #fff;*/
  /*background: #132d4d;*/
  /*padding: 7px 20px;*/
  /*text-transform: capitalize;*/
  /*}*/
  /*@media only screen and (max-width: 990px){*/
  /*.box{ margin-bottom: 20px; }*/
  /*}*/
  /*@media only screen and (max-width: 479px){*/
  /*.box .box-content{ padding: 20px; }*/
  /*}*/
  /*@media only screen and (max-width: 359px){*/
  /*.box .box-content{ padding: 10px; }*/
  /*}*/
</style>
