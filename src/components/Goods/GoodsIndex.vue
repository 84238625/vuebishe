<template>
    <el-container>
        <el-aside style="width: 100px;margin-top: 20px">
        </el-aside>
        <el-main><goods-info></goods-info></el-main>
        <el-aside style="width: 100px;margin-top: 20px">
        </el-aside>
    </el-container>
</template>

<script>
    import GoodsInfo from "./GoodsInfo";

    export default {
        name: "GoodsIndex",
        components: {GoodsInfo},

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