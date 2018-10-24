<template>
    <div id="qqq"class="container">
      <div class="row">
        <div class="p90"></div>
        <div id="divstu">
          <ul>
            <form action="" id="forms"></form>
            <li><input name="fluit" form="forms" type="radio">全部（）</li>
            <li><input name="fluit" form="forms" type="radio">好评（）</li>
            <li><input name="fluit" form="forms" type="radio">中评（）</li>
            <li><input name="fluit" form="forms" type="radio">差评（）</li>
          </ul>
      </div>
        <div id="m1">
          <div class="bbq col-md-6 col-xs-6 col-lg-6">
            <img class="img-responsive img-circle" src="https://www.sonystyle.com.cn/etc/designs/sonystyle/images/p0.jpg" alt="">
            <p>用户名</p>
          </div>
          <div class="star col-md-6 col-xs-6 col-lg-6">
            <ul>
              <li>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                &nbsp;&nbsp;&nbsp;
                产品名称：崽种的照相机

              </li>
              <li>拍照非常清晰！</li>
              <li><img id="imge2" class="img-responsive" src="https://www.sonystyle.com.cn/content/dam/sonystyle/products/bravia/a9f/product/img_kd_a9f_b_0.jpg.thumb.537.537.png" alt=""></li>
            </ul>

          </div>

        </div>
        <hr>
      </div>
    </div>
</template>

<script>
    export default {
        name: "shopcomment"
    }
</script>

<style scoped>
  #divstu{
    background:#f7f7f7;
    height: 40px;
  }
 #qqq ul{
    list-style: none;
    position: relative;
    top: 10px;
  }
  #qqq li{
    display: inline-block;
    width: 140px;
    height: 40px;
  }
.p90{
  height: 70px;
}
  .bbq{
    margin-top: 20px;
    width: 100px;
  }
  .bbq p{
    text-align:center;
    font-size: 16px;

  }
  .glyphicon.glyphicon-star{
    color: orangered;
    font-size: 20px;
  }
  .star li{
    width: 500px;
    height: 30px;
  }
  #m1{
    height: 200px;
  }
  #imge2{
    width: 100px;
  }
</style>
