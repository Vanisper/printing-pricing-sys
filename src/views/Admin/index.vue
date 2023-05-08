<template>
    <section class="main">
        <el-menu router class="el-menu-vertical-demo" :collapse="tabBar.isCollapse" @open="handleOpen" @close="handleClose">
            <el-sub-menu v-for="(items, index) in tabBar.list" :index="String(index + 1)">
                <template #title>
                    <el-icon>
                        <money />
                    </el-icon>
                    <span>{{ items.title }}</span>
                </template>
                <el-menu-item :style="{ color: $route.path == item.path ? '#409eff' : '' }" :key="idx"
                    v-for="(item, idx) in items.items" :route="{ path: item.path }"
                    :index="(index + 1) + '-' + (idx + 1)">{{
                        item.name
                    }}</el-menu-item>
            </el-sub-menu>
            <my-button1 :is-checked="tabBar.isCollapse" style="display: flex;justify-content: center;margin-top: auto;" />
            <!-- <el-switch class="switch" v-model="tabBar.isCollapse" size="small" /> -->
            <el-tooltip effect="dark" content="退出登录" placement="right">
                <el-button @click="loginOut" type="danger" style="width: fit-content;margin: 0 auto 30px auto;"
                    :icon="SwitchButton" circle />
            </el-tooltip>
        </el-menu>
        <div class="content">
            <router-view>
                <template #default="{ Component, route }">
                    <component v-if='!route.meta.keepAlive' :is="Component" :key="route.fullPath"></component>
                    <keep-alive v-else>
                        <component :is="Component" :key="route.fullPath"></component>
                    </keep-alive>
                </template>
            </router-view>
        </div>
    </section>
</template>
  
<script lang="ts" setup>
import {
    Money,
    SwitchButton
} from '@element-plus/icons-vue'
import { useTabBarStore } from "../../stores/tabBar";
import { useRouter } from 'vue-router';
import MyButton1 from "../../components/buttons/button1.vue";
const tabBar = useTabBarStore();
const router = useRouter()

const handleOpen = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
}
const loginOut = () => {
    localStorage.removeItem("isLogin");
    router.go(0)

}
onMounted(() => {
    if (!(localStorage.getItem("isLogin") === "true")) {
        router.push({
            path: "/admin/login"
        })
    }
})

</script>
  
<style lang="less" scoped>
.main {
    height: 100vh;
    flex-grow: 1;
    display: flex;
}

.el-menu-vertical-demo {
    position: relative;
    z-index: 1;
    user-select: none;
    display: flex;
    flex-direction: column;
    height: 100%;

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
    height: 100%;
    overflow-y: auto;
}
</style>
  