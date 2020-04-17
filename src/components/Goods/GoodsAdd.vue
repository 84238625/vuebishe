<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="300px" class="demo-ruleForm"  style="width: 1000px" >
        <h2>物料信息录入</h2>
        <el-form-item label="料号"     prop="goodsid">
            <el-input  v-model="ruleForm.goodsid"  ></el-input>
        </el-form-item>
        <el-form-item label="物料名称" prop="goodsname">
            <el-input  v-model="ruleForm.goodsname"></el-input>
        </el-form-item>

        <el-form-item label="单位" prop="unit">
            <el-input v-model="ruleForm.unit"></el-input>
        </el-form-item>
        <el-form-item label="单价" prop="price">
            <el-input  v-model="ruleForm.price"></el-input>
        </el-form-item>
        <el-form-item label="供应商" prop="suppliername">
            <el-input v-model="ruleForm.suppliername"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>

        </el-form-item>
    </el-form>
</template>

<<script>
    export default {
        data() {
            return {
                ruleForm: {
                    goodsid:'',
                    goodsname:'',
                    unit: '',
                    price: '',
                    suppliername: '',


                },
                rules: {
                    goodsid: [
                        { required: true, message: '请输入料号，规则为当前年月日+时分秒如（202004051222）', trigger: 'blur' },
                        { min: 12, max:12, message: '长度为12位字符 ', trigger: 'blur' }
                    ],
                    goodsname: [
                        { required: true, message: '请输入物料名称', trigger: 'blur' },
                        {min: 1, max: 15, message: '长度为1到15位字符', trigger: 'blur' }
                    ],
                    unit: [
                        { required: true, message: '请输入计量单位', trigger: 'blur' },
                        {min: 1, max: 10, message: '长度在1到10个字符之间', trigger: 'blur' }
                    ],
                    price: [
                        { required: true, message: '请输入价格，单位（元）', trigger: 'blur' },
                        {min: 1, max: 99999, message: '长度在1到5个字符之间', trigger: 'blur' }
                    ],

                    suppliername: [
                        { required: true, message: '请输入供应商名称', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {

            submitForm(formName) {
                const _this=this
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        this.$axios.post('/saveGoods',this.ruleForm).then(function (resp) {
                            if(resp.data == 'success'){
                                _this.$alert('《'+_this.ruleForm.goodsname+'》增加成功！', '消息', {
                                    confirmButtonText: '确定',

                                })
                            }
                        })

                    } else {

                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },


    }
</script>

<style scoped>

</style>