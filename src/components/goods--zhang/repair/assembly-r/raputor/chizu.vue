<template>

  <div id="dv1" class="row">
  <div class="container">
    <div class="p90"></div>
    <div class=" row ">
      <div class="col-lg-3 col-md-4 col-sm-5 col-xs-5 ">
        <form id="rok" action=""></form>
          <!--<select class="form-control"  form="rok" >-->
            <!--<option>北京</option>-->
            <!--<option>山东</option>-->
            <!--<option>河南</option>-->
            <!--<option>江苏</option>-->
            <!--<option>广西壮族自治区</option>-->
          <!--</select>-->
        <input type="text"  class="btn btn-primary" v-model="msg" style="width: 250px;">
      </div>

      <div class=" row col-lg-6 col-md-4  col-sm-3 col-xs-3">
        <input type="button" class="btn btn-primary" form="rok"  value="确定">
      </div>
      <div class=" row col-lg-3 col-md-4  col-xs-4">
        <input type="button" @click="suz" class="btn btn-warning" value="我附近的维修点">

      </div>
    </div>
    <div id="allmap"></div>
</div>
    </div>
</template>

<script >

  export default {
        name: "chizu",
      components:{
          suz(){

          }
      },
    mounted(){
    $(function(){
        var map = new BMap.Map("allmap");
        map.centerAndZoom("苏州",15);
        var local = new BMap.LocalSearch(map, {
          renderOptions:{map: map}
        });
        local.search('sony');

      });

    },


    }

</script>

<style scoped>
.form-control{
  width: 250px;
  height: 60px;
  background: #000000;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  background-clip: padding-box;
}
  .btn.btn-primary{
    height: 60px;
    width: 120px;
    font-size: 20px;
  }
  .btn.btn-warning{
    height: 60px;
    width: 250px;
    font-size: 20px;

  }
  .p90{
    height: 30px;
  }
#dv1{
  background: #f6f8f8;
  height: 100%;
}
  .container{
    background: white;
  }
#allmap {width: 70%;
  height: 700px;
  margin:10px;
  font-family:"微软雅黑";
  margin-top: 20px;

}


</style>
