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
        <input type="button" class="btn btn-warning" value="快速定位到我的位置">
      </div>

    </div>
</div>
    </div>
</template>

<script >

  export default {
        name: "chizu",
      components:{
      },
      methods:{
        mounted:function(){

        },

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

</style>
