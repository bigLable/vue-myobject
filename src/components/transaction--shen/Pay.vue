<template>
  <div>
    <!--<pay-nav></pay-nav>-->
    <pay-oderprocess></pay-oderprocess>
    <pay-adress></pay-adress>
    <pay-detail></pay-detail>
    <pay-pay></pay-pay>
  </div>

</template>

<script>
  import nav from './tsCar'
  import oderprocess from './oderprocess'
  import payadress from './oderadress'
  import oderdetail from './oderDetail'
  import paymoney from './paymoney'
    export default {
        name: "Pay",
      components:{
          'pay-nav':nav,
           'pay-oderprocess':oderprocess,
           'pay-adress':payadress,
           'pay-detail':oderdetail,
           'pay-pay':paymoney
      }
    }
</script>

<style scoped>

</style>
