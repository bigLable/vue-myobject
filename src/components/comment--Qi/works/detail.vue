<template>
  <div >
    <div style="background-image:url('https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/02/0A/ChMkJ1bKz1GIIl7YAA6JdnjyzesAALJTwOqxhYADomO449.jpg'); background-position: center center;
 background-attachment: fixed;background-repeat: no-repeat;background-size: cover;">
      <div style="height: 450px"></div>
      <div style="width: 1100px;background: #ffffff; margin: 0 auto;">
  <div class="menu" >
    <br><br><br>
    <div  class="big col-xs-12">
      <div>
        <div class="block"style="width: 700px">
          <span class="demonstration"></span>
          <el-carousel height="550px">
            <el-carousel-item   v-for="work in detail"   >
              <viewer >
                <img :src="work.Dpic" alt="" class="img-responsive">
              </viewer>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div >
          <div class="bt-box"v-for="work in works" id="ll">

            <a  class="xiaoA bg-1">作者：{{work.worksauthor}}</a>
            <p class="top bt-box-p">作品描述:{{work.worksDescribe}}</p>
            <p class="bottom bt-box-p">拍摄器材：{{work.worksEquipment}}</p>



          </div>
          <div class="text">
            <el-input
              type="textarea"
              :rows="2"
              n placeholder="请输入内容"
              v-model=" content"
            >
            </el-input>

          </div>
          <el-button type="success" id="type" :plain="true" @click="getdata ">  发表评论</el-button>
        </div>
      </div>
    </div>
    </div>

        <h3 id="lj">留言板</h3>
        <div v-for="(activity,index) in myActData1" style="width: 800px;margin: 0 auto;">
          <hr>
    <div class="box1 shadow1"id="lk">

      <p style="font-size: 14px;margin-left: -50px"><img :src="activity.userPic" alt=""class="img-responsive"style="height: 20px;width: 20px;display: inline">{{activity.userName}}</p>

      <p style="font-size: 13px">评论:{{activity.commentsContent}}

      </p>
      <p style="font-size: 13px">时间:{{activity.commentsDate|formatDate}}
      </p>
    </div>

        </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="28%"
      :show-close="false"
      :close-on-press-escape="false"
    >
      <span style="color: #2e6da4 ;font-size: 18px;height: 20px" >评论成功！</span>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="getcom">确定</el-button>
  </span>
    </el-dialog>
        <br>
        <div style="height: 300px;text-align: center">
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
      <div style="height: 150px"></div>
  </div>

  </div>

</template>

<script>

  import {formatDate} from '../../../../static/js/date';
  import $ from 'jquery'
  import axios from 'axios'
  export default {
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    },
    inject:['reload'],
    name: "detail",

    data() {

      return {
        works:[],
        com:[],
        detail:[],
        content:'',
        date:formatDate(new Date(), 'yyyy-MM-dd hh:mm'),
        wor:this.$route.params.id,
        id: this.$store.state.user,
        dialogVisible: false,
        mydata: [],
        pageIndex: 1,
        pagesize: 6,  //每页条数
        pageCount:0,
        info:[],
        activitys:[],


      }

    },
    computed:{
      myActData1(){
        return this.activitys;
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
          this.activitys.push(this.myActData[i])
        }
      },
      change(){
        return this.loadData();
      },

      getData:function() {
        let _this = this;
        axios.get('http://localhost:3000/works/getOneWorks?id=' + `${this.$route.params.id}`).then(function (result) {
          console.log(result.data);
          _this.works = result.data;
          console.log(_this.works);

        })
      },
      getcom:function() {
        let _this = this;
        axios.get('http://localhost:3000/works/getcom?id=' + `${this.$route.params.id}`).then(function (result) {
          console.log('---');
          console.log(result.data)
          _this.myActData = result.data;
          _this.pageCount=_this.myActData.length;
          // console.log(_this.pageCount)
          _this.loadData()
          console.log(_this.myActData);
        },function(err){
          console.log(err)

        })
        this.dialogVisible = false


      },

      getdata(){
        if(this.$store.state.user==''){
          this.$message({
            showClose: true,
            message: '请先登录！！',
            type: 'warning'
          });
          return false;

        }
        else if (this.content == ''|| this.content!==this.content.replace(/(^\s*)|(\s*$)/g,"")) {
          this.$message({
            showClose: true,
            message: '请输入内容，不可有空格！！',
            type: 'warning'
          });
          return false;
        }

        let _this=this;
        $.post('http://localhost:3000/works/addcomments',
          {
            commentsContent:_this.content,
            commentsDate:_this.date,
            worksId:_this.wor,
            UserID:_this.id,

          }
        )
          ,
          this.content=''
        this.getcom()
        this.dialogVisible = true
      },



      getworksD:function() {
        let _this = this;
        axios.get('http://localhost:3000/works/getworksD?id=' + `${this.$route.params.id}`).then(function (result) {
          console.log(result.data);
          _this.detail = result.data;
          console.log(_this.detail);

        })
      },



    },
    mounted:function(){
      this.getData();
      this.getcom();
      this.getworksD()
      console.log('id value'+this.$route.params.id)
    }

  }
