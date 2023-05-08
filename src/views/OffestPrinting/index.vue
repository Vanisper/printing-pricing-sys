<script lang="ts" setup>
import OrderInfo from "./include/order-info.vue";
import ProductInfo from "./include/product-info.vue";
import PriceInfo from "./include/price-info/index.vue";
import { useAppStores } from "../../stores/app";
import { useRoute, useRouter } from "vue-router";

onMounted(() => {
    if (!useRoute().meta.keepAlive) {
        const t = setTimeout(() => {
            document.title = "胶版印刷"
            clearTimeout(t)
        })
    }
})

onActivated(() => {
    document.title = "胶版印刷";
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

<template>
    <order-info />
    <product-info />
    <price-info />
</template>

<style lang="less" scoped>
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}
</style>