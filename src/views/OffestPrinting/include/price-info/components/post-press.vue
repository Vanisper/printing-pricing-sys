<script lang="ts" setup>
enum Form {
    binding = "装订",
    lamination = "覆膜",
    glazing = "上光",
    bronzing = "烫金",
    embossing = "压凹凸",
    framing = "装裱",
}
type FormKeys = keyof typeof Form; // 获取 Form 的所有键名
type FormValues = `${Form}`; // 获取 Form 的所有值
type FormObject = Record<FormKeys, string | number | boolean>; // 将键名转换为一个对象类型，值为 string
const form = reactive<FormObject>({
    binding: "",
    lamination: "",
    glazing: "",
    bronzing: "",
    embossing: "",
    framing: "",
})

const binding = ref([
    { label: "骑马订", value: "001" },
    { label: "胶订", value: "002" },
])
</script>

<template>
    <h5>印后加工</h5>
    <el-form inline :model="form" label-width="120px">
        <el-form-item :label="Form.binding">
            <el-select v-model="form.binding" :placeholder="Form.binding">
                <el-option v-for="(item, _index) in binding" :label="item.label" :value="item.value" />
            </el-select>
        </el-form-item>
        <el-form-item :label="Form.lamination">
            <el-input v-model="form.lamination"></el-input>
        </el-form-item>
        <el-form-item :label="Form.glazing">
            <el-input v-model="form.glazing"></el-input>
        </el-form-item>
        <el-form-item :label="Form.bronzing">
            <el-input v-model="form.bronzing"></el-input>
        </el-form-item>
        <el-form-item :label="Form.embossing">
            <el-input v-model="form.embossing"></el-input>
        </el-form-item>
        <el-form-item :label="Form.framing">
            <el-input v-model="form.framing"></el-input>
        </el-form-item>
    </el-form>
</template>

<style lang="less" scoped></style>