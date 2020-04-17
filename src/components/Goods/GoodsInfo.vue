<template>
    <div>

        <!--<el-row style="height:600px">-->
        <search-bar @onSearch="searchResult" ref="searchBar"></search-bar>
        <el-table
                :data="Goods"
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="编号"
                    width="80">
            </el-table-column>

            <el-table-column
                    prop="goodsid"
                    label="料号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="goodsname"
                    label="物料名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="unit"
                    label="单位">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="单价/（元）"
            >
            </el-table-column>
            <el-table-column
                    prop="suppliername"
                    label="供应商"
            >
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="edit(scope.row)" type="text" >修改</el-button>
                    <el-button @click="deleteGoods(scope.row)" type="text" >删除</el-button>
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
    export default {
        name: "GoodsInfo",
        components: {SearchBar},
          data() {
            return {
                pageSize:'',
                total:'',
                Goods: []
            }
        },
        methods: {

            page(currentPage) {
                const _this = this;
                this.$axios.get('/findAllGoods/'+(currentPage-1)+'/10').then(function (resp) {
                    console.log(resp);
                    _this.Goods = resp.data.content
                    _this.pageSize = resp.data.size
                    _this.total = resp.data.totalElements
                })

            },
            searchResult () {
                var _this = this
                this.$axios
                    .get('/findByGoodsNameLike?keywords=' + this.$refs.searchBar.keywords, {
                    }).then(resp => {
                    if (resp && resp.status === 200) {
                        console.log(resp);
                        _this.Goods = resp.data



                    }
                })
            },

            edit(row){
                this.$router.push({
                    path:'/goodsUpdate',
                    query:{
                        id:row.id
                    }
                })

            },
            deleteGoods(row){
                const _this = this

                _this.$axios.delete('/deleteByGoodsId/'+row.id).then(function(resp){
                    _this.$alert('《'+row.goodsname+'》删除成功！', '消息', {
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
            this.$axios.get('/findAllGoods/0/10').then(function (resp) {
                console.log(resp);
                _this.Goods = resp.data.content
                _this.pageSize = resp.data.size
                _this.total = resp.data.totalElements
            })
        }




    }

</script>

<style scoped>

</style>