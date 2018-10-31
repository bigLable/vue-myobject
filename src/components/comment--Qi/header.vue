<template>
  <div>

    <nav class="navbar navbar navbar-inverse">
    <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
    <span class="sr-only"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    </button>
    <div>
    <router-link role="presentation" class="navbar-brand" to="/"><img src="../../assets/kaca1.png" alt=""
    class="img-responsive">
    </router-link>
    </div>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <div class="col-sm-4">
      <div class=" nav2">
        <div class="one"><router-link role="presentation" to="/search"><a>商品列表</a></router-link></div>
        <div class="two"><router-link role="presentation" to="/search"><a>商品列表</a></router-link></div>
      </div>
      <div class="nav2">
        <div class="one"><router-link role="presentation" to="/works"><a>摄影展示</a></router-link></div>
        <div class="two"><router-link role="presentation" to="/works"><a>摄影展示</a></router-link></div>
      </div>
      <div class="nav2">
        <div class="one"><router-link role="presentation" to="/about"><a>关于我们</a></router-link></div>
        <div class="two"><router-link role="presentation" to="/about"><a>关于我们</a></router-link></div>
      </div>
      <div class="nav2">
        <div class="one"><router-link role="presentation" to="/repair"><a>售后服务</a></router-link></div>
        <div class="two"><router-link role="presentation" to="/repair"><a>售后服务</a></router-link></div>
      </div>
    <!--<ul class="nav navbar-nav  ">-->
    <!---->
    <!--<li>-->
    <!--<router-link role="presentation" to="/search"><a>商品列表</a></router-link>-->

    <!--</li>-->
    <!--<li>-->
    <!--<router-link role="presentation" to="/works"><a>摄影展示</a></router-link>-->

    <!--</li>-->
    <!--<li>-->
    <!--<router-link role="presentation" to="/about"><a>关于我们</a></router-link>-->

    <!--</li>-->
    <!--<li>-->
    <!--<router-link role="presentation" to="/repair"><a>售后服务</a></router-link>-->

    <!--</li>-->
    <!--</ul>-->
    </div>
    <div class="col-sm-3">
    <form class="navbar-form navbar-left" style="margin: 10px">
    <form action="" id="ff1"></form>
    <div style="position: relative" class="form-group">
    <input type="text" style="width: 160px;" form="ff1" v-model="emi" @focus="xian" @mouseover="xian"
    class="form-control" placeholder="输入关键字">
    <div id="spe" @mouseover="xian" @mouseout="ni">
    <span id="sp" v-on:click="ckl" @click="ni" v-for="good in searchgood"><router-link :to="'/shops/'+good.ShopID">{{good.shopName}}</router-link></span>
    </div>

    </div>
    <!--<button type="button" form="ff1"  class="btn btn-default">搜索</button>-->
    </form>
    </div>
    <div class="col-sm-4">
      <ul class="nav navbar-nav">
        <li style="margin-top:14px;color:white">
                  <span v-if="sele==1"><router-link role="presentation" to="/login"><a class="move">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;登录</a></router-link>
                    <router-link role="presentation" to="/registe"><a class="move">注册</a></router-link></span>
          <span v-else-if="sele==2 " style="font-size: 14px"><span>欢迎您：&nbsp;{{this.$store.state.username}}</span><a
            @click="quit" to="login">退出</a></span>
        </li>
        <li>
          <router-link role="presentation" to="/Car"><a class="move" v-if="sele==2" style="font-size: 14px">购物车</a></router-link>
        </li>
        <li>
          <router-link role="presentation" to="/user"><a class="move" v-if="sele==2" style="font-size: 14px">个人中心</a></router-link>
        </li>
      </ul>
    </div>


  </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
  </nav>


  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Header",
    data() {
      return {

        da: {},
        searchgood: [],
        emi: '',
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    watch: {
      'emi': function () {
        let _this = this;
        axios.get('http://localhost:3000/shop/shopsearch?id=' + `${_this.emi}`).then(function (result) {
          console.log('+==++++====+++===+++===+++' + _this.emi);
          // alert(result.data[0].ShopID)
          console.log('++++++++++++++++++++++++++++++' + result.data)
          _this.searchgood = result.data
        }, function (err) {
          console.log(err);
        })
      }
    },
    methods: {
      ckl() {
        window.location.reload()
      },
      xx() {
        // window.location.reload()
      },
      xian() {
        $('#spe').show()

      },
      ni() {
        $('#spe').hide()

      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      quit() {
        // sessionStorage.clear()
        this.$router.push('/login')
        location.reload()
        this.$store.state.seletlogon = 1
      }
    },
    computed: {
      sele() {
        return this.$store.state.seletlogon
      }
      // getEmail(){
      //   return  sessionStorage.getItem('Email')
      // }
    },
    created() {
      // // this.index=this.$store.state.seletlogon
      // this.$computed.sele()
    }

  }
</script>

<style scoped>
  * {
    margin: 0;

  }

  img {

    width: 45px;
    height: 35px;
    margin-top: -5px;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-left: 10px;
  }

  a:hover {
    color: #a3a3a3;
    cursor: pointer;
  }

  .move {
    font-size: 12px;
    top: -10px;
  }

  nav {
    background-color: black;
  }

  li {
    float: left;
  }

  #spe {
    width: 160px;
    background: #000;
    opacity: 0.7;
    position: absolute;
    top: 45px;
    left: 0;
    z-index: 3;
    border-radius: 0 0 5px 5px;
  }

  #sp {
    display: inline-block;
    height: 30px;

  }



  body{font:12px/180% Arial, Helvetica, sans-serif, "新宋体";padding:40px 0 0 0;}

  /* nav2 */
  .nav2{width:100px;height:30px;position:relative;font-family:微软雅黑;font-size:12px;color:#fff;overflow:hidden;float:left;top: 10px}
  .nav2 div{width:100px;height:30px;line-height:30px;position:absolute;text-align:center;-webkit-transition:all 0.3s ease-in-out;-moz-transition:all 0.3s ease-in-out;-o-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}

  .nav2 .one{top:-30px;left:0;z-index:1;background: #000000;color:#FFF;opacity:0;}
  .nav2:hover .one{top:0px;left:0;opacity:1;-webkit-transform:scale(1.3);-moz-transform:scale(1.3);-o-transform:scale(1.3);transform:scale(1.3);}
  .nav2 .one a{background: #000000;color:#FFF;text-decoration:none;}

  .nav2 .two{bottom:0px;left:0;z-index:2;background: #000000;color:#FFF;}
  .nav2:hover .two{bottom:-30px;left:0;}
  .nav2 .two a{background: #000000;color:#FFF;text-decoration:none;}


</style>
