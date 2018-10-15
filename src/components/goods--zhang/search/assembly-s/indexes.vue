<template>
    <div class="row">
      <div id="index-title1">
        <ul>
          <li style="font-size: 16px;font-weight: bold">
            产品类型
          </li>
        </ul>

      </div>
      <div id="index-title2">
        <ul>
          <li>
            数码相机{{}}
          </li>
          <li>
           数码摄像机{{}}
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "indexes"
    }
</script>

<style scoped>
 #index-title1{
   height: 50px;
   background: #ccc;
 }
 #index-title2{
   height: 50px;
   background: white;
   border: 1px solid #cccccc;
 }
ul{
  list-style: none;
}
  li{
    height: 25px;
    width: 100px;
    display:inline-block;
    position: relative;
    top: 15px;
    font-size: 13px;
    font-weight: bold;
  }
</style>
