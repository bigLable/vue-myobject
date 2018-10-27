<template>
    <div class="container" style="margin-bottom: 5%">
      <div class="col-sm-4 col-sm-offset-8 div">
        <div class="row"><span class="bold">应实付款:</span><span class="Red">￥{{total}}</span></div>
        <div class="row"><span class="bold">寄送至:{{gettotal}}{{dat}}</span></div>
        <div class="row"><span class="bold">收货人:</span>{{getuser}}{{username}}</div>
      </div>
      <div class="col-md-3 col-sm-offset-9 bc font text-center" @click="change"><h2>确定付款</h2></div>
    </div>
</template>
<script>
  import axios from 'axios'
  import $ from 'jquery'
    export default {
        name: "paymoney",
      data(){
        return {
          username:'',
          info:[],
          total:this.$store.state.total,
          dat:''
        }
      },
      methods:{
        change(){
          this.$store.state.num.int3++
          console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
          console.log(this.$store.state.num.int3)
             //增加订单
          let _this=this
          let id=this.$store.state.user
          let inf=this.$store.state.inf
          // let adres=this.$store.state.adres
          for(var i=0;i<inf.length;i++){

            $.post('http://localhost:3000/shoppingCart/addoder', {userId:id,shopId:inf[i].ShopID,shopnum:inf[i].num,adre:_this.dat},
              function(result){
                console.log(result)
              })
          }

        },

      },
      computed:{
        gettotal(){
          this.username=this.$store.state.username
        let _this=this
           let id=this.$store.state.adres
          axios({
            method:'get',
            url:'http://localhost:3000/shoppingCart/getadres?Adressid='+`${id}`
          }).then(function(result){
            console.log('==============11 =====');
            _this.dat = result.data.data[0][0].adrename;
            console.log(_this.dat);
            console.log(id+'的值')
          },function(err){
            console.log(err);
          })

        },
        getuser(){
          let _this = this;
          axios.get('http://localhost:3000/shoppingCart/getAlladres?userId='+`${_this.$store.state.userId}`).then(function(result){
            console.log('============== =====');
            // console.log(result.data)
            _this.info = result.data.data[0];
            console.log(_this.info);
          },function(err){
            console.log(err);
          })
        }
      },

  }
</script>

<style scoped>
.bold{
  padding-left: 2px;
  font-weight: bolder;
  color: black;
}
  .Red{
    font-weight:bold;
    color: red;
  }
  .div{
    border: 2px solid red;

  }
  .bc{
    background-color: red;
  }
  .font{

    color: white;
  }
</style>
