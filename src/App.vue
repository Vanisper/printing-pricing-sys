<template>
  <section class="main">
    <el-menu router default-active="1-1" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
      @close="handleClose">
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <money />
          </el-icon>
          <span>在线报价</span>
        </template>
        <el-menu-item :route="{ path: '/page1' }" index="1-1">专版画册报价</el-menu-item>
        <el-menu-item :route="{ path: '/page2' }" index="1-2">专版单张报价</el-menu-item>
        <el-menu-item index="1-3">拼版单张报价</el-menu-item>
        <el-menu-item index="1-4">说明书报价</el-menu-item>
        <el-menu-item index="1-5">手提袋报价</el-menu-item>
        <el-menu-item index="1-6">胶印不干胶报价</el-menu-item>
      </el-sub-menu>

      <el-switch class="switch" v-model="isCollapse"  size="small" />
    </el-menu>
    <div class="content">
      <router-view />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Money,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.main {
  flex-grow: 1;
  display: flex;
}

.el-menu-vertical-demo {
  position: relative;
  z-index: 1;
  user-select: none;
  display: flex;
  flex-direction: column;

  &:not(.el-menu--collapse) {
    width: 200px;
    // min-height: 400px;
  }

  .switch {
    margin-top: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
}

a {
  text-decoration: none;
}
</style>
