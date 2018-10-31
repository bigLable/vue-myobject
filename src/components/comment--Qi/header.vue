<template>
  <div>
    <div class="line "></div>
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
            <ul class="nav navbar-nav">
              <li>
                <router-link role="presentation" to="/search"><a>商品列表</a></router-link>
              </li>
              <li>
                <router-link role="presentation" to="/works"><a>摄影展示</a></router-link>
              </li>
              <li>
                <router-link role="presentation" to="/about"><a>关于我们</a></router-link>
              </li>
              <li>
                <router-link role="presentation" to="/repair"><a>售后服务</a></router-link>
              </li>
            </ul>
          </div>
          <div class="col-sm-3">
            <form class="navbar-form navbar-left" style="margin: 10px">
              <form action="" id="ff1"></form>
              <div style="position: relative" class="form-group">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" style="width: 160px;" form="ff1" v-model="emi" @focus="xian" @mouseover="xian"
                       class="form-control" placeholder="输入关键字">
                <div id="spe" @mouseover="xian" @mouseout="ni">
                  <span id="sp" @click="ni" v-for="good in searchgood"><router-link :to="'/shops/'+good.ShopID">{{good.shopName}}</router-link></span>
                </div>

              </div>
              <!--<button type="button" form="ff1"  class="btn btn-default">搜索</button>-->
            </form>
          </div>
          <div class="col-sm-4">
            <ul class="nav navbar-nav">
              <li style="margin-top:14px;color:white">
                  <span v-if="sele==1"><router-link role="presentation" to="/login"><a class="move">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;登录</a></router-link>
                    <router-link role="presentation" to="/registe"><a class="move">注册</a></router-link></span>
                <span v-else-if="sele==2 " style="font-size: 14px"><span>欢迎您：&nbsp;{{this.$store.state.username}}</span><a
                  @click="quit" to="login">退出</a></span>
              </li>
              <li>
                <router-link role="presentation" to="/Car"><a class="move" v-if="sele==2"
                                                              style="font-size: 14px">购物车</a></router-link>
              </li>
              <li>
                <router-link role="presentation" to="/user"><a class="move" v-if="sele==2"
                                                               style="font-size: 14px">个人中心</a></router-link>
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

</style>
