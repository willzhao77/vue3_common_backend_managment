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
                    <el-form-item label="Name" prop="name">
                        <el-input v-model="form.name" />
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

const ruleFormRef = ref()

const rules = reactive({
    name: [
        { required: true, message: 'Please input  name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
})

const form = reactive({})

const onSubmit = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
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