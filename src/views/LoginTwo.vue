<template>
    <div class="login">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>Register Account</span>
                </div>
            </template>
            <el-form :model="form" label-width="120px" ref="ruleFormRef"
            :rules="rules"
            >
                    <el-form-item label="Name" prop="username">
                        <el-input v-model="form.username" />
                    </el-form-item>
                    <el-form-item label="Password">
                        <el-input v-model="form.password" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit(ruleFormRef)">Create</el-button>
                        <el-button>Cancel</el-button>
                    </el-form-item>
                </el-form>
        </el-card>
    </div>
</template>

<script setup>
import {reactive, ref} from 'vue'
import { ElMessage } from 'element-plus'

const ruleFormRef = ref()

const validateName = (rule, value, callback) => {
    const reg = /(^[a-zA-Z0-9]{4,10}$)/
    if (!value) {
        return callback(new Error('Please input the age'))
    } else if (!reg.test(value)) {
        callback(new Error('please enter name between 4-10 charators.'))
    } else {
        callback()
    }
}

const rules = {
    username: [{ validator: validateName, trigger: 'blur' }],
}

const form = reactive({
    username: '',
    password: ''
})

const onSubmit = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      ElMessage({
        message: 'submitted!!!',
        type: 'success',
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #409eff;
    .box-card {
        width: 450px;
        margin: 200px auto;
    }
}
</style>