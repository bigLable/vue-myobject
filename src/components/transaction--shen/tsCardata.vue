<template>
    <div class="container body-top">
      <div class="row"><h4>购物车商品列表</h4></div>

      <div class="row">
        <h2 class="h2-dot"></h2>
      </div>
     <div class="row">
       <table class="table table-hover ">
         <tr>
           <th style="margin-left: 5px">
             </th>
           <th>商品信息</th>
           <th>单价</th>
           <th>数量</th>
           <th>总计金额</th>
           <th>操作</th>
         </tr>
         <tr v-for="(good,key) in info" id="bc">
           <td>
             <label>
             <input type="checkbox" id="blankCheckbox" v-model="checkedname" :value='good.ShopID' aria-label="...">
               <img v-bind:src="good.shopImg"/>
           </label>
           </td>
           <td>{{good.shopifo}}</td>
           <td class="ifo">{{good.shopPrice}}</td>
           <td><span><img src="../../assets/add.gif" @click="addNum(key)" /></span><span >{{Num}}</span><span><img src="../../assets/subtraction.gif" @click="sub(key)"/></span></td>
           <td class="ifo">{{'￥'+Total}}</td>
           <td ><span v-on:click="getdelete(key)">删除</span></td>
         </tr>
          <tr >
            <th colspan="6" style="text-align: center">
              <nav aria-label="..." class="row">
                <div class="col-sm-3 con"></div>
                <ul class="pager col-sm-6">
                  <li class="previous" style="float: left"><a href="#"><span aria-hidden="true">&larr;</span>上一页</a></li>
                  <li class="next" style="float: right"><a href="#">下一页<span aria-hidden="true">&rarr;</span></a></li>
                </ul>
                <div class="col-sm-3"></div>
              </nav>
            </th>
          </tr>
         <tr class="pay">
           <!--<td>-->
             <!--<label>-->
             <!--<input type="checkbox" id=" blankCheckbox"  value="option1" aria-label="..." :onclick="allSelect">-->
           <!--</label>-->
             <!--全选-->
             <!--<span style="margin-left: 30%">-->
               <!--删除-->
           <!--</span>-->
           <!--</td>-->
           <!--<td ></td>-->
           <td colspan="3">已选商品:{{checkedname}}号</td>
           <td>合计(不含运费):</td>
           <td colspan="3"  class="paymoney"><router-link to="/Pay" style="color: white;font-size: large">去结算:</router-link></td>
         </tr>
       </table>
     </div>

    </div>
</template>
<!--var example-component = Vue.component(-->
<!--{-->
<!--data:function(){ return { a : ‘’ }	,-->
<!--computed: {-->
<!--b: function () {-->
<!--return this.a + 1;-->
<!--}-->
<!--}-->
<!--},-->
<!--});-->
<script>
    import axios from 'axios'
    export default {
        name: "tsCardata",
        data(){
          return {
            Total:'0',
            info: [],
            Num: 0,
            // info:{'shopImg':require('../../assets/logo.png'),'shopifo':'超清','shopPrice':20,'num':2,'total':40},
            checkedname: [],
            goData: [],

            }
          },
      methods:{
          getdelete(key){
            this.info.splice(key,1)
          },
          addNum(key){
            if(this.Num>=0){
              this.Num=this.Num+1;
              this.Total=this.Num*this.info[key].shopPrice;
            }
          },
        sub(key){
            if(this.Num>0){
              this.Num=this.Num-1;
              this.Total=this.Num*this.info[key].shopPrice;
            }
        },
        getData:function(){
          var _this = this;
          axios({
            method:'get',
            url:'http://localhost:3000/shoppingCart/getAllcar'
          }).then(function(result){
            console.log('============== =====');
            // console.log(result.data)
            _this.info = result.data.data[0];
            console.log(_this.info[0]);
              },function(err){
            console.log(err);
          })
        },
      },
      mounted:function () {
        this.getData();
      },

    }

</script>

<style scoped>
  #bc td{
    background-color: rgba(249,247,247,0.7);

    border-bottom:5px solid white;
  }
  .paymoney{
    text-align: center;
    color: white;
    background-color: rgba(0,0,0,0.5);
  }
  .pay{
    height:100px;
    margin-top: 30%;
    background-color: rgba(0,0,0,0.2);

  }
table span{

}
  .body-top{
    margin-top: 50px;
  }
.h2-dot{
  border-bottom:dashed 1px black;
  display:block;
}
  h4{
    color: red;
    opacity: 0.5;
  }
  .ifo{
    color: red;
  }
</style>
