<template>

  <div id="dv1" class="row">
  <div class="container">
    <div class="p90"></div>
    <div class=" row ">
      <div class="col-lg-3 col-md-4 col-sm-5 col-xs-5 ">
        <form class="form-inline" action="" id="fm1">
          <select class="form-control" form="fm1">
            <option>北京</option>
            <option>山东</option>
            <option>河南</option>
            <option>江苏</option>
            <option>广西壮族自治区</option>
          </select>
        </form>
      </div>

      <div class=" row col-lg-6 col-md-4  col-sm-3 col-xs-3">
        <input type="button" class="btn btn-primary" form="fm1" value="确定">
      </div>
      <div class=" row col-lg-3 col-md-4  col-xs-4">
        <input type="button" @click="suz" class="btn btn-warning" value="我附近的维修点">
      </div>
      <div class="bbq">
        <div id="allmap"></div>
      </div>

    </div>
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
        map.addControl(new BMap.MapTypeControl({
          mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
          ]}));
        map.enableScrollWheelZoom(true);   //启用滚轮放大缩小，默认禁用
        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的

          var marker = new BMap.Marker(point);  // 创建标注
          map.addOverlay(marker);              // 将标注添加到地图中
          map.centerAndZoom(point, 15);
          var opts = {
            width : 200,     // 信息窗口宽度
            height: 100,     // 信息窗口高度
            title : "海底捞王府井店" , // 信息窗口标题
            enableMessage:true,//设置允许信息窗发送短息
            message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
          };
          var infoWindow = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", opts);  // 创建信息窗口对象
          marker.addEventListener("click", function(){
            map.openInfoWindow(infoWindow,point); //开启信息窗口
             })
      });

    },
      methods:{



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
  .bbq{
    position: relative;top: 10px;
  }
body, html,#allmap {width: 70%;height: 700px;overflow: hidden;margin:20px;font-family:"微软雅黑";}


</style>
