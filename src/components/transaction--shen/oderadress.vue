<template>
  <el-card class="box-card">
  <div class="container">
    <div class="col-sm-3">确认收货</div>
    <div class="col-sm-3 col-sm-pull-1">确认收货</div>
    <hr/>

      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>

  </div>
  </el-card>
</template>

<script>
    export default {
        name: "oderadress"
    }
</script>

<style scoped>
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
</style>
