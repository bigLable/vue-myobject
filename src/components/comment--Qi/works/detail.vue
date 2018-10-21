<template>
  <div>
    <br><br><br>
    <div  v-for="work in works" class="big">
      <div>
        <div >
       <img :src="work.worksPic" alt="..." class=" img-responsive img-thumbnail"></div>
        <div >
          <el-badge :value="200" :max="99" class="item">
            <el-button size="small">评论</el-button>
          </el-badge>
        <div id="like" ><span class="glyphicon glyphicon glyphicon-thumbs-up  " aria-hidden="true"></span></div>
        <div id="ll"> <ul class="list-group">
          <li class="list-group-item">作者：</li>
          <li class="list-group-item">作品名称：</li>
          <li class="list-group-item">拍摄器材：</li>
        </ul>
        </div>
        <div class="text">
          <el-input
            type="textarea"
            :rows="2"
            n placeholder="请输入内容"
            v-model="textarea"
          >
          </el-input>
        </div>
          <el-button type="success" id="type" :plain="true" @click="open2">发表评论</el-button>
        </div>

      </div>


    </div>


  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: "detail",
    data() {
      return {
        textarea: '',
        works:[],
      }

    },
    methods: {

      open2() {
        this.$message({
          message: '评论成功！',
          type: 'success',
        });
      },

      getData:function() {
        let _this = this;
        axios.get('http://localhost:3000/works/getOneWorks?id=' + `${this.$route.params.id}`).then(function (result) {
          console.log(result.data);
          _this.works = result.data;
          console.log(_this.works);

        })
      }

    },
    mounted:function(){
      this.getData()
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
height: 800px;
}

</style>
