<script lang="ts" setup>
import { useRoute } from "vue-router";
const route = useRoute()
const fullPath = ref(route.fullPath)
watch(route, () => {
    fullPath.value = route.fullPath;
}, {
    immediate: true
})

</script>

<template>
    <h1>测试</h1>
    {{ fullPath }}
</template>

<style lang="less" scoped></style>