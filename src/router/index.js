import Vue from 'vue'
import VueRouter from 'vue-router'

import Appindex from "../components/home/Appindex";
import Login from "../components/Login";
import Home from "../components/Home";
import SupplierIndex from "../components/Supplier/SupplierIndex";
import SupplierAdd from "../components/Supplier/SupplierAdd";
import GoodsInfo from "../components/Goods/GoodsInfo";
import PersonInfo from "../components/Personal/PersonInfo";
import OrderInfo from "../components/Order/OrderInfo";
import Orderqinggou from "../components/Order/Orderqinggou";
import SupplierUpdate from "../components/Supplier/SupplierUpdate";
Vue.use(VueRouter)

  const routes = [
    {
      path: '/home',
      name: 'Home',
      component:Home,
      //home页面不需要被访问
      redirect:'/index',
      children:[
        {
          path: '/index',
          name: 'AppIndex',
          component: Appindex,
        },
        { path: '/supplier',
          name: 'supplier',
          component: SupplierIndex,

        },
        {
          path: '/supplierAdd',
          name: 'supplierAdd',
          component: SupplierAdd,

        },

        {
          path:'/goodsInfo',
          name:'goodsInfo',
          component:GoodsInfo,

        },
        {
          path:'/personInfo',
          name:'personInfo',
          component:PersonInfo,
        },
        {
          path:'/orderInfo',
          name:'orderInfo',
          component:OrderInfo,
        },
        {
          path:'/orderQingGou',
          name:'orderQingGou',
          component:Orderqinggou,
        },
        {
          path:'/supplierUpdate',
          name:'supplierUpdate',
          component:SupplierUpdate,
        }


      ]

    },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
