<template>
    <div>
      <p>购物车商品</p>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
    </div>
</template>

<script>

    export default {
        name: "tsCardata",
        data(){
          return {
            info:'aaa',
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }]

          }
        },
      methods:{
        getData:function(){

          var _this = this;

          axios({
            method:'get',
            url:'http://localhost:3000/shoppingCart/getAlladres'
          }).then(function(result){
            console.log(result.data);
            _this.info = result.data;

          },function(err){
            console.log(err);
          })
        }
      }

    }

</script>

<style scoped>

</style>
