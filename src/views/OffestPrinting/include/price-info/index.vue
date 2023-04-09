<script lang="ts" setup>
import Cover from "./components/cover.vue";
import Content from "./components/content.vue";
import PostPress from "./components/post-press.vue";

</script>

<template>
    <el-divider content-position="left">
        <h3>报价</h3>
    </el-divider>
    <cover />
    <content />
    <post-press />
</template>

<style lang="less" scoped></style>