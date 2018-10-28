<template>
  <div>
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

        <div id="ll" v-for="work in works" > <ul class="list-group">
          <li class="list-group-item">作者：{{work.worksauthor}}</li>
          <li class="list-group-item">作品描述:{{work.worksDescribe}}</li>
          <li class="list-group-item">拍摄器材：{{work.worksEquipment}}</li>
        </ul>
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
           <el-button type="success" id="type" :plain="true" @click="getdata"> 发表评论</el-button>
        </div>
        </div>
      </div>

      </div>
    <h1>热评</h1>

    <div  v-for="con in com" style="height: 300px">
      <ul class="list-group">
        <li class="list-group-item">用户：{{con.userName}}</li>
        <li class="list-group-item">评论：{{con.commentsContent}}</li>
        <li class="list-group-item">评论时间：{{con.commentsDate}}</li>

      </ul>

    </div>

  </div>

</template>

<script>
  import {formatDate} from '../../../../static/js/date';
  import $ from 'jquery'
  import axios from 'axios'
  export default {
    name: "detail",
    data() {
      return {
        works:[],
        com:[],
        detail:[],
       content:'',
        date:formatDate(new Date(), 'yyyy-MM-dd hh:mm'),
        wor:this.$route.params.id,
        id:1,

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
      getdata(){
        let _this=this;
        $.post('http://localhost:3000/works/addcomments',
          {
            commentsContent:_this.content,
              commentsDate:_this.date,
                     worksId:_this.wor,
                 UserID:_this.id,

          },function(res){
            alert('发表成功！')
          })
        this.$router.go(0)
      },
      getcom:function() {
        let _this = this;
        axios.get('http://localhost:3000/works/getcom?id=' + `${this.$route.params.id}`).then(function (result) {
          console.log(result.data);
          _this.com = result.data;
          console.log(_this.com);

        })
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

  .item {
    margin-top: 10px;
    margin-right: 40px;
    position: absolute;
    left: 1000px;
    top:150px;
  }

  #like {
    position: absolute;
    left: 1100px;
    top: 150px;
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
    top: 350px;
  }
#ll{
  position: absolute;
  width: 200px;
  left: 1000px;
  top: 200px;
}
  #type{
    position: absolute;
    width: 100px;
    left: 1100px;
    top: 420px;
  }
.big{
height: 600px;
}
  h1{
    text-align: center;
  }
li{
  text-decoration: none;

}


</style>
