<template>
  <div>

    <div class="pic" v-for="work in info">
      <div class="col-md-3 col-sm-6">
        <div class="box">
          <img :src="work.worksPic" class="img-thumbnail">
          <div class="box-content">
            <h3 class="title">{{work.worksauthor}}作品</h3>
            <p class="description">
              {{work.worksDescribe}}
            </p>
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
    name: "recworks",
    data(){
      return{
        info:[],

      }
    }
    , mounted(){
      let _this = this;
      axios.get('http://localhost:3000/works/recworks').then(function(result){
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

  .box{
    background: #fff;
    box-shadow: 0 0 5px #bababa;
    text-align: center;
    overflow: hidden;
    position: relative;
  }
  .box img{
    width: 100%;
    height: auto;
    transition: all 0.4s ease-in-out 0.2s;
  }
  .box:hover img{
    transform: scale(0);
    transition-delay: 0s;
  }
  .box .box-content{
    width: 100%;
    height: 100%;
    background: #425770;
    color: #fff;
    padding: 30px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: scale(0) rotate(-180deg);
    transition: all 0.4s ease-in 0s;
  }
  .box:hover .box-content{
    opacity: 1;
    transform: scale(1) rotate(0deg);
    transition-delay: 0.2s;
  }
  .box .title{
    font-size: 20px;
    font-weight: 800;
    border-bottom: 1px solid #334a65;
    padding-bottom: 10px;
    margin-top: 0;
    text-transform: capitalize;
  }
  .box .description{
    font-size: 13px;
    font-style: italic;
    line-height: 20px;
    margin-bottom: 30px;
  }
  .box .read{
    display: inline-block;
    font-size: 14px;
    color: #fff;
    background: #132d4d;
    padding: 7px 20px;
    text-transform: capitalize;
  }
  @media only screen and (max-width: 990px){
    .box{ margin-bottom: 20px; }
  }
  @media only screen and (max-width: 479px){
    .box .box-content{ padding: 20px; }
  }
  @media only screen and (max-width: 359px){
    .box .box-content{ padding: 10px; }
  }
</style>
