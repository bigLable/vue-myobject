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
             <label>
               <input type="checkbox" id=" blankCheckbox " value="option1" aria-label="...">
             </label>
             全选</th>
           <th>商品信息</th>
           <th>单价</th>
           <th>数量</th>
           <th>总计金额</th>
           <th>操作</th>
         </tr>
         <tr v-for="key in 2" id="bc">
           <td>
             <label>
             <input type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
               <img src="../../assets/logo.png">
           </label>
           </td>
           <td>info.shopifo</td>
           <td class="ifo">info.shopPrice</td>
           <td><span><img src="../../assets/add.gif"/></span><span>num</span><span><img src="../../assets/subtraction.gif"/></span></td>
           <td class="ifo">总价</td>
           <td>删除</td>
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
           <td>
             <label>
             <input type="checkbox" id=" blankCheckbox" value="option1" aria-label="...">
           </label>
             全选
             <span style="margin-left: 30%">
               删除
           </span>
           </td>
           <td ></td>
           <td>已选商品:</td>
           <td>合计(不含运费):</td>
           <td colspan="3"  class="paymoney"><router-link to="/Pay" style="color: white;font-size: large">结算:</router-link></td>
         </tr>
       </table>
     </div>

    </div>
</template>

<script>

    export default {
        name: "tsCardata",
        data(){
          return {
            info:[]
          }
      },
      methods:{
        getData:function(){
          var _this = this;
          axios({
            method:'get',
            url:'http://localhost:3000/shoppingCart/getAllcar'
          }).then(function(result){
            console.log(result.data);
            _this.info = result.data[0];
               console.log(_this.info)
          },function(err){
            console.log(err);
          })
        }
      },
      beforeMount:function () {
        this.getData();
      }

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
