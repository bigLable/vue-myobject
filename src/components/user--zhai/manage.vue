<template>
 <div class="container">
    <div class="head">
      <span>后台管理</span>
      <el-input v-model="input" placeholder="请输入商品编号" class="input"></el-input>
      <el-button plain class="btn">搜索</el-button>
      <el-button plain class="btn">新增商品</el-button>
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
     <table width="100%" border="0" cellspacing="0" cellpadding="0" id="order">
       <tr class="title">
         <td>商品名称</td>
         <td>数量</td>
         <td>单价</td>
         <td>操作</td>
       </tr>
       <tr id="row1">
         <td>玫瑰保湿睡眠面膜</td>
         <td>5</td>
         <td>&yen;48</td>
         <td><input name="del" type="button" value="删除" onclick='delRow("row1")' />
           <input name="edit" type="button" value="修改"  onclick='editRow("row1")' /></td>
       </tr>
       <tr>
         <td style="text-align:center; height:30px;" colspan="4">
           <input name="bsn" type="button" value="增加定单" onclick="addRow()" /></td>
       </tr>
     </table>

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
      data(){
      return {
        input: ''
      }}},

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
    margin-left:900px;
    margin-top:50px;
    margin-right:10px
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
  .btn{
    width:80px;
    height:40px;
  }
</style>
