<template>
  <div class="container">
    <div class="row">
     <div id="dv1" class="col-lg-5 col-md-6 col-sm-7 col-xs-9">
       <div id="d1">
         <img class="img-responsive" src="https://www.sonystyle.com.cn/content/dam/sonystyle/products/lenses/e_lens/sel400F28gm/product/img_sel400f28gm_w.jpg.thumb.537.537.png" alt="">
         <div class="cen">
           <div class="ylt">
             <img class="img-responsive" src="https://www.sonystyle.com.cn/content/dam/sonystyle/products/lenses/e_lens/sel400F28gm/product/img_sel400f28gm_w.jpg.thumb.537.537.png" alt="">
           </div>
           <div class="ylt">
             <img class="img-responsive" src="https://www.sonystyle.com.cn/content/dam/sonystyle/products/lenses/e_lens/sel400F28gm/product/img_sel400f28gm_w.jpg.thumb.537.537.png" alt="">
           </div>

         </div>

       </div>
       <span class="glyphicon glyphicon-chevron-right"></span>
       <span class="glyphicon glyphicon-chevron-left"></span>
     </div>
      <div id="dv2" class="col-lg-7 col-md-6 col-sm-5 col-xs-12 ">
        <div id="page1">
          <span id="sh2">SEL400F28GM 全画幅超远摄定焦G大师镜头 (FE 400mm F2.8 GM OSS)</span>
          <p>
            商品描述：全画幅超远摄定焦G大师镜头/内置两组新研发的XD线性马达，自动跟踪对焦性能提升约5倍*1/出色的光学设计和萤石等光学镜片的采用/轻量化设计, 平衡性更佳/具备全时DMF对焦功能
            推荐使用场景：体育、新闻、鸟类和野生动物</p>
        </div>
        <hr>
        <div id="shoping">
          <ul>
            <li>价格：15800</li>
            <li>规格：<input type="button" value="SEL400F28GM"></li>
            <li>颜色 <input type="color"></li>
            <li>数量 <input type="number" style="width: 50px"></li>
          </ul>
          <hr>
        </div>
        <div id="z1">
          <ul>
          <li> <input class="btn btn-primary but" type="button" value="立即购买"></li>
          <li>  <input  class="btn btn-default but" type="button" value="加入购物车"></li>
        </ul>


        </div>

      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "shoping"
  }

</script>

<style scoped>
  ul{
   list-style: none;
  }
  #z1 li{
    display: inline-block;
    width: 300px;
    height: 75px;
  }
  li{

    height: 50px;
    width: 200px;
  }
#dv1{
  position: relative;
  height: 600px;
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
  top: 85%;
}
  .glyphicon.glyphicon-chevron-left{
    font-size: 45px;
    color: #5bc0de;
    float: left;
    position: absolute;
    left: 5px;
    top: 85%;
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
</style>
