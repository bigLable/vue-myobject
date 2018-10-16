import repair from './components/goods--zhang/repair/repair'
import search from './components/goods--zhang/search/search'
import shops from './components/goods--zhang/shops/shops'
export const routerinstall = [
  {path:'/repair',component:repair},
  {path:'/search',component:search},
  {path:'/shops',component:shops},
  //     {path:':id/edit',component:UserEdit,name:'edit',beforeEnter:(to,from,next)=>{
  //         console.log('守卫开始工作！');
  //         next({path:'/'});    //不写或者参数是false时，路由中止，如果参数是指定的一个路由时，将会跳转
  //       }},
  // {path:'*',redirect:'/'}
    ]



