<template>
  <div class="container" >
    <h4>确认收货地址</h4>
    <h2 class="h2-dot" ></h2>
  <el-card class="box-card">
  <div class="container">

    <div class="col-sm-2">收货地址</div>
    <!--<div class="col-sm-2 " >删除</div>-->
    <!--<div class="col-sm-1  pointer" ><span @click="control">新增</span></div>-->
    <hr/>

      <div slot="header" class="clearfix">
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
    <el-radio-group v-model="radio2">

        <table class="table">
          <tr v-for="(text,index) in info"  :key="text.Adressid" class="text item">
            <td> <el-radio :label="text.Adressid"></el-radio> </td>
            <!--<td> <el-radio ></el-radio> </td>-->
            <td> {{'&nbsp;&nbsp;&nbsp;&nbsp;'+ text.adrename }}</td>
            <!--<td style="width:60%;text-align: right">-->
              <!--&lt;!&ndash;<span title="删除" class="glyphicon glyphicon-trash" @click='del(text.Adressid,text.adrename)'>&ndash;&gt;-->

            <!--</span>-->
            <!--</td>-->
          </tr>
        </table>
 </el-radio-group>
  </div>
    <div v-bind:style="{display:disp}" >
      <el-radio-group v-model="labelPosition" size="small">
      </el-radio-group>
      <div style="margin: 20px;"></div>
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="新增地址">
          <el-input v-model="formLabelAlign.name"></el-input>
          <button type="submit" class="btn btn-sm btn-danger" @click="control2" >确定</button>
        </el-form-item>
      </el-form>

    </div>
  </el-card>

  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "oderadress",

         data(){
          return {
            info: [],
              radio2:2,
              disp:'none',
             labelPosition: 'right',
             formLabelAlign: {
              name: '',
              region: '',
              type: ''
            }
          }
      },
      methods:{
        control(){
          this.disp='block'
        },
        control2(){
          let _this=this
          this.disp='none';
          axios.get('http://localhost:3000/shoppingCart/addadres?adrename='+`${_this.formLabelAlign.name}&userId=${_this.$store.state.user}`).then(function(result){
            console.log('==============地址 =====');
            console.log(result.data.data[0])
            _this.info=result.data.data[0]
            // _this.info.push({Adressid:_this.info[_this.info.length-1].Adressid+1,adrename:_this.formLabelAlign.name})
            // alert(_this.formLabelAlign.name)
          },function(err){
            console.log(err);
          })
        },
        del(num,st){
          let _this=this
          for(var i=0;i<this.info.length;i++){
            if (this.info[i].Adressid==num){
              // console.log('dayin.' +_this.info[i])
              this.info[i]=null
              console.log('dayin.' +this.info[i])

            }

          }
          this.disp='none';
          axios.get('http://localhost:3000/shoppingCart/deleteadres?Adressid='+`${num}`).then(function(result){
            console.log('============== =====');
            // console.log(result.data)

           confirm(`确定删除${st}吗？`)
            window.location.reload()
          },function(err){
            console.log(err);
          })

        }
      },
        mounted(){
        let _this = this;
          //_this.$store.commit('local', undefined)
          var id = JSON.parse(localStorage.getItem('state')).user
          axios.get(`http://localhost:3000/shoppingCart/getAlladres?userId=${id}`).then(function(result){
          console.log('============== =====');
          // console.log(result.data)
          _this.info = result.data.data[0];
          console.log(_this.info);

        },function(err){
          console.log(err);
        })

        },
      watch:{
          radio2(to,from){
            console.log("-s-s-"+to)
            console.log(from)
            this.$store.state.adres=this.radio2
          }

      },
      // updated(){
      //   let _this = this;
      //   axios.get('http://localhost:3000/shoppingCart/getAlladres').then(function(result){
      //     console.log('============== =====');
      //     // console.log(result.data)
      //     _this.info = result.data.data[0];
      //     console.log(_this.info);
      //   },function(err){
      //     console.log(err);
      //   })
      // }
    }
</script>

<style scoped>

  .h2-dot{
    border-bottom:dashed 1px black;
    display:block;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  h4{
    color: red;
    opacity: 0.5;
  }
  .pointer:hover{
    color: blue;
    cursor: pointer;

  }
</style>
