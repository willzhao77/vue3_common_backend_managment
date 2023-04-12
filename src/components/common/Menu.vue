<template>
    <div class="menu">
        <el-aside>
            <el-menu
                router
                active-text-color="#ffd04b"
                background-color="#2578b5"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
            >
                <template v-for="(item, index) in menus" :key="index">
                    <el-sub-menu :index="index + ''" v-if="!item.hidden">
                        <template #title>
                            <el-icon><location /></el-icon>
                            <span>{{ item.name }}</span>
                        </template>
                        <el-menu-item-group v-for="(child, index) in item.children" :key="index">
                            <el-menu-item :index="child.path">{{ child.name }}</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                </template>
             </el-menu>
        </el-aside>
    </div> 
    <div>

    </div>
</template>

<script setup>


import { Location } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const menus = router.options.routes



// method 2
// import { onMounted, reactive } from 'vue';
// import router from '../../router/index.js'
// let menus = reactive([])

// onMounted(()=> {
//     menus.push(...router.options.routes )
// })

</script>

<style lang="scss" scoped>
.menu {
    .el-aside {
        height: 100%;
        .el-menu {
            height: 100%;
        }
    }
}
</style>