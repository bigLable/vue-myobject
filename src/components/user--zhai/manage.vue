<template>
 <div class="container">
    <div class="head">
      <span>后台管理</span>
      <el-input v-model="input" placeholder="请输入商品编号" class="input"></el-input>
    </div>
   <div class="left">
     <el-row class="tac">
       <el-col>
         <el-menu
           default-active="2"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b">
           <el-submenu index="1" style="width: 239px">
             <template slot="title">
                <span style="margin-top:0px">商品管理</span>
             </template>
             <el-menu-item-group>
               <template slot="title">分组一</template>
               <router-link to="/manage"><el-menu-item index="1-1">商品信息</el-menu-item></router-link>
             </el-menu-item-group>
           </el-submenu>
         </el-menu>
       </el-col>
     </el-row>
   </div>
   <div class="main">
     <el-table
       :data="tableData3"
       height="700"
       style="width: 100%">
       <el-table-column
         prop="id"
         label="商品编号"
         width="180">
       </el-table-column>
       <el-table-column
         prop="name"
         label="商品名称"
         width="180">
       </el-table-column>
       <el-table-column
         prop="price"
         label="商品价格">
       </el-table-column>
       <el-table-column label="操作">
         <template slot-scope="scope">
           <el-button
             size="max"
             @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
           <el-button
             size="max"
             type="danger"
             @click="handleDelete(scope.$index, scope.row)">删除</el-button>
         </template>
       </el-table-column>
     </el-table>
   </div>
 </div>
</template>

<script>
    export default {
      name: "manage",
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        }
      },
      data() {
        return {
          input:'',
          tableData3: [{
            id: '2016-05-03',
            name: '王小虎',
            price: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: '2016-05-02',
            name: '王小虎',
            price: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: '2016-05-04',
            name: '王小虎',
            price: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: '2016-05-01',
            name: '王小虎',
            price: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: '2016-05-08',
            name: '王小虎',
            price: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: '2016-05-06',
            name: '王小虎',
            price: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: '2016-05-07',
            name: '王小虎',
            price: '上海市普陀区金沙江路 1518 弄'
          }]
        }
      }
    }
</script>

<style scoped>
  *{margin:0;padding:0}
  .container{
    width:100%;
    height:700px;
  }
  .head{
    width:100%;
    height:100px;
    background-image:url('../../assets/head.jpg');
  }
  .input{
    width:200px;
    margin-left:1000px;
    margin-top:50px
  }
  span{
    position:absolute;
    display: block;
    font-size:30px;
    margin-top:30px;
    margin-left:30px;
    color: #cec5d4;
  }
  .left{
    width:239px;
    height:700px;
    background-color:#545c64;
    float:left
  }
  .main{
    width:1110px;
    height:700px;
    float:left
  }

</style>
