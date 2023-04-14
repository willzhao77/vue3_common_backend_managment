<template>
    <div>
        <el-form :inline="true" :model="data.formInline" class="demo-form-inline">
             <el-form-item>
                <el-button type="primary" @click="addStudent">Add</el-button>
            </el-form-item>
        </el-form>

        <el-table :data="data.tableData" border style="width: 100%">
            <el-table-column prop="name" label="Name" align="center" />
            <el-table-column prop="sex_text" label="Gender" align="center" />
            <el-table-column prop="age" label="Age" align="center" />
            <el-table-column prop="father" label="Father" align="center" />
            <el-table-column prop="mather" label="Mather" align="center" />
            <el-table-column prop="address" label="Address" align="center" />
            <el-table-column prop="time" label="Enroll Time" align="center" />
            <el-table-column prop="phone" label="Phone" align="center" />
            <el-table-column label="Operation">
                <template #default="scope">
                    <el-button  icon="el-icon-delete" @click="edit(scope.row)">Edit</el-button>
                    <el-button  icon="el-icon-delete" @click="del(scope.row)">Del</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog v-model="data.dialogFormVisible" :title="data.isAdd ? 'Add Student Info' : 'Edit Studnet Info'" width="600px">
            <el-form :model="data.form" :rules="rules" ref="ruleFormRef">
                <el-form-item label="Name" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="data.form.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Gender" :label-width="formLabelWidth" prop="Gender">
                    <el-radio v-model="data.form.gender" label="1">Male</el-radio>
                    <el-radio v-model="data.form.gender" label="2">Female</el-radio>
                </el-form-item>
                <el-form-item label="Age" :label-width="formLabelWidth" prop="age">
                    <el-input v-model="data.form.age" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Father Name" :label-width="formLabelWidth" prop="father">
                    <el-input v-model="data.form.father" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Mather Name" :label-width="formLabelWidth" prop="mather">
                    <el-input v-model="data.form.mather" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Address" :label-width="formLabelWidth" prop="address">
                    <el-input v-model="data.form.address" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Enroll Time" :label-width="formLabelWidth" prop="time">
                    <el-date-picker
                        v-model="data.form.time"
                        format="DD-MM-YYYY"
                        value-format="YYYY-MM-DD"
                        type="date"
                        placeholder="Please select date."
                    />
                </el-form-item>
                <el-form-item label="Phone" :label-width="formLabelWidth" prop="phone">
                    <el-input v-model="data.form.phone" autocomplete="off" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="closeInfo(ruleFormRef)">Cancel</el-button>
                    <el-button type="primary" @click="submit(ruleFormRef)">
                        Confirm
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import {reactive, ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus'
// import { getInfo, addInfo, updateInfo, infoDel } from '@/request/api'
import { getInfo, createUpdateInfo, infoDel } from '@/request/api'
const formLabelWidth = '140px'
const ruleFormRef = ref()

const data = reactive({
    'isAdd': true,
    'tableData':[],
    'total': 0,
    'dialogFormVisible': false,
    'form': {
        name: "",
        gender: "1",
        age: "",
        father: "",
        mather: "",
        address: "",
        time: "",
        phone: "",
    }
})

const rules = {
    name: [{required: true, message: 'Please enter name'}],
    sex: [{required: true, message: 'Please enter sex'}],
    age: [{required: true, message: 'Please enter age'}],
    address: [{required: true, message: 'Please enter address'}],
    time: [{required: true, message: 'Please enter time'}],
    phone: [{required: true, message: 'Please enter phone'}],
}

onMounted(()=>{
    getData()
})


function getData() {
    getInfo().then( res => {
        console.log(res)
        if(res.data.status === 200) {
            data.tableData = res.data.data
            data.total = res.data.total
        }
    })
}

function addStudent() {
    data.isAdd = true
    data.dialogFormVisible = true
    data.form = {
        name: "",
        gender: "1",
        age: "",
        father: "",
        mather: "",
        address: "",
        time: "",
        phone: "",
    }

    //remove form validation.
    if(ruleFormRef.value) {
        ruleFormRef.value.resetFields()
    }
}

function edit(row) {
    //注意不要直接把值赋给Form， 不然修改表示， 后面显示的表会跟着变动
    data.form = {...row}
    data.isAdd = false
    data.dialogFormVisible = true
}

function closeInfo() {
    data.dialogFormVisible = false
}

function del(row) {
    const text = "Are you sure to delete this user?\nEither OK or Cancel.";
    if (confirm(text) == true) {
        infoDel(row.id).then(res => {
            if(res.data.status === 200) {
                getData()
                ElMessage({
                    message: res.data.message,
                    type: 'success',
                })
            }
        })
    } else {
        console.log('false')
    }
}

function submit(formEl) {
    if (!formEl) return
    formEl.validate((valid, fields) => {
    if (valid) {
        console.log('submit!')
        //Check if add or update
        if(data.isAdd) {
            createUpdateInfo( 'post', data.form).then( res => {
                if(res.data.status === 200) {
                    getData()
                    data.dialogFormVisible = false
                    ElMessage({
                        message: res.data.message,
                        type: 'success',
                    })
                }
            })
        } else {
            createUpdateInfo('put', data.form).then( res => {
                if(res.data.status === 200) {
                    getData()
                    data.dialogFormVisible = false
                    ElMessage({
                        message: res.data.message,
                        type: 'success',
                    })
                }
            })
        }
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>