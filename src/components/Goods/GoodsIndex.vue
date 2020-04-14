<template>
    <el-container>
        <el-aside style="width: 200px;margin-top: 20px">
            <switch></switch>

        </el-aside>
        <el-main><goodsinfo></goodsinfo></el-main>
    </el-container>
</template>

<script>
   import Goodsinfo from "./GoodsInfo";


    export default {
        name: "Goodsinfo",
        components: {Goodsinfo}
    }
</script>

<style scoped>
    .el-header{
        background-color: #B3C0D1;
        color: #333;
        text-align: left;
        line-height: 60px;
    }
</style>