<template>
    <div>
        <el-row style="height:600px">
            <search-bar @onSearch="searchResult" ref="searchBar"></search-bar>
            <el-table
                    :data="Supplier"
                    style="width: 100%">


                <el-table-column
                        prop="coname"
                        label="公司名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="cophone"
                        label="电话号码"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="coaddress"
                        label="公司地址">
                </el-table-column>
                <el-table-column
                        prop="cocredibility"
                        label="信誉评价">
                </el-table-column>
            </el-table>
        </el-row>

        <el-row>
            <el-pagination

                    :page-size="pageSize"
                    :total="total"
                    @current-change="page"
            >
            </el-pagination>
        </el-row>
    </div>
</template>


<script>
    export default {
        name: "SupplierWeiHu"
    }
</script>

<style scoped>

</style>