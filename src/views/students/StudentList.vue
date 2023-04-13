<template>
    <div>
        <el-form :inline="true" :model="data.formInline" class="demo-form-inline">
            <el-form-item label="Name:">
                <el-input v-model="data.formInline.name" placeholder="Please enter name" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="find">Find</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="reset">Reset</el-button>
            </el-form-item>
        </el-form>

        <!-- <el-table :data="data.tableData.slice((data.currentPage - 1) * data.pageSize, data.currentPage * data.pageSize)" border style="width: 100%"> -->
        <el-table :data="compData" border style="width: 100%">
            <el-table-column prop="name" label="Name" align="center" />
            <el-table-column prop="sex_text" label="Gender" align="center" />
            <el-table-column prop="age" label="Age" align="center" />
            <el-table-column prop="number" label="Number" align="center" />
            <el-table-column prop="class" label="Class" align="center" />
            <el-table-column prop="state_text" label="State" align="center" />
            <el-table-column prop="address" label="Address" align="center" />
            <el-table-column prop="phone" label="Phone" align="center" />
            <el-table-column label="Operation">
                <template #default="scope">
                    <el-button  icon="el-icon-delete" @click="del(scope.row)">Del</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            v-model:current-page="data.currentPage"
            v-model:page-size="data.pageSize"
            :page-sizes="[5, 10, 20, 50]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="data.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script setup>
import { onMounted, reactive, ref, computed } from 'vue';
import {students, studentDel} from '@/request/api.js'
import { ElMessage } from 'element-plus'

const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const data = reactive({
    'tableData':[],
    'currentPage': 1,
    'pageSize': 10,
    'total': 0,
    'formInline': {
        'name': ''
    }
})



onMounted(()=>{
    getData()
})

function find() {
    getData(data.formInline)
}

function reset() {
    data.formInline = {}
    getData(data.formInline)

}

function getData(params) {
    students(params).then((res) => {
        if(res.data.status===200) {
            data.tableData = res.data.data
            data.total = res.data.total
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
}

function del(row) {
    console.log(row)
    studentDel(row.id).then(res => {
        console.log(res)
        if(res.data.status === 200) {
            ElMessage({
                    message: 'Delete student success!',
                    type: 'success',
            })
            getData()
        }
    })
}

let compData = computed(()=> {
    return data.tableData.slice((data.currentPage - 1) * data.pageSize, data.currentPage * data.pageSize)
})

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}

</script>