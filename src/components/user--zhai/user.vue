<template>
  <div class="container" style="margin-bottom:300px">

    <span class="title">个人中心</span>
    <div class="menu">
      <el-col :span="24">
        <el-menu
          default-active="2"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="1" @click="select(1)">
            <span slot="title" to="/user" >我的资料</span>
          </el-menu-item>

          <el-menu-item index="2" @click="select(2)">
            <span slot="title">已完成订单</span>
          </el-menu-item>
          <el-menu-item index="3" @click="select(3)">
            <span slot="title"  >地址管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
    <div class="body" v-show="index==1" >
      <div class="pic"></div>
      <router-link role="presentation" to="/changeinfo">
        <el-button class="btn">修改资料</el-button>
      </router-link>
      <div class="main">
        <span>用户名：{{user.userName}}</span><br><br>
        <span v-if="user.userSex==1?'男':'女'">性别：{{user.userSex==1?'男':'女'}}</span><br><br>
        <span>邮箱:{{user.userEmail}}</span><br><br>
        <span>手机号码：{{user.userPhoneNum}}</span><br><br>
        <span>注册时间:{{user.userRegisterDate}}</span><br><br>
      </div>
    </div>
    <div style="background-color: white;width: 900px;height: 900px;margin: 0 auto">
      <table class="table table-hover odertd" v-show="index==2" >
        <tr >
          <td style="background-color: dodgerblue">商品图片</td>
          <td style="background-color: dodgerblue">商品名称</td>
          <td style="background-color: dodgerblue">商品属性</td>
          <td style="background-color: dodgerblue">商品数量</td>
          <td style="background-color: dodgerblue">商品单价(元)</td>
          <td style="background-color: dodgerblue">商品总价(元)</td>
          <td style="background-color: dodgerblue;width:110px">收货地址</td>
          <td style="background-color: dodgerblue">交易时间</td>
        </tr>
        <tr v-for="(goodIfo,inde) in  oderIfo" >
          <td style="width:20%;"><span><img :src="goodIfo.商品图片" alt="" class="img-responsive" style="width:30%;"></span></td>
          <td >{{goodIfo.as商品名称}}</td>
          <td style="width:20%;padding: 5px">{{goodIfo.商品规格}}</td>
          <td style="text-align: center">{{goodIfo.商品数量}}</td>
          <td style="text-align: center">{{goodIfo.商品价格}}</td>
          <td style="text-align: center">{{(goodIfo.商品数量)*(goodIfo.商品价格)}}</td>
          <td style="text-align: center">{{goodIfo.收货地址}}</td>
          <td style="text-align: center">{{goodIfo.下单时间}}</td>
        </tr>

      </table>
      <div  style="background-color: white;width: 900px;height: 900px;margin: 80px auto">

        <table class="table"  v-show="index==3">
          <thead>
          <tr class="success">
            <td >收货地址</td>
            <td><span >删除操作</span></td>
            <td class="edit" style="text-align: center" >
              <el-button type="text" @click="dialogFormVisible = true">添加地址</el-button>
            </td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(adres,index) in allare">
            <td>{{index+1}}<span style="margin-left: 10%">{{adres.adrename}}</span>

            </td>
            <td ><span style="cursor: pointer" @click="deleadre(adres.Adressid,index+1)" class="glyphicon glyphicon-trash"></span></td>
          </tr>

          </tbody>
        </table>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="添加地址名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false"><span @click="address">确 定</span></el-button>
          </div>
        </el-dialog>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import $ from 'jquery'
  export default {
    name: "user",
    data(){
      return{

        oderIfo:[],
        allare:[],
        user:[],
        index:1,
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'

      }
    },
    methods: {

      //增加地址
      address(){
        let _this=this
        axios.get('http://localhost:3000/shoppingCart/addadres?adrename='+`${_this.form.name}&userId=${_this.$store.state.user}`).then(function(result){
          // adrename:_this.form.name;
             alert('地址添加成功！！')
          this.getAllare()
          console.log('==============地址 =====');
          console.log(result.data.data[0])
          // _this.info=result.data.data[0]
          // _this.info.push({Adressid:_this.info[_this.info.length-1].Adressid+1,adrename:_this.formLabelAlign.name})
          // alert(_this.formLabelAlign.name)
        },function(err){
          console.log(err);
        })
      },
      //删除地址
      deleadre(adresid,index){
         let  _this=this
        axios.get('http://localhost:3000/shoppingCart/deleteadres?Adressid='+`${adresid}`).then(function(result){
          console.log('============== =====');
          // console.log(result.data)

          confirm(`确定删除第${index}条吗？`)
           window.location.reload()
          this.index=3
        },function(err){
          console.log(err);
        })

      },
         handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      select(index){
        this.index=index;
      },
      getuser(){
       let _this=this
        $.post("http://localhost:3000/users/getOneUser",
          {
            userEmail:_this.$store.state.userEmail
          },
          function(res){
            // alert(JSON.stringify(res.data[0]))
            _this.user=res.data[0]
          });

      },
      getAllare(){
        let _this = this;
        axios.get('http://localhost:3000/shoppingCart/getAlladres?userId='+`${_this.$store.state.user}`).then(function(result){
          console.log('============== =====');
          // console.log(result.data)
          _this.allare = result.data.data[0];
          // alert(JSON.stringify(_this.allare));

        },function(err){
          console.log(err);
        })

      },
      getdetail(){
        let _this = this;
        axios.get('http://localhost:3000/shoppingCart/getAlloderdetail?userID='+`${_this.$store.state.user}`).then(function(result){
          console.log('============== =====');
          // console.log(result.data)
          _this.oderIfo = result.data.data[0];
          // alert(JSON.stringify(_this.oderIfo[0].商品图片));

        },function(err){
          console.log(err);
        })
        // this.buyedifo=this.$store.state.inf
      }
    },
    mounted:function () {
      // alert(JSON.stringify(this.$store.state.inf))
      this.getuser()
      this.getAllare()
      this.getdetail()
    },
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0
  }
  .edit:hover{
    background-color: #6ee68b;
    cursor: pointer;
    color: blue;
  }
 .odertd{
   padding: 5px;
   width: 900px;
  margin: 80px auto;
   background-color: white;;
}
  .container {
    width: 100%;
    height: 700px;
    background-color: #f4f4f4;
  }

  .title {
    display: block;
    font-size: 35px;
    color: grey;
    position: absolute;
    margin-left: 50px;
    margin-top: 80px;
  }

  .menu {
    width: 250px;
    height: 500px;
    position: absolute;
    float: left;
    margin-left: 15px;
    margin-top: 150px;
  }

  .body {
    width: 900px;
    height: 600px;
    background-color: white;
    margin: 0 auto;
    margin-top: 80px;
  }

  .pic {
    width: 200px;
    height: 200px;
    background-image: url('../../assets/pic.jpg');
    position: absolute;
    margin-left: 50px;
    margin-top: 50px;
  }

  .btn {
    margin-left: 100px;
    margin-top: 280px;
  }

  .main {
    width: 400px;
    height: 400px;
    margin-left: 320px;
    margin-top: -200px;
    font-size: 18px;
    font-family: "PingFang SC", sans-serif;
  }
</style>
