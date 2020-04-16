<template>
    <div>
   <!--<el-row style="height:600px">-->
       <search-bar @onSearch="searchResult" ref="searchBar"></search-bar>
    <el-table
            :data="Supplier"
            style="width: 100%">
        <el-table-column
                prop="id"
                label="编号"
                width="80">
        </el-table-column>

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
                label="信誉评价"
                >
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="100">
            <template slot-scope="scope">
                <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
                <el-button @click="deleteSupplier(scope.row)" type="text" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>

        <el-pagination

            :page-size="pageSize"
            :total="total"
            @current-change="page"
            >
         </el-pagination>

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

            edit(row){
                this.$router.push({
                    path:'/supplierUpdate',
                    query:{
                        id:row.id
                    }
                })

            },
            deleteSupplier(row){
                const _this = this
                _this.$axios.delete('/deleteById/'+row.id).then(function(resp){
                    _this.$alert('《'+row.coname+'》删除成功！', '消息', {
                        confirmButtonText: '确定',
                        callback: action => {
                            window.location.reload()
                        }
                    })
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