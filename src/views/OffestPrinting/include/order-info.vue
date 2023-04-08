<script lang="ts" setup>
enum Form {
    orderID = "订单编号",
    clientName = "客户名称",
    operator = "业务员",
    orderDate = "订单日期",
    address = "送货地址",
    deliveryDate = "交付日期",
    deliveryTime = "交付时间",
    contactPerson = "联系人",
    contact = "联系电话",
}
type FormKeys = keyof typeof Form; // 获取 Form 的所有键名
type FormValues = `${Form}`; // 获取 Form 的所有值
type FormObject = Record<FormKeys, string>; // 将键名转换为一个对象类型，值为 string
const form = reactive<FormObject>({
    orderID: "",
    clientName: "",
    operator: "",
    orderDate: "",
    address: "",
    deliveryDate: "",
    deliveryTime: "",
    contactPerson: "",
    contact: "",
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
</script>

<template>
    <h3 style="margin-bottom: 20px;">订单信息</h3>
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
            <el-date-picker v-model="form.orderDate" type="date" :placeholder="Form.orderDate" style="width: 100%" />
        </el-form-item>
        <el-form-item :label="Form.address">
            <el-input v-model="form.address" />
        </el-form-item>
        <el-form-item :label="Form.deliveryDate">
            <el-col :span="11">
                <el-date-picker v-model="form.deliveryDate" type="date" :placeholder="Form.deliveryDate"
                    style="width: 100%" />
            </el-col>
            <el-col :span="2" style="text-align: center;">
                <span>-</span>
            </el-col>
            <el-col :span="11">
                <el-time-picker v-model="form.deliveryTime" :placeholder="Form.deliveryTime" style="width: 100%" />
            </el-col>
        </el-form-item>
        <el-form-item :label="Form.contactPerson">
            <el-input v-model="form.contactPerson" />
        </el-form-item>
        <el-form-item :label="Form.contact">
            <el-input v-model="form.contact" />
        </el-form-item>
    </el-form>
</template>

<style lang="less" scoped></style>