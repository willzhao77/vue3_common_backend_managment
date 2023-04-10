<template>
  <div class="home">
    <el-container>
      <el-header><Header /></el-header>
      <el-container class="content">
        <Menu />
        <el-container>
          <Breadcrumb />
          <el-main><router-view></router-view></el-main>
          <el-footer><Footer /></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Header from '../components/common/Header.vue'
import Footer from '../components/common/Footer.vue'
import Menu from '../components/common/Menu.vue'
import Breadcrumb from '../components/common/Breadcrumb.vue';
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
  }
  .el-header {
    padding: 0;
  }
}
</style>