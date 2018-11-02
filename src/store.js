import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  state:{
    userpic:'',
    seletlogon:1,
    user:'',
    userEmail:'',
    username:'',
    userPw:'',
    userTime:'',
    userPhone:'',

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

