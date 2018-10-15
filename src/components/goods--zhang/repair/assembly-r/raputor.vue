<template>
  <div  id=ddd class="container">
    <div id=reputor class="row">
      <div class=" repudiv col-lg-3 col-md-3 col-sm-6 col-xs-6" >
        <div class="imgdiv">
          <img src="" alt="">
        </div>
        <div>
          <h3>{{}}</h3>
          <p>地区:{{}}</p>
          <p>地址:{{}}</p>
          <p>营业时间:{{}}</p>
          <p>电话:{{}}</p>
        </div>
        </div>
      </div>

  </div>
</template>

<script>
    export default {
        name: "raputor"
    }
</script>

<style scoped>
  #ddd{
    background:white;
    position:relative;
    top: -265px;
  }
.imgdiv{
  height: 190px;
  background: black;
  margin-top: 30px;
  border-radius: 10px;
}
  .repudiv{
    height: 400px;
  }

</style>
