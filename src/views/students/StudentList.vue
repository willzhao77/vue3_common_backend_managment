<template>
    <div>
        <el-table :data="data.tableData" border style="width: 100%">
            <el-table-column prop="name" label="Name" align="center" />
            <el-table-column prop="sex_text" label="Gender" align="center" />
            <el-table-column prop="age" label="Age" align="center" />
            <el-table-column prop="number" label="Number" align="center" />
            <el-table-column prop="class" label="Class" align="center" />
            <el-table-column prop="state_text" label="State" align="center" />
            <el-table-column prop="address" label="Address" align="center" />
            <el-table-column prop="phone" label="Phone" align="center" />
            <el-table-column label="Operation">
                <el-button type="danger" size="mini" icon="el-icon-delete">Del</el-button>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import {students} from '@/request/api.js'

const data = reactive({
    'tableData':[]
})

onMounted(()=>{
    students().then((res) => {
        console.log(res)
        if(res.data.status===200) {
            data.tableData = res.data.data
            data.tableData.forEach(item => {
                item.sex === 1 ? item.sex_text = 'Male' : item.sex_text = 'Female'
                item.status === 1
                ? (item.state_test = 'Enrolled')
                : item.state == '2'
                ? (item.state_text = 'Not Enroled')
                : (item.state_text = 'Reset')
            })
        }
    })
})

</script>