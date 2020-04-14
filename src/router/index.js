import Vue from 'vue'
import VueRouter from 'vue-router'

import Appindex from "../components/home/Appindex";
import Login from "../components/Login";
import Home from "../components/Home";
import SupplierIndex from "../components/Supplier/SupplierIndex";
import SupplierAdd from "../components/Supplier/SupplierAdd";
import SupplierWeiHu from "../components/Supplier/SupplierWeiHu";
import GoodsIndex from "../components/Goods/GoodsIndex";
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
          path:'/supplierWeiHu',
          name:'supplierWeiHu',
          component:SupplierWeiHu,

        },
        {
          path:'/goodsInfo',
          name:'goodsInfo',
          component:GoodsIndex,

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
