<template>
 <div>

   <car-head></car-head>
   <car-cardata></car-cardata>
   <!--<router-view></router-view>-->
   <car-foot></car-foot>
 </div>
</template>
<script>
  import tsCarhead from './tsCar'
  import tsCardata from './tsCardata'
  import  foot from './Carfoot'
    export default {
        name: "Car",
        components:{
          'car-head':tsCarhead,
          'car-cardata':tsCardata,
           'car-foot':foot
        }
    }
</script>

<style scoped>

</style>