</script>

<style scoped>

  img {
    height: 450px;
    margin-left:50px;

  }


  span {
    font-size: 24px;
    color: rgba(255, 0, 0, 0.62);
  }

  span:hover {
    font-size: 28px;
    cursor: pointer;
  }

  .text {
    position: relative;
    width: 200px;
    left: 790px;
    top: -400px;
  }
  #ll{
    position: relative;
    width: 100px;
    left:220px;
    top: -400px;
  }

  #lj{
   text-align: center;


  }
  #type{
    position: relative;
    width: 100px;
    left:880px;
    top:-380px;
  }
  .big{
    height: 600px;

  }
  h1{
    text-align: center;
  }
  .bt-box{
    width:300px;
    height: 40px;
    margin: 50px auto;
    position: relative;
  }
  .bt-box .bg-1{background: #fc9d9a;}

  .bt-box .xiaoA{
    display:block;
    width:300px;
    height:50px;
    position: absolute;
    z-index: 2;
    color: white;
    font: 17px/50px Helvetica, Verdana, sans-serif;
    text-decoration: none;
    text-align: center;
  }
  .bt-box .xiaoA, .bt-box-p {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;

    -webkit-box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
    -moz-box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
    box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
  }
  .bt-box .bt-box-p{
    background: #222 ;
    display: block;
    height: 40px;
    width: 280px;
    margin: 0 0 0 10px;
    text-align: center;
    font: 12px/45px Helvetica, Verdana, sans-serif;
    color:#fff;
    position: absolute;
    z-index: 1;
    transition: margin 0.5s ease;
  }
  .bt-box:hover .bottom {
    margin: 40px 0 0 10px;
  }
  .bt-box:hover .top {
    margin: -30px 0 0 10px;
    line-height: 35px;
  }
  .bt-box .xiaoA:hover {
    color: #fff;
    background: #fc9d9a;
    text-decoration: none;}


  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
.box1{
   background: rgba(183, 255, 205, 0.46);
    color: #000000;

    position:relative;
    height:100px;
    font-size:1.6em;
    padding:0 2em;
    cursor:pointer;
    transition:800ms ease all;
    outline:none;

  }
  .box1:hover{
    background:#fff;
    color: #000000;
  }
  .box1:before,.box1:after{
    content:'';
    position:absolute;
    top:0;
    right:0;
    height:2px;
    width:0;
    background: #769c8a;
    transition:400ms ease all;
  }
  .box1:after{
    right:inherit;
    top:inherit;
    left:0;
    bottom:0;
  }
  .box1:hover:before,.box1:hover:after{
    width:100%;
    transition:800ms ease all;
  }



</style>
