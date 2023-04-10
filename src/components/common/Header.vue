<template>
    <div>
        <el-row  class="header">
            <div class="title">Common Backend Managment</div>
            <div>{{ name }}</div>
        </el-row>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getToken } from '@/utils/setToken.js'

let name = ref()

onMounted (()=> {
    name.value = getToken('username')
})


</script>

<style lang="scss" scoped>
    .el-header {
        padding: 100px;
    }
    .header {
        background: #2578b5;
        color: white;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        .title {
            font-size: 24px;
        }
    }
</style>