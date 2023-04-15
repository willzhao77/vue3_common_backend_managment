<template>
    <div>
        <el-tree
            :data="menus"
            show-checkbox
            node-key="id"
            :props="defaultProps"
            ref="tree"
        />
    </div>
    <el-button @click="getCheckedNodes">Get Node</el-button>
</template>

<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const menus = router.options.routes

const tree =ref()

const defaultProps = {
    label: 'name',
    children: 'children'
}

function getCheckedNodes () {
    console.log(tree.value.getCheckedNodes())
}
</script>

