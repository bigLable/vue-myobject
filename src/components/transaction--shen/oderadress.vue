<template>
  <div class="container" >
    <h4>确认收货地址</h4>
    <h2 class="h2-dot" ></h2>
  <el-card class="box-card">
  <div class="container">

    <div class="col-sm-4">收货地址</div>
    <div class="col-sm-7 col-sm-pull-0 pointer" >编辑</div>
    <hr/>

      <div slot="header" class="clearfix">
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>

  </div>
  </el-card>
  </div>
</template>

<script>
    export default {
        name: "oderadress"
    }
</script>

<style scoped>
  .h2-dot{
    border-bottom:dashed 1px black;
    display:block;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  h4{
    color: red;
    opacity: 0.5;
  }
  .pointer:hover{
    color: blue;
    cursor: pointer;

  }
</style>
