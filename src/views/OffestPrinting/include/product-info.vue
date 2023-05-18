<script lang="ts" setup>
import CodeCard from "../../../components/card/code-card.vue";
enum Form {
    size = "尺寸(开)",
    productType = "产品分类",
    productTypeName = "产品分类名称",
    productCount = "产品数量",
    productName = "产品名称",
    pageNumber = "产品页码",
    remark = "备注",
}
type FormKeys = keyof typeof Form; // 获取 Form 的所有键名
type FormValues = `${Form}`; // 获取 Form 的所有值
type FormObject = Record<FormKeys | string, string | number>; // 将键名转换为一个对象类型，值为 string
const form = reactive<FormObject>({
    size: 0,
    productType: "",
    productTypeName: "",
    productCount: 0,
    productName: "",
    pageNumber: 0,
    remark: "",
})
const testData: FormObject = {
    size: 3,
    productType: "001",
    productTypeName: "",
    productCount: 100,
    productName: "xx童话书",
    pageNumber: 99,
    remark: "产品页码不包含封页封底，封页封底按每本两页/四面计算"
}
Object.keys(form).forEach(v => {
    form[v] = testData[v]
})

const productType = ref([
    { label: "胶版印刷", value: "001" },
    { label: "数码印刷", value: "002" },
])
watchEffect(() => {
    form.productTypeName = productType.value.find(v => v.value == form.productType)?.label || ""
})
const emits = defineEmits(["data2"])
const submit = () => {
    emits("data2", form)
}
watch(form, () => {
    submit()
}, {
    immediate: true
})
</script>

<template>
    <el-divider content-position="left">
        <h3>产品信息</h3>
    </el-divider>
    <el-form inline :model="form" label-width="120px">
        <el-form-item :label="Form.size">
            <el-input-number controls-position="right" v-model="form.size" type="number" :min="0">
            </el-input-number>
        </el-form-item>
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
    <!-- <code-card :content="{
        type: 'pre',
        value: form
    }" /> -->
</template>

<style lang="less" scoped></style>