<template>
 <div>

   <!--<car-head></car-head>-->
   <pay-oderprocess></pay-oderprocess>
   <car-cardata></car-cardata>
   <!--<router-view></router-view>-->
   <!--<car-foot></car-foot>-->
 </div>
</template>
<script>
  import tsCarhead from './tsCar'
  import tsCardata from './tsCardata'
  import  foot from './Carfoot'
  import oderprocess from './oderprocess'
    export default {
        name: "Car",
      data(){
            return {

            }
      },
        components:{
          'car-head':tsCarhead,
          'car-cardata':tsCardata,
           'car-foot':foot,
          'pay-oderprocess':oderprocess,
        }
    }
</script>

<style scoped>

</style>
