<template>
  <div>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <a class="navbar-brand logo img-div" href="#" id="brand-img">
        <img src="../../assets/u19.png">
        </a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">购物车</a></li>
          <li><a href="#">个人中心</a></li>

        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">退出</a></li>

        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
    <!--中部页面-->

  </div>
</template>

<script>
    export default {
        name: "tsCar"
    }
</script>

<style  scoped>

 #brand-img{
 display: block;
   margin-top: -7px;
  transform: scale(0.3,0.2);

}
</style>
