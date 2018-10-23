<template>
  <div class="row text-center ">
    <div id="dvv1">
      <p><span class="glyphicon glyphicon-map-marker"></span>售后及维修服务</p>
      <div class="container">
      <div class="row">
        <div id="div1" >
          <div id="d1" @click="zao" class=" col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <p  >零售店</p>
          </div>
          <div id="d2" @click="zuo" class=" col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <p >特约维修店</p>
          </div>
         <span id="p1">直营店铺</span>
        </div>
      </div>
    </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "title-repair",
      methods:{
        zao(){
          this.$router.push({path:'/repair/raputor'})
        },
        zuo(){
          this.$router.push({path:'/repair/chizu'})
        }
      }
    }
</script>

<style scoped>
p:first-child{
  font-size: 40px;
  font-weight: 300;
  position: relative;
  top: 75px;
  color: white;
}
#dvv1{
  height: 400px;
background:linear-gradient(to right,#8c2cff,#059aff);

}
.glyphicon.glyphicon-map-marker{

}
div #div1{
  height: 200px;
  background: white;
  position: relative;
  top: 140px;

}
#d1{
  height: 100px;
  background:#83aeff;
  border: 1px solid #cccccc;


}

#d2{
  height: 100px;
  background: white;
  border: 1px solid transparent;


}
p:last-child{
  color: black;
  font-size: 30px;
  text-align: center;
  position: relative;
  top: 27px;
  font-weight: 600;
}
#p1{
  font-size: 25px;
  font-weight: bold;
  color: #cccccc;
  position: relative;
  top: 30px;
}
</style>
