<template>
    <div class="box">
        <!-- <div class="wallpaper" :data-background-image="wallpaperPath" :style="{ backgroundImage: `url(${wallpaperPath})` }">
        </div> -->
        <div class="content">
            <div class="card">
                <span class="title">印刷计价系统-管理员后台</span>
                <div class="form">
                    <div class="group">
                        <input ref="$id" placeholder="‎" type="text" v-model="id" :required="undefined">
                        <label for="name">账号</label>
                    </div>
                    <div class="group">
                        <input ref="$passwd" placeholder="‎" type="password" v-model="passwd" :required="undefined">
                        <label for="password">密码</label>
                    </div>
                    <!-- <div class="group">
                    <input placeholder="‎" type="email" id="email" name="email" :required="undefined">
                    <label for="email">Email</label>
                    </div> -->
                    <!-- <div class="group">
                    <textarea placeholder="‎" id="comment" name="comment" rows="5" :required="undefined"></textarea>
                    <label for="comment">Comment</label>
                    </div> -->
                    <button @click="submit">登录</button>
                </div>
            </div>
            <div class="tip">
                <p>测试账号: admin</p>
                <p>测试密码: admin</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const wallpaperCounter = computed(() => Math.floor(Math.random() * 11));
const wallpaperPath = computed(() => "./wallpaper/" + wallpaperCounter.value + ".jpg");
const router = useRouter()
const id = ref("admin");
const passwd = ref("admin");
const lists = [
    {
        id: "admin",
        passwd: "admin",
    },
    {
        id: "test",
        passwd: "test",
    }
]

const $id = ref<HTMLInputElement>()
const $passwd = ref<HTMLInputElement>()
const check = () => {
    for (let i = 0; i < lists.length; i++) {
        if (id.value === lists[i].id && passwd.value === lists[i].passwd) {
            return true; // 如果校验通过，则返回 true
        }
    }

    // 如果列表中没有匹配的对象，则检查本地存储中的登录状态
    return (localStorage.getItem("isLogin") === "true") ? true : false;
};

const submit = () => {
    if (check()) {
        localStorage.setItem("isLogin", "true");
        router.push({
            path: "/admin/OffestPrinting"
        })
    } else {
        localStorage.removeItem("isLogin")
        ElMessage.error('账号或密码错误')
    }
}
onMounted(() => {
    if (localStorage.getItem("isLogin") === "true") {
        router.push({
            path: "/admin/OffestPrinting"
        })
    } else {
        localStorage.removeItem("isLogin")
    }
})

onActivated(() => {
    if (localStorage.getItem("isLogin") === "true") {
        router.push({
            path: "/admin/OffestPrinting"
        })
    } else {
        localStorage.removeItem("isLogin")
    }
})

</script>

<style lang="less" scoped>
.box {
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    -webkit-user-drag: none;
    overflow: hidden;

    &:hover {
        .wallpaper {
            z-index: 0;
        }
    }

    .wallpaper {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        flex-grow: 1;
        box-sizing: border-box;
        z-index: -1;
        // background: rgba(217, 217, 217, 0.58);
        border: 1px solid white;
        backdrop-filter: blur(6px);
        text-align: center;
        cursor: pointer;
        transition: all 0.5s;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        font-weight: bolder;
        color: black;

        &:hover {
            border-radius: 17px;
            border: 1px solid red;
            border-right: none;
            transform: scale(1.05);
            box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
        }

        &:active {
            border-radius: 17px;
            border: 1px solid red;
            transform: scale(0.95) rotateZ(1.7deg);
            box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
        }
    }

    .content {
        // background-color: #f0f0f0;
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-direction: column;
        // width: calc(100% - 61.8%);
        width: 100%;

        background: rgb(236, 236, 236);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }

    @media (max-width: 1080px) {
        flex-direction: column;

        .wallpaper {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
            filter: blur(20px);
        }

        .content {
            width: 100%;

            .card {
                background-color: transparent;

                .title,
                .form {
                    z-index: 0;

                    button {
                        z-index: 0;
                    }
                }

                label {
                    color: #000000 !important;
                    font-weight: bold;
                    background-color: transparent !important;
                }
            }

            .tip {
                z-index: 0;
                color: #000;
            }
        }
    }
}

.card {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    width: 350px;
    display: flex;
    flex-direction: column;
    user-select: none;

    .title {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }

    .form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;

        .group {
            position: relative;

            label {
                font-size: 14px;
                color: rgb(99, 102, 102);
                position: absolute;
                top: -10px;
                left: 10px;
                background-color: #fff;
                transition: all .3s ease;
            }

            input,
            textarea {
                padding: 10px;
                border-radius: 5px;
                border: 1px solid rgba(0, 0, 0, 0.2);
                margin-bottom: 20px;
                outline: 0;
                width: 100%;
                background-color: transparent;
            }

            input:placeholder-shown+label,
            textarea:placeholder-shown+label {
                top: 10px;
                background-color: transparent;
            }

            input:focus,
            textarea:focus {
                border-color: #3366cc;
            }

            input:focus+label,
            textarea:focus+label {
                top: -10px;
                left: 10px;
                background-color: #fff;
                color: #3366cc;
                font-weight: 600;
                font-size: 14px;
            }

            textarea {
                resize: none;
                height: 100px;
            }
        }

        button {
            background-color: #3366cc;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background-color: #27408b;
            }
        }
    }
}

.tip {
    padding-top: 30px;
    color: #8f8f8f;
}
</style>