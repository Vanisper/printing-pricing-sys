<script lang="ts" setup>
enum Form {
    productType = "产品分类",
    productCount = "产品数量",
    productName = "产品名称",
    pageNumber = "产品页码",
    remark = "备注",
}
type FormKeys = keyof typeof Form; // 获取 Form 的所有键名
type FormValues = `${Form}`; // 获取 Form 的所有值
type FormObject = Record<FormKeys, string | number>; // 将键名转换为一个对象类型，值为 string
const form = reactive<FormObject>({
    productType: "",
    productCount: 0,
    productName: "",
    pageNumber: 0,
    remark: "",
})

const productType = ref([
    { label: "分类1", value: "001" },
    { label: "分类2", value: "002" },
])
</script>

<template>
    <el-divider content-position="left">
        <h3>产品信息</h3>
    </el-divider>
    <el-form inline :model="form" label-width="120px">
        <el-form-item :label="Form.productName">
            <el-input v-model="form.productName" />
        </el-form-item>
        <el-form-item :label="Form.productType">
            <el-select v-model="form.productType" :placeholder="Form.productType">
                <el-option v-for="(item, _index) in productType" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item :label="Form.productCount">
            <el-input-number :min="0" v-model="form.productCount" />
        </el-form-item>
        <el-form-item :label="Form.pageNumber">
            <el-input-number :min="0" v-model="form.pageNumber" />
        </el-form-item>
        <el-form-item :label="Form.remark" style="display: flex;">
            <el-input v-model="form.remark" :autosize="{ minRows: 2, maxRows: 6 }" :placeholder="Form.remark"
                show-word-limit type="textarea" />
        </el-form-item>
    </el-form>
</template>

<style lang="less" scoped></style>