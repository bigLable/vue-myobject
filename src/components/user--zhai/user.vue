<template>
  <div class="container">
    <div id="menu">
      <!--显示菜单-->
      <div id="open">
        <div class="navH">
          个人中心
          <span><img class="obscure" alt=""></span>
        </div>
        <div class="navBox">
            <ul>
              <li>
                <h2 class="obtain" index="1" @click="select(1)" ><span slot="title" to="/user">我的资料</span><i></i></h2>
              </li>
              <li>
                <h2 class="obtain" index="2" @click="select(2)"><span slot="title">已完成订单</span><i></i></h2>
              </li>
              <li>
                <h2 class="obtain" index="3" @click="select(3)"><span slot="title">地址管理</span><i></i></h2>
              </li>
            </ul>
        </div>
      </div>
    </div>
   <!-- <div class="menu">
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
    </div>-->
    <div class="body" v-show="index==1">
      <div class="pic"><img :src="this.$store.state.headPic" style="width: 100px;" class="img-responsive"/></div>
      <router-link role="presentation" to="/changeinfo">
        <el-button type="info" plain  class="btn" style="font-size:15px;font-weight: bold">修改资料</el-button>
      </router-link>
      <div class="main">
        <span>用户名： {{user.userName}}</span><br><br>
        <span v-if="sex==1?'男':'女'">性别： {{sex==1?'男':'女'}}</span><br><br>
        <span>邮箱: {{user.userEmail}}</span><br><br>
        <span>手机号码： {{user.userPhoneNum}}</span><br><br>
        <span>注册时间:  {{user.userRegisterDate}}</span><br><br>
      </div>
    </div>
    <div style="background-color: white;width: 900px;height: 700px;margin-left:300px;text-align: center;font-family:Arial,sans-serif;"v-show="index==2">
      <table class="table table-hover odertd">
        <tr>
          <td style="background-color: #ddd0ff; font-weight: bold">商品图片</td>
          <td style="background-color: #ddd0ff; font-weight: bold">商品名称</td>
          <td style="background-color: #ddd0ff; font-weight: bold">商品属性</td>
          <td style="background-color: #ddd0ff; font-weight: bold">商品数量</td>
          <td style="background-color: #ddd0ff; font-weight: bold">商品单价(元)</td>
          <td style="background-color: #ddd0ff; font-weight: bold">商品总价(元)</td>
          <td style="background-color: #ddd0ff; font-weight: bold;width:110px">收货地址</td>
          <td style="background-color: #ddd0ff; font-weight: bold;width:110px">手机号</td>
          <td style="background-color: #ddd0ff; font-weight: bold">交易时间</td>
        </tr>
        <tr v-for="(goodIfo,inde) in  oderIfo">
          <td style="width:20%;"><span><img :src="goodIfo.商品图片" alt="" class="img-responsive" style="width:30%;margin-left:50px;"></span>
          </td>
          <td>{{goodIfo.as商品名称}}</td>
          <td style="width:20%;padding: 5px">{{goodIfo.商品规格}}</td>
          <td style="text-align: center">{{goodIfo.商品数量}}</td>
          <td style="text-align: center">{{goodIfo.商品价格}}</td>
          <td style="text-align: center">{{(goodIfo.商品数量)*(goodIfo.商品价格)}}</td>
          <td style="text-align: center">{{goodIfo.收货地址}}</td>
          <td style="text-align: center">{{goodIfo.手机号}}</td>
          <td style="text-align: center">{{goodIfo.下单时间}}</td>
        </tr>
      </table>
    </div>
      <div style="background-color: white;width: 900px;height: 680px;margin-left:300px;margin-top:75px; " v-show="index==3">
        <table class="table">
          <thead>
          <tr class="success">
            <td>收货地址</td>
            <td><span>删除操作</span></td>
            <td class="edit" style="text-align: center"@click="dialogFormVisible = true">
              <el-button type="text">添加地址</el-button>
            </td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(adres,index) in allare">
            <td>{{index+1}}<span style="margin-left: 10%">{{adres.adrename}}</span>
            </td>
            <td><span style="cursor: pointer" @click="deleadre(adres.Adressid,index+1)"
                      class="glyphicon glyphicon-trash"></span></td>
          </tr>
          </tbody>
        </table>
        <div><el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <div slot="footer" class="dialog-footer" style="height:400px;"><el-form :model="form">
            <el-form-item label="添加地址名称" :label-width="formLabelWidth">
             <v-distpicker province="广东省" city="广州市" area="海珠区" @selected="onSelected" type="mobile"></v-distpicker>
              <el-input v-model="form.addre" autocomplete="off" placeholder="请输入具体地址"></el-input>
            </el-form-item>
          </el-form>
              <el-button type="primary" @click="dialogFormVisible = false"><span @click="address">确 定</span></el-button>
          </div>
        </el-dialog>
        </div>
      </div>
  </div>
