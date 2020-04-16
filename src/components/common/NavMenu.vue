<template>
    <el-menu
            :default-active="'/index'"
            router
            mode="horizontal"
            background-color="white"
            text-color="#222"
            active-text-color="red"
            style="min-width: 1300px">
        <!--<el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            {{ item.navItem }}
        </el-menu-item>-->
        <el-menu-item index="/index">首页</el-menu-item>
        <!--<el-menu-item index="/supplier">供应商全方位视图</el-menu-item>-->
        <el-submenu index="1">
            <template slot="title">供应商全方位视图</template>
            <el-menu-item index="/supplier">供应商信息查询</el-menu-item>
            <el-menu-item index="/supplierAdd">供应商增加</el-menu-item>
            <el-menu-item index="/supplierWeiHU">供应商信息维护</el-menu-item>

        </el-submenu>
        <el-submenu index="2">
            <template slot="title">采购物料全方位视图</template>
            <el-menu-item index="/goodsInfo">物料信息查询</el-menu-item>
            <el-menu-item index="/supplierAdd">物料信息增加</el-menu-item>
            <el-menu-item index="/supplierWeiHU">物料信息维护</el-menu-item>
        </el-submenu>


       <el-submenu index="3">
           <template slot="title">采购物料全方位视图</template>
        <el-menu-item index="/orderInfo">采购订单信息</el-menu-item>
           <el-menu-item index="/orderQingGou">请购单</el-menu-item>

       </el-submenu>
        <el-menu-item index="/personInfo">个人中心</el-menu-item>

        <a href="#nowhere" style="color: #222;float: right;padding: 20px;">基础信息设置</a>
        <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>
     <!--   <span style="position: absolute;padding-top: 20px;right: 46%;font-size: 20px;font-weight: bold">sjj</span>-->
    </el-menu>

</template>

<script>
    export default {
        name: "NavMenu",
   /*     data () {
            return {
                navList: [
                    {name: '/index', navItem: '首页'},
                    {name: '/goods', navItem: '采购物料全方位视图'},
                    {name: '/supplier', navItem: '供应商全方位视图'},
                    {name: '/order', navItem:'采购订单'},
                    {name: '/admin', navItem: '个人中心'},
                   /!* {name: '/supplierAdd', navItem: '新增供应商录入'},*!/
                ]
            }
        }*/

    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }

    span {
        pointer-events: none;
    }
</style>