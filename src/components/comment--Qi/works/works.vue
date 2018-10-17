<template>
<div>
  <br>
  <el-carousel :interval="5000" arrow="always" height="1080px">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3></h3>
    </el-carousel-item>
  </el-carousel>
  <app-workskinds></app-workskinds>

</div>
</template>

<script>

  import workskinds from './workskinds'
    export default {
        name: "works",
      data() {
        return {
          activeName: 'second'

        };
      },
      components:{
        'app-workskinds':workskinds,

      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style scoped>

  .el-carousel__item:nth-child(3) {
    background: url("../../../assets/zp1.jpg") no-repeat;
  }

  .el-carousel__item:nth-child(4) {
    background: url("../../../assets/zp2.jpg") no-repeat;
  }

  .el-carousel__item:nth-child(5) {
    background: url("../../../assets/zp3.jpg") no-repeat;
  }

  .el-carousel__item:nth-child(6) {
    background: url("../../../assets/zp4.jpg") no-repeat;
  }
</style>