</template>

<script>

  window.onload = function () {
    var flag = true;
    var liC = document.querySelectorAll(".navBox li h2");
    // 主导航nav点击事件
    for (var i = 0; i < liC.length; i++) {
      liC[i].onclick = function () {
        if (flag) {
          // 节流阀
          flag = false;
          setTimeout(function () {
            flag = true;
          }, 500)
          // 自点
          if (this.className === "obFocus") {
            this.querySelector("i").classList.remove("arrowRot");
            getNext(this).style.height = "0";
            this.classList.add("obtain");
            this.classList.remove("obFocus");
            return
          }

          var sec = getNext(this);
          var sib = siblings(sec.parentNode);
          var otherArr = [];
          var arrowClass = [];
          // 排他 secondary arrowRot obFocus
          for (var j = 0; j < sib.length; j++) {
            var sibSec = sib[j].getElementsByTagName('*');
            for (var i = 0; i < sibSec.length; i++) {
              if (sibSec[i].className == "secondary") {
                otherArr.push(sibSec[i])
              }
              if (sibSec[i].className == "arrowRot") {
                arrowClass.push(sibSec[i])
              }
              if (sibSec[i].className == "obFocus") {
                sibSec[i].classList.remove("obFocus");
                sibSec[i].classList.add("obtain");

              }
            }
          }
          for (var i = 0; i < otherArr.length; i++) {
            otherArr[i].style.height = "0";
          }
          if (arrowClass[0]) {
            arrowClass[0].classList.remove("arrowRot");
          }

          // 留自己
          sec.style.height = 2.5078 + "rem";
          this.getElementsByTagName("i")[0].classList.add("arrowRot");
          this.classList.remove("obtain");
          this.classList.add("obFocus");
        }

      }
    }

    // 子导航点击事件
    var seconC = document.querySelectorAll(".secondary h3")
    for (var i = 0; i < seconC.length; i++) {
      seconC[i].onclick = function () {
        for (var i = 0; i < seconC.length; i++) {
          seconC[i].classList.remove("seconFocus");
        }
        this.classList.add("seconFocus");
      }
    }

  }

  function getByClass(clsName, parent) {
    var oParent = parent ? document.getElementById(parent) : document,
      boxArr = new Array(),
      oElements = oParent.getElementsByTagName('*');
    for (var i = 0; i < oElements.length; i++) {
      if (oElements[i].className == clsName) {
        boxArr.push(oElements[i]);
      }
    }
    return boxArr;
  }

  // 获取下一个兄弟元素
  function getNext(node) {
    if (!node.nextSibling) return null;
    var nextNode = node.nextSibling;
    if (nextNode.nodeType == 1) {
      return nextNode;
    }
    return getNext(node.nextSibling);
  }

  // 获取除了自己以外的其他亲兄弟元素
  function siblings(elem) {
    var r = [];
    var n = elem.parentNode.firstChild;
    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        r.push(n);
      }
    }
    return r;
  }

  /* rem 适应*/
  /*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
  var html = document.getElementsByTagName('html')[0];
  /*取到屏幕的宽度*/
  var width = window.innerWidth;
  /* 640 100  320 50 */
  if (width > 1080) {
    width = 1080;
  }
  else if (width < 320) {
    width = 320;
  }
  var fontSize = 100 / 1080 * width;
  /*设置fontsize*/

  html.style.fontSize = fontSize + 'px';
  window.onresize = function () {
    var html = document.getElementsByTagName('html')[0];
    /*取到屏幕的宽度*/
    var width = window.innerWidth;
    if (width > 1080) {
      width = 1080;
    }
    else if (width < 320) {
      width = 320;
    }
    /* 640 100  320 50 */
    var fontSize = 100 / 1080 * width;
    /*设置fontsize*/
    html.style.fontSize = fontSize + 'px';
  }
  import axios from 'axios';
  import $ from 'jquery'

  export default {
    name: "user",
    data() {
      return {
           sex:'',
        oderIfo: [],
        allare: [],
        user: [],
        index: 1,
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          addre:'',
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

      onSelected(data) {
        this.form.name= data.province.value+data.city.value+data.area.value;
        alert(this.form.name)
      },
      //增加地址
      address() {
        let _this = this
        axios.get('http://localhost:3000/shoppingCart/addadres?adrename=' + `${_this.form.name+_this.form.addre}&userId=${_this.$store.state.user}`).then(function (result) {
          // adrename:_this.form.name;
          alert('地址添加成功！！')
          _this.form.name=''
          _this.getAllare()
          console.log('==============地址 =====');
          console.log(result.data.data[0])
          // _this.info=result.data.data[0]
          // _this.info.push({Adressid:_this.info[_this.info.length-1].Adressid+1,adrename:_this.formLabelAlign.name})
          // alert(_this.formLabelAlign.name)
        }, function (err) {
          console.log(err);
        })
      },
      //删除地址
      deleadre(adresid, index) {
        let _this = this
        axios.get('http://localhost:3000/shoppingCart/deleteadres?Adressid=' + `${adresid}`).then(function (result) {
          console.log('============== =====');
          // console.log(result.data)

          alert(`确定删除第${index}条吗？`)
          // window.location.reload()
          _this.getAllare()
        }, function (err) {
          console.log(err);
        })

      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      select(index) {
        this.index = index;
      },
      getuser() {
        let _this = this
        $.post("http://localhost:3000/users/getOneUser",
          {
            userEmail: _this.$store.state.userEmail
          },
          function (res) {
            // alert(JSON.stringify(res.data[0]))
            _this.user = res.data[0]
            _this.sex=res.data[0].userSex.data[0]
            alert('xingbie'+JSON.stringify(res.data[0].userSex.data[0]))
            // alert(JSON.stringify(res.data[0]))
          });

      },
      getAllare() {
        let _this = this;
        axios.get('http://localhost:3000/shoppingCart/getAlladres?userId=' + `${_this.$store.state.user}`).then(function (result) {
          console.log('============== =====');
          // console.log(result.data)
          _this.allare = result.data.data[0];
          // alert(JSON.stringify(_this.allare));

        }, function (err) {
          console.log(err);
        })

      },
      getdetail() {
        let _this = this;
        axios.get('http://localhost:3000/shoppingCart/getAlloderdetail?userID=' + `${_this.$store.state.user}`).then(function (result) {
          console.log('============== =====');
          // console.log(result.data)
          _this.oderIfo = result.data.data[0];
          // alert(JSON.stringify(_this.oderIfo[0].商品图片));

        }, function (err) {
          console.log(err);
        })
        // this.buyedifo=this.$store.state.inf
      },
      fade:function(){
        $('.a').addClass('animated bounceInLeft')
      }
    },
    created(){
      this.getuser()
    },
    mounted: function () {
      // alert(JSON.stringify(this.$store.state.inf))
      this.getuser()
      this.getAllare()
      this.getdetail()
    },

  }

</script>

<style scoped>
  @import '../../../static/css/menu.css';
  * {
    padding: 0;
    margin: 0
  }

  .edit:hover {
    background-color: #6ee68b;
    cursor: pointer;
    color: blue;
  }

  .odertd {
    padding: 5px;
    width: 900px;
    margin: 80px auto;
    background-color: white;;
  }

  .container {
    width: 100%;
    height: 700px;
    background-color: #f4f4f4;
    background:url('../../assets/change.jpg');
  }
  .body {
    width: 900px;
    height: 600px;
    color:white;
    margin: 0 auto;
    margin-top: 80px;
    margin-left:300px;
  }

  .pic {
    width: 200px;
    height: 200px;

    position: absolute;
    margin-left: 50px;
    margin-top: 50px;
  }

  .btn {
    width:200px;
    height:40px;
    margin-left: 50px;
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
  .divwrap{
    width:300px;
    height: 400px;
    overflow-y: auto;
    position: fixed;
  }
  .divwrap>>>.distpicker-address-wrapper{
    width:275px;
    height:300px;
       color: #999;
     }
  .divwrap>>>.address-header{
    width:400px;
    position: fixed;
    bottom: 400px;
    background: #fff;
    color:#000;
  }
  .divwrap>>>.address-header ul li{
    flex-grow:3;
    text-align: center;
  }

  .divwrap>>>.address-container .active{
    color: #000;
  }
  .divwrap>>>.distpicker-address-wrapper-select{
    width:100px;
    height:300px;
  }

</style>
