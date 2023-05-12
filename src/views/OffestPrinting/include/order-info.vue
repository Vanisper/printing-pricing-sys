<script lang="ts" setup>
import CodeCard from "../../../components/card/code-card.vue";
enum Form {
    orderID = "订单编号",
    clientName = "客户名称",
    operator = "业务员",
    operatorName = "业务员姓名",
    orderDate = "订单日期",
    address = "送货地址",
    deliveryDate = "交付日期",
    contactPerson = "联系人",
    contact = "联系电话",
}
type FormKeys = keyof typeof Form; // 获取 Form 的所有键名
type FormValues = `${Form}`; // 获取 Form 的所有值
type FormObject = Record<FormKeys | string, string>; // 将键名转换为一个对象类型，值为 string
const form = reactive<FormObject>({
    orderID: "",
    clientName: "",
    operator: "",
    operatorName: "",
    orderDate: "",
    address: "",
    deliveryDate: "",
    contactPerson: "",
    contact: "",
})
const testData: FormObject = {
    orderID: Date.now().toString(),
    clientName: "秦强",
    operator: "001",
    operatorName: "",
    orderDate: "",
    address: "湖南工业大学",
    deliveryDate: "",
    contactPerson: "秦强",
    contact: "4000000000"
}
Object.keys(form).forEach(v => {
    form[v] = testData[v]
})

const operator = ref([
    {
        label: "张三",
        id: "001"
    }, {
        label: "李四",
        id: "002"
    },
])

watchEffect(() => {
    // 根据 operator 的值计算出 operatorName 的值
    const name = operator.value.find(v => v.id == form.operator)?.label
    form.operatorName = name || "";
})
const emits = defineEmits(["data1"]);
const submit = () => {
    emits("data1", form);
}

watch(form, (_value) => {
    submit()
}, {
    immediate: true
})
</script>

<template>
    <el-divider content-position="left">
        <h3>订单信息</h3>
    </el-divider>
    <el-form :inline="true" :model="form" label-width="120px">
        <el-form-item :label="Form.orderID">
            <el-input v-model="form.orderID" />
        </el-form-item>
        <el-form-item :label="Form.clientName">
            <el-input v-model="form.clientName" />
        </el-form-item>
        <el-form-item :label="Form.operator">
            <el-select v-model="form.operator" :placeholder="Form.operator">
                <el-option v-for="(item, _index) in operator" :label="item.label" :value="item.id" />
            </el-select>
        </el-form-item>
        <el-form-item :label="Form.orderDate">
            <el-date-picker v-model="form.orderDate" type="datetime" :placeholder="Form.orderDate" style="width: 100%" />
        </el-form-item>
        <el-form-item :label="Form.address">
            <el-input v-model="form.address" />
        </el-form-item>
        <el-form-item :label="Form.deliveryDate">
            <el-col>
                <el-date-picker v-model="form.deliveryDate" type="datetime" :placeholder="Form.deliveryDate"
                    style="width: 100%" />
            </el-col>
        </el-form-item>
        <el-form-item :label="Form.contactPerson">
            <el-input v-model="form.contactPerson" />
        </el-form-item>
        <el-form-item :label="Form.contact">
            <el-input v-model="form.contact" />
        </el-form-item>
    </el-form>
    <!-- <code-card :content="{
        type: 'pre',
        value: form
    }" /> -->
</template>

<style lang="less" scoped></style>