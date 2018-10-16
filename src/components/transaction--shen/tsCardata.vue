<template>
    <div class="container">
      <div class="row"><h2>商品列表{{num}}</h2></div>

     <div class="row">

       <table class="table table-hover">
         <tr>
           <th>
             <label>
               <input type="checkbox" id=" blankCheckbox " value="option1" aria-label="...">
             </label>
             全选</th>
           <th>商品信息</th>
           <th>单价</th>
           <th>数量</th>
           <th>金额</th>
           <th>操作</th>
         </tr>
         <tr v-for="key in 2">
           <td>
             <label>
             <input type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
           </label>
           </td>
           <td>图片加详细信息</td>
           <td>￥50.00</td>
           <td>2</td>
           <td>￥100.00</td>
           <td>删除</td>
         </tr>
          <tr>
            <nav aria-label="...">
              <ul class="pager">
                <li><a href="#">Previous</a></li>
                <li><a href="#">Next</a></li>
              </ul>
            </nav>
          </tr>
         <tr>
           <td>
             <label>
             <input type="checkbox" id=" blankCheckbox" value="option1" aria-label="...">
           </label>
             全选</td>
           <td>删除</td>
           <td>已选商品:</td>
           <td>合计(不含运费):</td>
           <td colspan="2"><router-link to="/Pay">结算:</router-link></td>
         </tr>
       </table>
     </div>

    </div>
</template>

<script>

    export default {
        name: "tsCardata",
        data(){
          return {}
        },
      methods:{
        getData:function(){

          var _this = this;

          axios({
            method:'get',
            url:'http://localhost:3000/shoppingCart/getAlladres'
          }).then(function(result){
            console.log(result.data);
            _this.info = result.data;

          },function(err){
            console.log(err);
          })
        }
      }

    }

</script>

<style scoped>

</style>
