<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="300px" class="demo-ruleForm"  style="width: 1000px" >
        <h2>供应商信息更新</h2>
        <el-form-item label="公司编号"   style="width:500px"  >
            <el-input  v-model="ruleForm.id" readOnly ></el-input>
        </el-form-item>
        <el-form-item label="公司名称" prop="coname">
            <el-input  v-model="ruleForm.coname"></el-input>
        </el-form-item>

        <el-form-item label="电话号码" prop="cophone">
            <el-input v-model="ruleForm.cophone"></el-input>
        </el-form-item>

        <el-form-item label="公司地址" prop="coaddress">
            <el-input v-model="ruleForm.coaddress"></el-input>
        </el-form-item>

        <el-form-item label="信誉评价" prop="cocredibility">
            <el-input type="textarea" v-model="ruleForm.cocredibility"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>

        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    id:'',
                    coname:'',
                    cophone: '',
                    coaddress: '',
                    cocredibility: '',

                },
                rules: {
                    coname: [
                        { required: true, message: '请输入公司名称', trigger: 'blur' },
                        { min: 1, max: 30, message: '长度在 1 到 30 个字符之间 ', trigger: 'blur' }
                    ],
                    cophone: [
                        { required: true, message: '请输入电话号码', trigger: 'blur' },
                        {min: 6, max: 11, message: '长度为6到11位字符', trigger: 'blur' }
                    ],
                    coaddress: [
                        { required: true, message: '请输入公司地址', trigger: 'blur' },
                        {min: 1, max: 50, message: '长度在1到50个字符之间', trigger: 'blur' }
                    ],

                    cocredibility: [
                        { required: true, message: '请填写公司信誉评价', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {

            submitForm(formName) {
                const _this=this
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        this.$axios.put('/update',this.ruleForm).then(function (resp) {
                            if(resp.data == 'success'){
                                _this.$alert('《'+_this.ruleForm.coname+'》修改成功！', '消息', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        _this.$router.push('/supplier')
                                    }
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

        created() {

                const _this=this
          this.$axios.get('/findById/' +this.$route.query.id).then(function (resp) {
                        _this.ruleForm=resp.data;
          })
        }
    }
</script>