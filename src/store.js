import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  state:{
    seletlogon:1,
    user:'',
    userEmail:'',
      username:'',
      userPw:'',
      num:{
        int1:1,
        int2:0,
        int3:0
      },
      inf:[],
      total:'',
      adres:''
    },
  getters:{

  },
  actions : {

  },
  mutations:{
      local(state,  val) {
        if(val == undefined) {
         state= JSON.parse(localStorage.getItem('state'))
        }
        localStorage.setItem('state', JSON.stringify(state))
    }
  }
})

