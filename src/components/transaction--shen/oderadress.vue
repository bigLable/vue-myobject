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
    <el-radio-group v-model="radio2">
      <div v-for="text in info"  :key="text.Adressid" class="text item">
        <el-radio :label="text.Adressid"></el-radio>
        {{'&nbsp;&nbsp;&nbsp;&nbsp;'+ text.adrename }}
      </div>
    </el-radio-group>
  </div>
  </el-card>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "oderadress",

         data(){
          return{
            info:[],
            radio2:1
          }
      },
        mounted(){
        let _this = this;
          axios.get('http://localhost:3000/shoppingCart/getAlladres').then(function(result){
          console.log('============== =====');
          // console.log(result.data)
          _this.info = result.data.data[0];
          console.log(_this.info);
        },function(err){
          console.log(err);
        })
        }
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
