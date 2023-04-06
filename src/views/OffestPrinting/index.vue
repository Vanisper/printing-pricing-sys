<script lang="ts" setup>
import { Calendar, Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
</script>

<template>
    <h1>胶版印刷</h1>
    <div class="">
        <h3 style="margin-bottom: 20px;">订单信息</h3>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-input v-model="input1" placeholder="订单编号" :suffix-icon="Calendar" />
            </el-col>
            <el-col :span="8">
                <el-input v-model="input2" placeholder="客户名称" :prefix-icon="Search" />
            </el-col>
            <el-col :span="8">
                <el-input v-model="input2" placeholder="业务员" :prefix-icon="Search" />
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-input v-model="input2" placeholder="订单日期" :prefix-icon="Search" />
            </el-col>
            <el-col :span="12">
                <el-input v-model="input2" placeholder="送货地址" :prefix-icon="Search" />
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-input v-model="input2" placeholder="交货日期" :prefix-icon="Search" />
            </el-col>
            <el-col :span="8">
                <el-input v-model="input2" placeholder="联系人" :prefix-icon="Search" />
            </el-col>
            <el-col :span="8">
                <el-input v-model="input2" placeholder="联系人电话" :prefix-icon="Search" />
            </el-col>
        </el-row>
    </div>
    <div class="">
        <h3 style="margin: 20px 0;">产品信息</h3>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-input v-model="input1" placeholder="产品分类" :suffix-icon="Calendar" />
            </el-col>
            <el-col :span="12">
                <el-input v-model="input2" placeholder="产品数量" :prefix-icon="Search" />
            </el-col>

        </el-row>
        <el-row :gutter="20">
            <el-col :span="2" style="display: flex;justify-content: center;align-items: center;">
                <span style="display: flex;">备注：</span>
            </el-col>
            <el-col :span="22">
                <el-input type="textarea" :rows="2" v-model="input2" placeholder="备注" />
            </el-col>
        </el-row>
    </div>
    <div class="">
        <h3 style="margin: 20px 0;">报价</h3>

    </div>
</template>

<style lang="less" scoped>
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}
</style>