<script lang="ts" setup>
import OrderInfo from "./include/order-info.vue";
import ProductInfo from "./include/product-info.vue";
import PriceInfo from "./include/price-info/index.vue";
import { useAppStores } from "../../stores/app";
import { useRoute, useRouter } from "vue-router";

onMounted(() => {
    if (!useRoute().meta.keepAlive) {
        const t = setTimeout(() => {
            document.title = "胶版印刷"
            clearTimeout(t)
        })
    }
})

onActivated(() => {
    document.title = "胶版印刷";
    if (!(localStorage.getItem("isLogin") === "true")) {
        useRouter().push({
            path: "/admin/login"
        })
    }
})

onDeactivated(() => {
    useAppStores().setDefaultTitle()
})
const data1 = ref();
const data2 = ref();
const data3 = ref();
const getData1 = (data: any) => {
    data1.value = toRaw(data);
}

const getData2 = (data: any) => {
    data2.value = toRaw(data);
}

const getData3 = (data: any) => {
    data3.value = toRaw(data);
}

const boardPrice = ref<number>(0);
const ttt = ref(0)
const handleChange = () => {
    ttt.value = (boardPrice.value - output.value[10].value);
}

const output = ref()
watch([data1, data2, data3, ttt], (value) => {
    if (value[0] && value[1] && value[2]) {
        // 纸张按照A0大小计算
        // 如果封面或者内页指定了双面的话,就可以将纸张数量减半
        // 封面消耗总纸张(A0)数量（封页+封底：每本2页/4面）
        const coverCount = Math.ceil((value[1].productCount * 4 / (2 ** value[1].size)) / 2);
        // 内页数量消耗总纸张(A0)数量
        const contentCount = Math.ceil((value[1].pageNumber / (2 ** value[1].size)) / (value[2].content.isDouble ? 2 : 1)) * value[1].productCount;
        // console.log("封面消耗纸张数量", coverCount);
        // console.log("封面纸张价格", coverCount * value[2].cover.weight.value);
        const coverPagePrice = coverCount * value[2].cover.weight.value;
        // console.log("封面油墨价格", coverCount / 500 * 20 * value[2].cover.colorSystem);
        const coverInkPrice = coverCount / (value[2].cover.isDouble ? 500 : 1000) * 20 * value[2].cover.colorSystem;
        // console.log("内页消耗纸张数量", contentCount);
        // console.log("内页纸张价格", contentCount * value[2].content.weight.value);
        const contentPagePrice = contentCount * value[2].content.weight.value;
        // console.log("内页油墨价格", contentCount / 500 * 20 * value[2].content.colorSystem);
        const contentInkPrice = contentCount / (value[2].content.isDouble ? 500 : 1000) * 20 * value[2].content.colorSystem;
        // 印后加工价格
        const lamination = value[2].afterPrint.lamination.label ? value[2].afterPrint.lamination.value : 0;
        const glazing = value[2].afterPrint.glazing.label ? value[2].afterPrint.glazing.value : 0;
        const bronzing = value[2].afterPrint.bronzing.label ? value[2].afterPrint.bronzing.value : 0;
        const embossing = value[2].afterPrint.embossing.label ? value[2].afterPrint.embossing.value : 0;
        const framing = value[2].afterPrint.framing.label ? value[2].afterPrint.framing.value : 0;
        // console.log("印后加工价格", value[1].productCount * (value[2].afterPrint.binding + lamination + glazing + bronzing + embossing + framing));
        const afterPrintPrice = value[1].productCount * (value[2].afterPrint.binding + lamination + glazing + bronzing + embossing + framing);

        const allPrice = coverPagePrice + coverInkPrice + contentPagePrice + contentInkPrice + afterPrintPrice;
        output.value = [
            {
                label: "封面消耗纸张数量",
                value: coverCount
            },
            {
                label: "封面纸张价格(元)",
                value: coverPagePrice
            },
            {
                label: "封面油墨价格(元)",
                value: coverInkPrice
            },
            {
                label: "内页消耗纸张数量",
                value: contentCount
            },
            {
                label: "内页纸张价格(元)",
                value: contentPagePrice
            },
            {
                label: "内页油墨价格(元)",
                value: contentInkPrice
            },
            {
                label: "印后加工价格(元)",
                value: afterPrintPrice
            },
            {
                label: "制版数量",
                value: (Math.ceil(contentCount / value[1].productCount / (2 ** value[1].size)) + 1) * (value[1].productType == "001" ? 1 : 0)
            },
            {
                label: "制版费用(元)",
                value: ((Math.ceil(contentCount / value[1].productCount / (2 ** value[1].size))) * 50 * value[2].content.colorSystem + 1 * 50 * value[2].cover.colorSystem) * (value[1].productType == "001" ? 1 : 0)
            },
            // {
            //     label: "预价格",
            //     value: allPrice + (Math.ceil(contentCount / (2 ** value[1].size))) * 50 * value[2].content.colorSystem + 1 * 50 * value[2].cover.colorSystem
            // },
            {
                label: "人工费(元)",
                value: (allPrice + ((Math.ceil(contentCount / value[1].productCount / (2 ** value[1].size))) * 50 * value[2].content.colorSystem + 1 * 50 * value[2].cover.colorSystem) * (value[1].productType == "001" ? 1 : 0)) * (value[1].productType == "001" ? 0.2 : 0.3)

            },
            {
                label: "总价格(元)",
                value: (allPrice + ((Math.ceil(contentCount / value[1].productCount / (2 ** value[1].size))) * 50 * value[2].content.colorSystem + 1 * 50 * value[2].cover.colorSystem) * (value[1].productType == "001" ? 1 : 0)) * (value[1].productType == "001" ? 1.2 : 1.3)
            },
            {
                label: "利润(元)",
                value: ttt.value
            },
            {
                label: "增值税(元)",
                value: ttt.value * 0.13
            }
        ];
        console.table(output.value, ["label", "value"]);
    }
}, {
    deep: true
})

</script>

<template>
    <el-affix position="top" :offset="20" style="text-align: right;">
        <el-popover placement="bottom" :width="400" trigger="hover">
            <template #reference>
                <el-button type="primary">查看结果</el-button>
            </template>
            <el-table :data="output">
                <el-table-column property="label" label="label" />
                <el-table-column property="value" label="value" />
            </el-table>
            <div>报价：<el-input-number v-model="boardPrice" :min="0" @change="handleChange" /></div>
        </el-popover>
    </el-affix>
    <order-info @data1="getData1" />
    <product-info @data2="getData2" />
    <price-info @data3="getData3" />
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