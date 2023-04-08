<script lang="ts" setup>
import OrderInfo from "./include/order-info.vue";
import ProductInfo from "./include/product-info.vue";
import PriceInfo from "./include/price-info/index.vue";
</script>

<template>
    <h1>胶版印刷</h1>
    <el-divider />
    <div class="">
        <order-info />
    </div>
    <el-divider />
    <div>
        <product-info />
    </div>
    <el-divider />
    <div>
        <price-info />
    </div>
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