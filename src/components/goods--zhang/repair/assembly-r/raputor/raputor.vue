<template>
  <div id="dv1" class="row">
    <div  id=ddd class="container">
      <div  id=reputor class="row">
        <div v-for="dat in user" class=" repudiv col-lg-3 col-md-3 col-sm-6 col-xs-6" >
          <div class="bbb">
            <div class="imgdiv">
              <img class="img-responsive" :src="dat.wxImg" alt="">
            </div>
            <div class="text-left">
              <h3>{{dat.wxName}}</h3>
              <p style="font-size: 15px">地区:<span style="color: grey">{{dat.wxFrom}}</span></p>
              <p style="font-size: 15px">营业时间:<span style="color: grey">{{dat.wxTime}}</span></p>
              <p style="font-size: 15px">电话:<span style="color: grey">{{dat.wxphone}}</span></p>

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
    width: 100%;
    position:relative;
    top: 10px;
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
