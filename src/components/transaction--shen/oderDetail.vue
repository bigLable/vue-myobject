<template>
  <div class="container" style="margin-top: 20px">

    <h5>确认订单信息</h5>
    <h2 class="h2-dot"></h2>
    <div class="table-c ">


    <table class="table table-hover">
      <tr>
        <th>宝贝图片</th>
        <th>商品描述</th>
        <th>宝贝属性</th>
        <th>单价</th>
        <th>数量</th>
        <th>小计</th>
      </tr>
      <tr v-for="key in shopList" id="bc">
        <td>
         <img :src="key.shopImg" style="width: 150px;"class="img-responsive">
        </td>
        <td style="color: grey">{{key.shopType}}</td>
        <td >{{key.shopPara}}</td>
        <td class="Red">￥{{key.shopPrice}}</td>
        <td>{{key.num}}</td>
        <td class="Red">￥{{key.shopPrice*key.num}}</td>
      </tr>
      <tr >
        <td colspan=3 style="text-align: left;padding-top:5%">给卖家留言:<input type="text" placeholder="欢迎给我们留言！"/></td>
        <td colspan=3 style="text-align: center;padding-top:5%">合计费用:<span class="Red">￥{{total}}</span></td>
      </tr>
    </table>
    </div>
  </div>

</template>

<script>
    export default {
        name: "oderDetail",
        data(){
         return{
           shopList:this.$store.state.inf,
           total:this.$store.state.total
         }
       },
        mounted() {

        }
    }
</script>

<style scoped>
  /*.bc{*/
    /*box-shadow: 3px 3px 2px gainsboro;*/
  /*}*/
  .h2-dot{
    border-bottom:dashed 1px black;
    display:block;
  }
  tr{

    margin-top: 5px;
  }
h5{
  color: red;
  opacity: 1;
}

  .Red{
    font-weight: bold;
    color: red;
  }
  #bc td{
    background-color: rgba(249,247,247,0.7);

    border-bottom:5px solid white;
  }
  input::-webkit-input-placeholder {
         font-family: 微软雅黑;
        /* placeholder颜色  */
           color:grey;
         /* placeholder字体大小  */
           font-size: 12px;
         /* placeholder位置  */
           text-align: center;
     }
  input {
                  border: 1px solid black;
              }
</style>
