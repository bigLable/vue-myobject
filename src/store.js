import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  state:{
    user:1,
    userEmail:'',
    username:'游客',
    userPw:'1523',
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

  }
})

