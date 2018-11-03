<template>
  <div id="dv1" class="row">
    <div  id=ddd class="container">
      <div  id=reputor class="row">
        <div v-for="(dd,index) in activitys" class=" animated pulse repudiv col-lg-3 col-md-3 col-sm-6 col-xs-6" >
          <div class="bbb image-hover img-shadow-1 " >
            <div class="imgdiv">
              <img class="img-responsive" :src="dd.wxImg" alt="">
            </div>
            <div class="text-left">
              <h3>{{dd.wxName}}</h3>
              <p style="font-size: 15px"><span style="color: orangered" class="glyphicon glyphicon-map-marker"></span>地区:<span style="color: grey">{{dd.wxFrom}}</span></p>
              <p style="font-size: 15px"><span style="color: orangered" class="glyphicon glyphicon-time"></span>营业时间:<span style="color: grey">{{dd.wxTime}}</span></p>
              <p style="font-size: 15px"><span style="color: orangered" class="glyphicon glyphicon-phone"></span>电话:<span style="color: grey">{{dd.wxphone}}</span></p>

            </div>
          </div>
        </div>

        <div style="height: 50px">&nbsp;</div>
        <div class="col-xs-12"  style="text-align: center">
          <el-pagination
            small
            @current-change="change()"
            :current-page.sync="pageIndex"
            layout="prev, pager, next"
            :total="pageCount"
            :page-size = "pagesize">
          </el-pagination>
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
        name1: '',
        mydata: [],
        pageIndex: 1,
        pagesize: 12,  //每页条数
        pageCount:0,
        info:[],
        activitys:[],
      }


    },

    methods: {
      loadData() {
        this.activitys = [];
        let start = (this.pageIndex-1) * this.pagesize;
        let end = start + this.pagesize;
        // console.log(this.myActData[1]);
        if(end>=this.pageCount){
          end=this.pageCount
        }
        for (var i = start; i < end; i++) {
          this.activitys.push(this.user[i])
        }
      },
      change(){
        return this.loadData();
      },
            getData() {
              let _this = this;
              axios.get('http://localhost:3000/wx/allwx').then(function (result) {
                console.log(result.data);
                _this.user = result.data;
                console.log(_this.user);
                _this.pageCount=_this.user.length;
                // console.log(_this.pageCount)
                _this.loadData()

              })
            }, function(err) {
              console.log(err.msg)
            },


          // $.ajax({
          //   url:'http://localhost:3000/wx/allwx',
          //   type:"get",
          //   success:function (result) {
          //     console.log(result);
          //     thiss.user=result;
          //     console.log(thiss.user)
          //   },error:function (err) {
          //     console.log(err)
          //   }
          // })

      },
    mounted() {
      this.getData()
    },


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
  .repudiv:hover{
    transform:scale(1.05);
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
  .bbb:hover{
    transform: scale(1.05);
    position: relative;
    top: -7px;
  }
  .img-shadow-1
  {
    transition:all .6s ease-in-out;

  }

  .img-shadow-1:hover
  {
    transition:all .4s ease-in-out;

  }

</style>
