<template>
    <div>
        <el-card>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                <el-breadcrumb-item v-for="(item, index) in routers" :key="index">
                    {{item?.name}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-card>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()

const routers = computed(()=>{
    return router.currentRoute.value.matched
})
</script>