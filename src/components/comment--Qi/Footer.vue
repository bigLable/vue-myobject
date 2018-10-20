<template>
  <div  >
    <div class="line "></div>
    <nav class="navbar navbar navbar-inverse">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->


        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>  <router-link role="presentation" to="/search"><img src="../../assets/u19.png" alt=""></router-link></li>
            <li class="">
              <span>2018-2028中国版权所有</span>
            </li>
            <li>
              <a href="">责任声明</a>

            </li>
            <li>
              <a href="">联系我们</a>
            </li>
            <li>
              <a href="">所有者声明</a>

            </li>

          </ul>

        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .line{
    clear: both;
  }
  img {
    width: 70px;
    height: 40px;
  }
  span  {
    font-size: 15px;
    color: #b8b8b8;
    margin-left: 20px;
    line-height: 50px;
  }
  a {

    color: #ffffff;
    text-decoration: none;
    margin-left: 30px;
  }
  a:hover{
    color: #a3a3a3;
  }

</style>
