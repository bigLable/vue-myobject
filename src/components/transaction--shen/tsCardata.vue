<template>
    <div>
      <span>购物车商品</span>
       xiang<h3  v-text="info"></h3>
      <button @click.prevent="getData">显示数据</button>
    </div>
</template>

<script>

    export default {
        name: "tsCardata",
        data(){
          return {
            info:'aaa'
          }
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
