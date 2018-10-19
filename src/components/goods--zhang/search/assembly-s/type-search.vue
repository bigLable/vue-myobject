<template>
    <div  id="d1" class="row">
      <div id="d2" class="col-lg-3 col-md-4 col-sm-5 col-xs-5">
        <form action="" class="form-inline">
          <input type="button" class="btn btn-default" value="默认排序">
          <input type="button" class="btn btn-default" value="价格升序">
          <input type="button" class="btn btn-default" value="价格降序">
        </form>


      </div>
      <div id="d3" class="col-lg-4 col-lg-offset-5 col-md-5 col-md-offset-3  col-sm-7 col-xs-7">


            <form action="" class="form-inline" method="post" id="kane">
            <span>价格：</span>
            <input  class=" textml form-control " type="text" form="kane" placeholder="最小价格">~
            <input  class="textml form-control " type="text" form="kane" placeholder="最大价格">
            <input   class="btn btn-primary" type="button" form="kane" value="确认">
            <input  class="btn btn-primary " type="reset" form="kane" value="重置">
            </form>


      </div>
    </div>
</template>

<script>
    export default {
        name: "type-search"
    }
</script>

<style scoped>
  #d1{
    height: 90px;
    position: relative;
  }
  .textml{
    display: inline;
    width: 90px;
  }


</style>
