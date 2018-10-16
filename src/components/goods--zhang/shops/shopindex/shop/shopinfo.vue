<template>
  <div class="container">
    <div class="row">
      <div id="bigt">
        主要规格
      </div>
      <br/>
      <hr>
      <div class="c100"></div>
      <div id="dkdg">
        相机规格
      </div>
      <div class="right">
        <table>
          <tr><td>镜头</td><td>2</td></tr>
          <tr><td>镜头</td><td>2</td></tr>
          <tr><td>镜头</td><td>2</td></tr>
          <tr><td>镜头</td><td>2</td></tr>
        </table>
      </div>
      <div class="c100"></div>
      <hr>
    </div>
  </div>
</template>

<script>
    export default {
        name: "shopinfo"
    }
</script>

<style scoped>
#bigt{
  width: 150px;
  height: 45px;
  border-left:cornflowerblue 15px solid;
  font-size: 25px;
  font-weight: 500;
  color: gray;
  text-align: center;
  position: relative;
  top: 20px;
  padding-top: 5px;


}
  hr{
    border: lightgray 1px solid;
  }
  .c100{
    height: 20px;
  }
  #dkdg{
    height: 30px;
    width: 200px;
    font-size: 18px;
    color: #cccccc;
    float: left;
  }
  .right{

  }
  td{
    width: 220px;
    height: 40px;
  }
</style>
