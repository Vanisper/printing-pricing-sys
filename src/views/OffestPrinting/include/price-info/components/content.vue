<script lang="ts" setup>
enum Form {
    weight = "页重(g)",
    isDouble = "是否双面",
    material = "材料",
    colorSystem = "色系",
}
type FormKeys = keyof typeof Form; // 获取 Form 的所有键名
type FormValues = `${Form}`; // 获取 Form 的所有值
type FormObject = Record<FormKeys, string | number | boolean | any>; // 将键名转换为一个对象类型，值为 string
const form = reactive<FormObject>({
    weight: {
        label: "",
        value: 0
    },
    isDouble: false,
    material: "",
    colorSystem: "",
})
const material = ref([
    { label: "铜版纸", value: "001", },
    { label: "胶版纸", value: "002" },
])


const weight: Record<string, { label: number, value: number }[]> = {
    "001": [
        {
            label: 128,
            value: 1.2
        }, {
            label: 150,
            value: 1.5
        }, {
            label: 200,
            value: 2.0
        },
    ],
    "002": [
        {
            label: 60,
            value: 0.5
        }, {
            label: 70,
            value: 0.6
        }, {
            label: 105,
            value: 0.9
        },
    ]
};
const weightOptions = computed(() => {
    const temp = weight[form.material as string]
    form.weight.label = temp ? temp[0].label : "";
    form.weight.value = temp ? temp[0].value : 0;
    return temp;
})


const colorSystem = ref([
    { label: "单色", value: 1 },
    { label: "双色", value: 2 },
    { label: "三色", value: 3 },
    { label: "四色", value: 4 },
]);

const emits = defineEmits(["contentData"]);
const submit = () => {
    emits("contentData", form)
}

watch(form, () => {
    submit();
}, {
    immediate: true
})

</script>

<template>
    <h5 style="margin-left: 30px;">内页印刷</h5>
    <el-form inline :model="form" label-width="120px">
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
        <el-form-item :label="Form.weight">
            <el-select v-model="form.weight.value" :placeholder="Form.weight">
                <el-option v-if="weightOptions" v-for="(item, _index) in weightOptions" :label="item.label"
                    :value="item.value" />
            </el-select>
        </el-form-item>
        <el-form-item :label="Form.colorSystem">
            <el-select v-model="form.colorSystem" :placeholder="Form.colorSystem">
                <el-option v-for="(item, _index) in colorSystem" :label="item.label" :value="item.value" />
            </el-select>
        </el-form-item>
    </el-form>
</template>

<style lang="less" scoped></style>