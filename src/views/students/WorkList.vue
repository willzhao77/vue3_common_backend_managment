<template>
    <div>
        <el-table :data="data.tableData" v-loading="data.loading" border style="width: 100%">
            <el-table-column prop="id" label="ID" align="center" />
            <el-table-column prop="userId" label="Class" align="center" />
            <el-table-column prop="title" label="Work" align="center" />
            <el-table-column prop="completed" label="Status" align="center" />
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
import { onMounted, reactive, ref } from 'vue';
import { works } from '@/request/api.js'


const data = reactive({
    tableData:[],
    total: 0,
    currentPage: 1,
    pageSize: 10,
    loading: true,
})

onMounted(()=>{
    getData({page: data.currentPage, size: data.pageSize})
})


function getData(params) {
    works(params).then((res) => {
        if(res.data.status===200) {
            data.tableData = res.data.data
            data.total = res.data.total
            data.loading = false
        }
    })
}

const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val) => {
  data.pageSize = val
  data.currentPage = 1
  getData({page: data.currentPage, size: val})
}
const handleCurrentChange = (val) => {
  data.page = val
  getData({page: val, size: data.pageSize})
}

</script>