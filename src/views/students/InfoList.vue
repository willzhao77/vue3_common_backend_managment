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

        <el-dialog v-model="data.dialogFormVisible" title="Add Student Info" width="600px">
            <el-form :model="data.form" :rules="rules" ref="form">
                <el-form-item label="Name" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="data.form.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Gender" :label-width="formLabelWidth" prop="Gender">
                    <el-radio v-model="data.form.gender" label="1">Male</el-radio>
                    <el-radio v-model="data.form.gender" label="2">Female</el-radio>
                </el-form-item>
                <el-form-item label="Age" :label-width="formLabelWidth" prop="name">
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
                        format="dd-MM-yyyy"
                        value-format="yyyy-MM-dd"
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
                    <el-button @click="dialogFormVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="submit(data.form)">
                        Confirm
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import {reactive } from 'vue';
const formLabelWidth = '140px'

const data = reactive({
    'tableData':[],
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

const rules = {}

function addStudent() {
    data.dialogFormVisible = true
}

function edit() {

}

function del() {

}

function submit(form) {
    console.log(form)
}
</script>