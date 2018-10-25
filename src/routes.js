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
import addworks from './components/comment--Qi/works/addworks'
import about from './components/user--zhai/about'
import detail from './components/comment--Qi/works/detail'
import comment from './components/comment--Qi/works/comment'
import hotworks from './components/comment--Qi/works/hotworks'
import newworks from './components/comment--Qi/works/newworks'
import recworks from './components/comment--Qi/works/recworks'
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
import shopinfo from './components/goods--zhang/shops/shopindex/shop/shopinfo'
import shopimgs from './components/goods--zhang/shops/shopindex/shop/shopimgs'
import shopcomment from './components/goods--zhang/shops/shopindex/shop/shopcomment'
import raputor from './components/goods--zhang/repair/assembly-r/raputor/raputor'
import chizu from './components/goods--zhang/repair/assembly-r/raputor/chizu'
export const routes=[
  {path:'/Car',component:Car},
  {path:'/Pay',component:Pay},
  {path:'/',component:Home},
  {path:'/repair',component:repair,children:[
      {path:'raputor',component:raputor},
      {path:'chizu',component:chizu}
    ]},
  {path:'/search',component:search},
  {path:'/shops/:id',component:shops,children:[
      {path:'shopinfo',component:shopinfo},
      {path:'shopimgs',component:shopimgs},
      {path:'shopcomment',component:shopcomment}
    ]},
  {path:'/works',component:works,children:[
      {path:'hotworks',component:hotworks},
      {path:'newworks',component:newworks},
      {path:'',component:recworks},
    ]
  },
  {path:'/comment',component:comment,children:[
      {path:':id',component:detail},
      {path:'addworks',component:addworks},
    ]
  },
  {path:'/about',component:about},


  {path:'/user',component:user},
  {path:'/changeinfo',component:changeinfo},
  {path:'/login',component:login},
  {path:'/registe',component:registe},

]
