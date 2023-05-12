<template>
    <div class="card">
        <div class="tools">
            <div class="circle">
                <span class="red box"></span>
            </div>
            <div class="circle">
                <span class="yellow box"></span>
            </div>
            <div class="circle">
                <span class="green box"></span>
            </div>
        </div>
        <div v-if="content" class="card__content">
            <div class="content" v-if="content.type == 'html'" v-html="content.value"></div>
            <div class="content" v-else-if="content.type == 'text'">{{ content.value }}</div>
            <pre class="content" v-else-if="content.type == 'pre'">{{ content.value }}</pre>

        </div>
    </div>
</template>
<script lang="ts" setup>
interface IContent {
    type: "pre" | "text" | "html";
    value: any
}
const props = defineProps({
    content: {
        type: Object as () => IContent,
        default: null
    }
})

</script>
<style lang="less" scoped>
.card {
    margin: 0 auto;
    background-color: #011522;
    border-radius: 8px;
    z-index: 1;
    display: flex;
    flex-direction: column;
}

.tools {
    display: flex;
    align-items: center;
    padding: 9px;

    .circle {
        padding: 0 4px;

        .box {
            display: inline-block;
            align-items: center;
            width: 10px;
            height: 10px;
            padding: 1px;
            border-radius: 50%;
        }

        .red {
            background-color: #ff605c;
        }

        .yellow {
            background-color: #ffbd44;
        }

        .green {
            background-color: #00ca4e;
        }
    }
}

.card__content {
    flex-grow: 1;
    color: aliceblue;

    .content {
        margin: 0 10px 20px 10px;
    }
}
</style>