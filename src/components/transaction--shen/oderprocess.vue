<template>
  <div class="container-fluid" style="margin-top: 30px">
    <div class="row col-md-pull-3">
      <div class="progress">
        <div class="progress-bar progress-bar-success" :style="{width:int1 + '%'}">
          <span style="color: white;font-weight: bold">加入购物车</span>
        </div>
        <div class="progress-bar progress-bar-warning progress-bar-striped" :style="{width:int2 + '%'}">
          <span style="color: white;font-weight: bold">确认信息</span>
        </div>
        <div class="progress-bar progress-bar-danger" :style="{width:int3 + '%'}">
          <span style="color: white;font-weight: bold">完成交易</span>
        </div>
      </div>
    <hr/>
    </div>
  </div>
</template>

<script>
    export default {
        name: "oderprocess",
        data(){
          return{
          }
        },
      computed:{
          int1(){return this.$store.state.num.int1 *100/3;},
          int2(){return this.$store.state.num.int2 *100/3;},
          int3(){return this.$store.state.num.int3 *100/3;},
      }
    }
</script>

<style scoped>

</style>
