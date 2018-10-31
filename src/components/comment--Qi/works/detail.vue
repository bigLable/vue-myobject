<template>
  <div class="menu">
    <br><br><br>
    <div  class="big">
      <div>
        <div class="block"style="width: 800px">
          <span class="demonstration"></span>
          <el-carousel height="450px">
            <el-carousel-item  v-for="work in detail" >
              <img :src="work.Dpic" alt="">
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
          <div  >
           <el-button type="success" id="type" :plain="true" @click="getdata ">  发表评论</el-button>

        </div>
          <!-- Button trigger modal -->


        </div>
      </div>

      </div>
    <h3 id="lj">留言板</h3>
    <div class="box1 shadow1"id="lk"v-for="comment in com">

      <p style="font-size: 14px">用户：{{comment.userName}}</p>
      <p style="font-size: 13px">{{comment.commentsContent}}
      </p>
      <div class="circle"></div>
    </div>
    <!--<div  style="height: 150px">-->
      <!--<ul class="list-group">-->
        <!--<li class="list-group-item">用户：{{con.userName}}</li>-->
        <!--<li class="list-group-item">评论：{{con.commentsContent}}</li>-->
        <!--<li class="list-group-item">评论时间：{{con.commentsDate}}</li>-->

      <!--</ul>-->

    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--<div id="lk">-->
    <!--<div class="bt-box" v-for="comment in com" >-->
      <!--<a  class="xiaoA bg-1">{{comment.commentsContent}}</a>-->
      <!--<p class="top bt-box-p">用户：{{comment.userName}}</p>-->
      <!--<p class="bottom bt-box-p">评论时间：{{comment.commentsDate}}</p>-->
    <!--</div>-->

    <!--</div>-->

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
  </div>

</template>

<script>

  import {formatDate} from '../../../../static/js/date';
  import $ from 'jquery'
  import axios from 'axios'
  export default {
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

      }

    },

    methods: {

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
          console.log(result.data);
          _this.com = result.data;
          console.log(_this.com);

        })
        this.dialogVisible = false


      },
      // getcomm() {
      //   let _this = this;
      //   axios.get('http://localhost:3000/works/getcom?id=' + `${this.$route.params.id}`).then(function (result) {
      //     console.log('============== =====');
      //     // console.log(result.data)
      //     _this.com = result.data;
      //     // alert(JSON.stringify(_this.allare));
      //
      //   }, function (err) {
      //     console.log(err);
      //   })
      //
      // },


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

      // addcomments(){
      //   let _this = this
      //   axios.get('http://localhost:3000/works/addcomments?commentsContent=' + `${_this.content}&UserID=${_this.$store.state.user}&worksId=${this.$route.params.id}&commentsDate=${new Date()}`).then(function (result) {
      //     // adrename:_this.form.name;
      //     alert('地址添加成功！！')
      //     _this.getcomm()
      //     console.log('==============地址 =====');
      //     console.log(result.data.data[0])
      //     // _this.info=result.data.data[0]
      //     // _this.info.push({Adressid:_this.info[_this.info.length-1].Adressid+1,adrename:_this.formLabelAlign.name})
      //     // alert(_this.formLabelAlign.name)
      //   }, function (err) {
      //     console.log(err);
      //   })
      // },



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
    position: absolute;
    width: 200px;
    left: 1000px;
    top: 250px;
  }
#ll{
  position: absolute;
  width: 200px;
  left: 980px;
  top: 100px;
}
#lk{
   position: relative;
   width: 200px;
   left: 1000px;
   top: -200px;
 }
#lj{
  position: absolute;
  width: 200px;
  left: 1100px;
  top: 450px;
}
  #type{
    position: absolute;
    width: 100px;
    left: 1100px;
    top: 320px;
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
.bt-box .bg-1{background:#62aeff;}

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
  background: #2f7fd5;
  text-decoration: none;}


*,
*::before,
*::after {
  box-sizing: inherit;
}


.box1 {
  width: 15%;
  min-width: 350px;
  display: block;
  height: 100px;
  position: relative;
  border-radius: 5px;
  background: linear-gradient(to right, #abbd73 35%, #d6e2ad 100%);
  margin-bottom: 40px;
  padding: 15px 25px 0 40px;
  color: darkslategray;
  box-shadow: 1px 2px 1px -1px #777;
  transition: background 200ms ease-in-out;
  text-align:right;
}

.box1 a{color:#fff;text-decoration:none;}

.shadow1 {
  position: relative;
}
.shadow1:before {
  z-index: -1;
  position: absolute;
  content: "";
  bottom: 13px;
  right: 7px;
  width: 75%;
  top: 0;
  box-shadow: 0 15px 10px #777;
  -webkit-transform: rotate(4deg);
  transform: rotate(4deg);
  transition: all 150ms ease-in-out;
}

.box1:hover {
  background: linear-gradient(to right, #abbd73 0%, #abbd73 100%);
}

.shadow1:hover::before {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  bottom: 20px;
  z-index: -10;
}

.circle {
  position: absolute;
  top: 14px;
  left: 15px;
  border-radius: 50%;
  box-shadow: inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5), inset 0 0 0 25px antiquewhite;
  width: 20px;
  height: 20px;
  display: inline-block;
  text-align:right;
  padding:0 20px 0 0;
}
</style>
