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
import works from './components/comment--Qi/works/works'
import worksdetail from'./components/comment--Qi/works/worksdetail'
import  Home from './components/comment--Qi/Home'
import Car from './components/transaction--shen/Car'
import Pay from './components/transaction--shen/Pay'
import user from './components/user--zhai/user.vue'
import login from './components/user--zhai/login.vue'
import registe from './components/user--zhai/registe.vue'
import manage from './components/user--zhai/manage.vue'
import managelogin from './components/user--zhai/manage-login.vue'
import changeinfo from './components/user--zhai/changeinfo.vue'
import repair from './components/goods--zhang/repair/repair'
import search from './components/goods--zhang/search/search'
import shops from './components/goods--zhang/shops/shops'
export const routes=[
  {path:'/Car',component:Car},
  {path:'/Pay',component:Pay},
  {path:'/',component:Home},
  {path:'/repair',component:repair},
  {path:'/search',component:search},
  {path:'/shops',component:shops},
  {path:'/works',component:works,children:[
      {path:':id',component:worksdetail}
    ]
  },{path:'/user',component:user,
    children:[
      {path:'/changeinfo',component:changeinfo}
    ]},
  {path:'/login',component:login},
  {path:'/registe',component:registe},
  {path:'/manage',component:manage},
  {path:'/managelogin',component:managelogin},

]
