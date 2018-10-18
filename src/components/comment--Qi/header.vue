<template>
  <div  >
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
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>  <router-link role="presentation" to="/"><img src="../../assets/u19.png" alt=""></router-link></li>
            <li class="">
              <router-link role="presentation" to="/shops"><a>商品列表</a></router-link>

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
            <li> <form class="navbar-form navbar-left">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search">
              </div>
              <button type="submit" class="btn btn-default">搜索</button>
            </form></li>
            <li>
              <router-link role="presentation" to="/login"><a class="move">登录</a></router-link>
            </li>
            <li>
              <router-link role="presentation" to="/registe"><a class="move">注册</a></router-link>
            </li>
            <li>
              <router-link role="presentation" to="/Car"><a class="move">购物车</a></router-link>
            </li>
            <li>
              <router-link role="presentation" to="/user"><a class="move">个人中心</a></router-link>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

  </div>
</template>

<script>
  export default {
    name: "Header",
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
  img {
    width: 70px;
    height: 40px;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-left: 20px;
  }
  a:hover{
    color: #a3a3a3;
  }

  .move {
    font-size: 12px;
    top: -10px;
  }
  .sou{
    font-size: 30px;
  }
  .el-menu-demo{
    height: 60px;
  }
</style>
