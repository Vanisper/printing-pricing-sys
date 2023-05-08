<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useAppStores } from "../../stores/app";

onMounted(() => {
    if (!useRoute().meta.keepAlive) {
        const t = setTimeout(() => {
            document.title = "数码印刷"
            clearTimeout(t)
        })
    }
})

onActivated(() => {
    document.title = "数码印刷";
    if (!(localStorage.getItem("isLogin") === "true")) {
        useRouter().push({
            path: "/admin/login"
        })
    }
})

onDeactivated(() => {
    useAppStores().setDefaultTitle()
})

</script>

<template></template>

<style lang="less" scoped></style>