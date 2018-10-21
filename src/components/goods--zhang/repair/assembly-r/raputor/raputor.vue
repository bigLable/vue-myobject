<template>
  <div id="dv1" class="row">
    <div  id=ddd class="container">
      <div  id=reputor class="row">
        <div v-for="dat in user" class=" repudiv col-lg-3 col-md-3 col-sm-6 col-xs-6" >
          <div class="bbb">
            <div class="imgdiv">
              <img class="img-responsive" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539855396615&di=8b3a6dc81961ebb3d1941de100f44f5e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F45%2F91%2F27g58PICNEG_1024.png" alt="">
            </div>
            <div>
              <h3>{{dat.wxName}}</h3>
              <p>地区:{{dat.wxFrom}}</p>
              <p>营业时间:{{dat.wxTime}}</p>
              <p>电话:{{dat.wxphone}}</p>
            </div>
          </div>
        </div>


      </div>
  </div>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "raputor",
    data() {
      return {
        name: '',
        user: [],
      };

    },
    methods: {
      fun(){
        this.$router.push({path:'/repair/'+dat.wxId})
      },

      getData() {
        let _this = this;
        axios.get('http://localhost:3000/wx/allwx').then(function (result) {
          console.log(result.data);
          _this.user = result.data;
          console.log(_this.user);

        })
      }, function(err) {
        console.log(err.msg)
      },

    }, mounted() {
      this.getData()

    }
  }

</script>

<style scoped>
  #ddd{
    background:white;
    position:relative;

  }
  img{
    height: 200px;
    position:relative;
    left: 10px;
  }
  .repudiv{
    height: 400px;
  }
  #dv1{
    background: #f6f8f8;
    height: 100%;
  }
  .bbb{
 padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;

    border: 1px solid #cccccc;
  }

</style>
