<template>
   <div class="row" >
     <img  class="img-responsive" :src="user.IMG1" alt="">
     <img  class="img-responsive" :src="user.IMG2" alt="">
     <img  class="img-responsive" :src="user.IMG3" alt="">
   </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "shopimgs",
    data() {
      return {
        name: '',
        user: [],
      };

    },
    methods: {
      getData(){
        let  _this=this;
        axios.get('http://localhost:3000/shop/allIMG').then(function (result) {
          console.log(result.data);
          _this.user = result.data[4];
          console.log(_this.user);

        })
      }, function(err) {
        console.log(err.msg)
      },

    }, mounted() {
      this.getData()

    }
  }
</script>

<style scoped>

</style>
