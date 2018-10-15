<template>
  <div class="container">
    <div class="row">
      <div id="div1">
        <div id="d1" class=" col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <p>零售店</p>
        </div>
        <div id="d2" class=" col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <p>特约维修店</p>
        </div>
        <p id="p1">直营店铺</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "select-repair"
    }
</script>

<style scoped>
  div{
    border-radius: 15px;
  }
  div #div1{
    height: 230px;
    background: white;
    position: relative;
    top: -250px;

  }
div #d1{
  height: 125px;
  background: aqua;
  position: relative;
  bottom:20px;
}
  div #d2{
    height: 125px;
    background: gray;
    position: relative;
    bottom:20px;
  }
  p{
    font-size: 35px;
    text-align: center;
    margin-top:35px;
    font-weight: bold;
  }
  #p1{
  font-size: 25px;
    font-weight: bold;
    color: #cccccc;
    position: relative;
    top: 25px;
  }
</style>
