<template>
  <div id="divsf" class="row">
    <div  class="container">
      <div class="col-xs-3 col-sm-4 col-md-6 col-lg-7">
        <span>相机型号</span>
      </div>
      <div class="col-xs-9 col-sm-8 col-md-6 col-lg-5"   >
        <ul>
          <li @click="shopimg" id="lii">概述</li>

          <li @click="shopinfo">详细参数</li>

          <li @click="shopcomment" >评论</li>
          <li><input type="button" class="btn btn-primary"  value="加入收藏"></li>
        </ul>
      </div>
    </div>

  </div>






</template>


<script>
  export default {
    mounted(){
      // $(function () {
      //   $('#lii').click()
      // });
      $(window).scroll(function (){
        let wintop = document.documentElement.scrollTop || document.body.scrollTop;
        if (wintop>=800){
          $("#divsf").addClass('fi')
        }else{
          $("#divsf").removeClass('fi')
        }
      });

    },
        name: "applist",
      components:{

      },
      methods:{
        shopimg(){
          this.$router.push({path:'/shops/:id/shopimgs'})
        },
          shopinfo(){
            this.$router.push({path:'/shops/:id/shopinfo'})
          },
        shopcomment(){
          this.$router.push({path:'/shops/:id/shopcomment'})
        },

      },


    }
</script>


<style scoped>
  #divsf{
    height: 70px;
    border: 1px solid lightgray;
  }
  #divsf ul{
    list-style: none;
  }
  #divsf li{
    font-size: 18px;
    width: 90px;
    height: 30px;
    display: inline-block;
    text-align: center;
    border-left: #cccccc 1px solid;
    position: relative;
    bottom: -15px;

  }
  #divsf li:hover{
    color: dodgerblue;

  }
  #divsf span{
    font-size: 25px;
    position: relative;
    top: 15px;
  }
  #divsf .fi{
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    width: 100%;

  }
  

</style>
