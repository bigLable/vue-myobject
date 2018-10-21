<template>
    <div class="container">
      <div class="col-sm-4 col-sm-offset-8 div">
        <div class="row"><span class="bold">应实付款:</span><span class="Red">￥{{total}}</span></div>
        <div class="row"><span class="bold">寄送至:{{gettotal}}{{dat}}</span></div>
        <div class="row"><span class="bold">收货人:</span>李栓蛋</div>
      </div>
      <div class="col-md-3 col-sm-offset-9 bc font text-center" ><h2  @click="change" >确定付款</h2></div>
    </div>
</template>
<script>
  import axios from 'axios'
    export default {
        name: "paymoney",
      data(){
        return {
          total:this.$store.state.total,
          dat:''
        }
      },
      methods:{
        change(){
          this.$store.state.num.int3++
          console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
          console.log(this.$store.state.num.int3)
        },
      },
      computed:{
        gettotal(){
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

        }
      },

  }
</script>

<style scoped>
.bold{
  font-weight: bolder;
  color: black;
}
  .Red{
    font-weight:bold;
    color: red;
  }
  .div{
    border: 1px solid black;

  }
  .bc{
    background-color: red;
  }
  .font{

    color: white;
  }
</style>
