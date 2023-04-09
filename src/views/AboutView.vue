<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="getTest">Test Axios Request</el-button>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'

const currentInstance = getCurrentInstance()
      const { $http} = currentInstance.appContext.config.globalProperties
      
      function getTest() {
        $http({
          url: 'https://jsonplaceholder.typicode.com/posts/1'
        }).then(res=>{
          let { data } = res
          console.log(data)
        })
      }
</script>
<style>

</style>
