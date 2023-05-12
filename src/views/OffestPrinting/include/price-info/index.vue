<script lang="ts" setup>
import Cover from "./components/cover.vue";
import Content from "./components/content.vue";
import PostPress from "./components/post-press.vue";
import CodeCard from "../../../../components/card/code-card.vue";

const coverData = ref()
const contentData = ref()
const afterPrintData = ref()

const getCoverData = (value: any) => {
    coverData.value = value
}
const getContentData = (value: any) => {
    contentData.value = value
}

const getAfterPrintData = (value: any) => {
    afterPrintData.value = value
}
const form = computed(() => {
    const cover = (coverData.value);
    const content = (contentData.value);
    const afterPrint = (afterPrintData.value);
    return {
        cover, content, afterPrint
    };
})
const emits = defineEmits(["data3"]);
const submit = () => {
    emits("data3", form.value)
}
watch(form, () => {
    submit()
}, {
    deep: true
})
</script>

<template>
    <el-divider content-position="left">
        <h3>报价</h3>
    </el-divider>
    <cover @cover-data="getCoverData" />
    <content @content-data="getContentData" />
    <post-press @after-print="getAfterPrintData" />
    <!-- <code-card :content="{
        type: 'pre',
        value: form
    }" /> -->
</template>

<style lang="less" scoped></style>