// import Home from './components/Home.vue'
// import User from './components/user/User.vue'
// import UserStart from './components/user/UserStart.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'
// export const routes = [
//   {path:'/',component:Home},
//   {path:'/user',component:User,children:[
//       {path:'',component:UserStart},
//       {path:':id',component:UserDetail},
//       //路由守卫，
//       {path:':id/edit',component:UserEdit,name:'edit',beforeEnter:(to,from,next)=>{
//           console.log('守卫开始工作！')
//           next({path:'/'});    //不写或者参数是false时，路由中止，如果参数是指定的一个路由时，将会跳转
//         }},
//     ]
//   },
//   {path:'*',redirect:'/'} //重定向，针对任何未匹配路由
// ]
import tscarhead from './components/transaction--shen/tsCar'
import user from './components/user--zhai/user.vue'
import login from './components/user--zhai/login.vue'
import registe from './components/user--zhai/registe.vue'
export const routes = [
  {path:'/user',component:user},
  {path:'/login',component:login},
  {path:'/registe',component:registe}
]




