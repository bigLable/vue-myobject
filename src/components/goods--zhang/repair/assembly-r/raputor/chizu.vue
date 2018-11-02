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
        <!--<input type="text"  class="btn btn-primary" v-model="this.msg" style="width: 250px;">-->
      <!--</div>-->

      <!--<div class=" row col-lg-6 col-md-4  col-sm-3 col-xs-3">-->
        <!--<input type="button" class="btn btn-primary" form="rok"  value="确定">-->
      <!--</div>-->
      <!--<div class=" row col-lg-3 col-md-4  col-xs-4">-->
        <input type="button" @click="ckb" class="btn btn-warning" value="我附近的维修点">

      </div>
    </div>
    <div id="allmap"></div>
</div>
    </div>
</template>

<script >

  export default {
    data(){
      return{
        msg: "苏州"
      }
    },
        name: "chizu",
      components:{
          suz(){

          }
      },
    methods:{
      ckb() {
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(point, 11);

        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
              var local = new BMap.LocalSearch(map, {
                renderOptions:{map: map}
              });
              local.search("相机");
          }
          else {
            alert('failed' + this.getStatus());
          }
        }, {enableHighAccuracy: true})
      }
        // ==================================
      //   var map = new BMap.Map("allmap");
      //   var point = new BMap.Point(116.331398,39.897445);
      //   map.centerAndZoom(point,12);
      //
      //   function myFun(result){
      //     var cityName = result.name;
      //     map.setCenter(cityName);
      //     // alert("当前定位城市:"+cityName);
      //
      //   }
      //   var myCity = new BMap.LocalCity();
      //   myCity.get(myFun);
      //   var local = new BMap.LocalSearch(map, {
      //     renderOptions:{map: map}
      //   });
      //   local.search("咔嚓");
      // }
    },
    mounted(){
    $(function(){
        var map = new BMap.Map("allmap");    // 创建Map实例
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(new BMap.MapTypeControl({
        mapTypes:[
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]}));
      map.setCurrentCity("苏州");          // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true);

      // function loadJScript() {
      //   var script = document.createElement("script");
      //   script.type = "text/javascript";
      //   script.src = "http://api.map.baidu.com/api?v=2.0&ak=您的密钥&callback=init";
      //   document.body.appendChild(script);
      // }
      // function init() {
      //   var map = new BMap.Map("allmap");            // 创建Map实例
      //   var point = new BMap.Point(116.404, 39.915); // 创建点坐标
      //   map.centerAndZoom(point,15);
      //   map.enableScrollWheelZoom();                 //启用滚轮放大缩小
      // }
      // window.onload = loadJScript;  //异步加载地图
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
    height: 100px;
    width: 500px;
    font-size: 38px;
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
#allmap {width: 98%;
  height: 700px;
  margin:10px;
  font-family:"微软雅黑";
  margin-top: 20px;

}


</style>
