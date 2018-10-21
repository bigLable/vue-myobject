<template>
  <div>
    <div class="" v-for="work in info">
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <img :src="work.worksPic" alt="...">
          <div class="caption">
            <h3 >{{work.worksDescribe}}</h3>
            <p><router-link role="presentation" :to="'/comment/'+work.worksId"><a href="#" class="btn btn-primary" role="button">&nbsp;详情&nbsp;</a> </router-link><a href="#" class="btn btn-default" role="button">Button</a></p>
            <h4>{{work.worksDate}}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <span class="demonstration">&nbsp;</span>
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "newworks",
    data(){
      return{
        info:[],

      }
    }
    , mounted(){
      let _this = this;
      axios.get('http://localhost:3000/works/newworks').then(function(result){
        console.log('---');
        console.log(result.data)
        _this.info = result.data;
        console.log(_this.info);
      },function(err){
        console.log(err)

      })
    }
  }
</script>

<style scoped>
  .block{
    padding-left: 40%;
  }
</style>
