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
    import SearchBar from "./SearchBar";
    import * as axious from "core-js";
    export default {
        name: "Supplierinfo",
        components: {SearchBar},





        data() {
            return {
                pageSize:'',
                total:'',
                Supplier: []
            }
        },
        methods: {
            page(currentPage) {
                const _this = this;
                this.$axios.get('/findAll/'+(currentPage-1)+'/10').then(function (resp) {
                    console.log(resp);
                    _this.Supplier = resp.data.content
                    _this.pageSize = resp.data.size
                    _this.total = resp.data.totalElements
                })

            },
            searchResult () {
                var _this = this
                this.$axios
                    .get('/findBycoameLike?keywords=' + this.$refs.searchBar.keywords, {
                    }).then(resp => {
                    if (resp && resp.status === 200) {
                        console.log(resp);
                        _this.Supplier = resp.data
                    }
                })
            },


        },




        created() {
            const _this = this;
            this.$axios.get('/findAll/0/10').then(function (resp) {
                    console.log(resp);
                _this.Supplier = resp.data.content
                _this.pageSize = resp.data.size
                _this.total = resp.data.totalElements
            })
        }

    }



</script>



<style scoped>

</style>