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
         <tr v-for="(good,key) in info" class="cartItem">
           <td>
             <label>
             <input type="checkbox" id="blankCheckbox" v-model="checkedname" :value='good.ShopID' aria-label="...">
               <img v-bind:src="good.shopImg"  style="width: 150px;" class="img-responsive"/>
           </label>
           </td>
           <td>{{good.shopPara}}</td>
           <td class="price">{{good.shopPrice}}</td>
           <td><span><img src="../../assets/add.gif" @click="addNum($event)" /></span><span :id="'num'+key" class="num">{{Num}}</span><span>
             <img src="../../assets/subtraction.gif" @click="sub($event)"/></span></td>
           <td class="selfTotal">{{Total}}</td>
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
           <td>合计(不含运费):<span class="allTotal" style="color: red;font-size: large">￥{{Total}}</span></td>
           <td colspan="3"  class="paymoney" v-on:click="change()">
             <router-link  to="/Pay" style="color: white;font-size: large;text-decoration: none" ><span @click="toPay">去结算</span></router-link></td>
         </tr>
       </table>
     </div>

    </div>
</template>

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
          toPay(){
            //1.封装对象
            var newInfo = []
            for(var i = 0 ; i < this.info.length ; i++){
              for(var j = 0 ; j < this.checkedname.length ; j++){
                var num = parseInt($('#num'+i).html())
                if(this.info[i].ShopID == this.checkedname[j]){
                  this.info[i].num = num;
                  newInfo.push(this.info[i])
                }
              }

            }
            this.$store.state.inf= newInfo;
            //2.this.$route.push('/pay')
            this.$store.state.total=this.Total
            // console.log(this.$store.state.inf+'~~~~~~~xixi~~~~~~~~'+this.$store.state.total)
          },
          getdelete(key){
            this.info.splice(key,1)
          },
          addNum(key){

              this.calculation('add', $(key.target));

          },
        sub(key){

              this.calculation('sub', $(key.target));

        },

        calculation: function(c, key) {
          var el = key.parents('tr');
          var numEl = el.find('.num'), num = 0;
            if(c == 'add' && parseInt(numEl.text()) >= 0 || c == 'sub' && parseInt(numEl.text()) > 0) {
              var price = parseInt(el.find('.price').text());
              var selfTotal = el.find('.selfTotal'), allTotalEl = $('.allTotal'), allTotal = 0;
              var cartList = $('.cartItem');

              var tempNum = 0;
              if(c == 'add') {
                tempNum = 1;


                // this.Num=this.Num+1;
                // this.Total=this.Num*this.info[key].shopPrice;
              } else if(c == 'sub') {
                tempNum = -1;
              }

              num = parseInt(numEl.text()) + tempNum;
              numEl.text(num);
              selfTotal.text('￥'+price * num);
              cartList.each(function (index, item) {
                console.log($(item).find('.selfTotal').text());
                allTotal += parseInt($(item).find('.selfTotal').text().replace('￥', ''));
              });
                  this.Total=allTotal
              // allTotalEl.text('￥'+allTotal);
            }
        },

        // toPay() {
        //     var orderObj = {}
        //     var cart = [],  total = this.Total
        //     var cartItems = document.querySelectorAll('.cartItem')
        //     cartItems.forEach(function (item, index) {
        //       cart[index] = {
        //         price: parseInt(this.querySelector('.price').innerText),
        //         num: parseInt(this.querySelector('#num').innerText),
        //         total: total
        //       }
        //     })
        //
        //
        //     orderObj.items = cart
        //     orderObj.total = total
        //
        //     this.$route.push({path: '/Pay', param: orderObj})
        // },

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
        change(){
          this.$store.state.num.int2++
          console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
          console.log('num2:' + this.$store.state.num.int2)
        }
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
