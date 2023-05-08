<template>
    <section class="main">
        <h1 class="title">用户登记页面</h1>
        <el-link :underline="false" href="#/admin" target="_blank">前往管理员页面</el-link>
        <div class="content">
            <p>欢迎使用印刷计价系统</p>
        </div>
    </section>
</template>


<script lang="ts" setup></script>

<style lang="less" scoped>
.main {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .title {
        margin: 0 auto;
        height: fit-content;


    }

    .content {
        p {
            text-indent: 2rem;
        }
    }
}
</style>