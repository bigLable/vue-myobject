<template>
  <div>
    <div style="height: 80px">&nbsp;</div>
    <div v-for="work in info" style="margin: 0 auto">

      <div class="m-artlist m-artlist-2  col-md-3 col-sm-6">
        <div class="item">
          <div class="img " >

            <router-link role="presentation" :to="'/comment/'+work.worksId" class="img-thumbnail">
				<span class="bor">
				</span>
              <span class="bor">
				</span>
              <span class="bor">
				</span>
              <span class="bor">
				</span>
              <img :src="work.worksPic" >

            </router-link>
          </div>
          <br>
          <h4 class="title">简介:{{work.worksDescribe}}</h4>
          <p class="description">
            <img src="../../../assets/user.png" alt="" class="img-responsive" style="width: 20px;height: 20px;display: inline">&nbsp;{{work.worksauthor}}作品
          </p>
          <br>
          <br>
        </div>

      </div>
  </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "newworks",
    data(){
      return{
        info:[],

      }
    }
    , mounted(){
      let _this = this;
      axios.get('http://localhost:3000/works/newworks').then(function(result){
        console.log('---');
        console.log(result.data)
        _this.info = result.data;
        console.log(_this.info);
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
</style>
