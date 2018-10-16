<template>
    <div class="container">
      <div class="col-sm-4 col-sm-offset-8 div">
        <div class="row"><span class="bold">实付款:</span><span class="Red">￥12212.00</span></div>
        <div class="row"><span class="bold">寄送至:</span>英格里拉005弄</div>
        <div class="row"><span class="bold">收货人:</span>李栓蛋</div>
      </div>
      <div class="col-md-3 col-sm-offset-9 bc font text-center" ><h2>确定付款</h2></div>
    </div>
</template>

<script>
    export default {
        name: "paymoney"
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
