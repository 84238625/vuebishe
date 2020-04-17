<template>
    <el-container>
        <el-aside style="width: 100px;margin-top: 20px">


        </el-aside>
        <el-main><supplierinfo></supplierinfo></el-main>
        <el-aside style="width: 100px;margin-top: 20px">


        </el-aside>
    </el-container>
</template>

<script>
    import Supplierinfo from "./Supplierinfo";


    export default {
        name: "SupplierIndex",
        components: {Supplierinfo}
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