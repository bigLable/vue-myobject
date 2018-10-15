<template>
 <div>
   <h1>Car!!!</h1>
   <car-head></car-head>
   <car-cardata></car-cardata>
   <car-foot></car-foot>
   <!--<router-view></router-view>-->
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
