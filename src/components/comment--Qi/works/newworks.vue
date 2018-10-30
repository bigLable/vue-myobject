<template>
  <div>
    <div style="height: 80px">&nbsp;</div>
  <div class="pic" v-for="work in info">
    <div class="col-md-3 col-sm-6">
      <div class="box">
        <img :src="work.worksPic" class="img-thumbnail">
        <div class="boxContent">
          <h3 class="title">{{work.worksauthor}}作品</h3>
          <span class="post">  {{work.worksDescribe}}</span>

          <router-link role="presentation" :to="'/comment/'+work.worksId">Read More</router-link>
        </div>
      </div>
    </div>
  </div>
  <div style="height: 50px">&nbsp;</div>
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
  .block{
    padding-left: 40%;
  }
  img{
    height: 300px;
  }
  .box{
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 5px #555;
  }
  .box img{
    width: 100%;
    height: auto;
    transition: all 0.5s ease 0s;
  }
  .box:hover img{
    opacity: 0.3;
  }
  .box .boxContent{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 30px;
    background: rgba(0, 0, 0, 0.75);
    border: 4px solid rgba(255, 255, 255, 0.10);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    z-index: 1;
    transition: all 0.5s ease 0s;
  }
  .box:hover .boxContent{
    -webkit-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }
  .box .title{
    display: inline-block;
    font-size: 18px;
    color: #fff;
    line-height: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin: 0;
  }
  .box .post{
    display: block;
    font-size: 12px;
    color: #fff;
    text-transform: capitalize;
    padding: 8px 0 15px;
  }
  .box .description{
    font-size: 13px;
    font-style: italic;
    line-height: 20px;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 990px){
    .box{ margin-bottom: 20px; }
  }
</style>
