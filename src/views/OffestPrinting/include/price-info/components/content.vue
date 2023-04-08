<script lang="ts" setup>
enum Form {
    size = "尺寸(开)",
    count = "数量",
    weight = "页重(g)",
    isDouble = "是否双面",
    material = "材料",
    colorSystem = "色系",
}
type FormKeys = keyof typeof Form; // 获取 Form 的所有键名
type FormValues = `${Form}`; // 获取 Form 的所有值
type FormObject = Record<FormKeys, string | number | boolean>; // 将键名转换为一个对象类型，值为 string
const form = reactive<FormObject>({
    size: 0,
    count: 0,
    weight: 0,
    isDouble: false,
    material: "",
    colorSystem: "",
})
const material = ref([
    { label: "铜版纸", value: "001", },
    { label: "胶版纸", value: "002" },
])
const colorSystem = ref([
    { label: "单色", value: "001", },
    { label: "双色", value: "002", },
    { label: "三色", value: "003", },
    { label: "四色", value: "004", },
])
</script>

<template>
    <h5>内页印刷</h5>
    <el-form inline model="form" label-width="120px">
        <el-form-item :label="Form.size">
            <el-input v-model="form.size" type="number" :min="0">
                <template #append>开</template>
            </el-input>
        </el-form-item>
        <el-form-item :label="Form.material">
            <el-select v-model="form.material" :placeholder="Form.material">
                <el-option v-for="(item, _index) in material" :label="item.label" :value="item.value" />
            </el-select>
        </el-form-item>
        <el-form-item :label="Form.isDouble">
            <el-radio-group v-model="form.isDouble">
                <el-radio :label="true">是</el-radio>
                <el-radio :label="false">否</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item :label="Form.count">
            <el-input-number v-model="form.count" controls-position="right" :min="0"></el-input-number>
        </el-form-item>
        <el-form-item :label="Form.weight">
            <el-input-number v-model="form.weight" controls-position="right" :min="0">
            </el-input-number>
        </el-form-item>
        <el-form-item :label="Form.colorSystem">
            <el-select v-model="form.colorSystem" :placeholder="Form.colorSystem">
                <el-option v-for="(item, _index) in colorSystem" :label="item.label" :value="item.value" />
            </el-select>
        </el-form-item>
    </el-form>
</template>

<style lang="less" scoped></style>