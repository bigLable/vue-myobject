<template>
    <div  id="d1" class="row">
      <div id="d2" class="col-lg-4 col-md-4 col-sm-5 col-xs-5">
        <ul>
          <li>
            默认排序
          </li>
          <li>
            价格升序
          </li>
          <li>
            价格降序
          </li>
        </ul>
      </div>
      <div id="d3" class="col-lg-5 col-lg-offset-5 col-md-5 col-md-offset-5 col-sm-7 col-xs-7">
        <ul>
          <li>
            <form action="" method="post" id="kane"></form>
            <span>价格：</span>
            <input  class="textml" type="text" form="kane" placeholder="最小价格">~
            <input  class="textml" type="text" form="kane" placeholder="最大价格">
            <input  type="button" form="kane" value="确认">
            <input type="reset" form="kane" value="重置">


          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "type-search"
    }
</script>

<style scoped>
  #d1{
    height: 130px;
    position: relative;
  }
  ul{
    list-style: none;
    position: relative;
    top:25px;
    right: 55px;
  }
  #d2 li{
    display: inline-block;
    width: 80px;
    height: 40px;
    border: 1px solid #cccccc;
    float: left;
    background: white;
    margin-right: 3px;
    text-align: center;
    line-height: 40px;
  }
  #d3 li{
    display: inline;
    width: 500px;
    height: 50px;
    float: right;
    background: white;
    margin-right: 3px;
    text-align: center;
    line-height: 40px;
  }
  .textml{
    width: 70px;
  }


</style>
