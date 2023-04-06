<template>
  <section class="main">
    <el-menu router default-active="1-1" class="el-menu-vertical-demo" :collapse="tabBar.isCollapse" @open="handleOpen"
      @close="handleClose">
      <el-sub-menu v-for="(items, index) in tabBar.list" :index="String(index + 1)">
        <template #title>
          <el-icon>
            <money />
          </el-icon>
          <span>{{ items.title }}</span>
        </template>
        <el-menu-item v-for="(item, idx) in items.items" :route="{ path: item.path }"
          :index="(index + 1) + '-' + (idx + 1)">{{
            item.name
          }}</el-menu-item>
      </el-sub-menu>
      <el-switch class="switch" v-model="tabBar.isCollapse" size="small" />
    </el-menu>
    <div class="content">

      <router-view v-if="!$route.meta.keepAlive" />
      <router-view v-if="$route.meta.keepAlive" v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  Money,
} from '@element-plus/icons-vue'
import { useTabBarStore } from "./stores/tabBar";
const tabBar = useTabBarStore()

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

.content {
  flex-grow: 1;
  padding: 10px;
}
</style>
