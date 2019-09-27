<template>
    <div class="popup" @touchmove.prevent>
        <div class="popup-overlay"></div>
        <div class="popup-content">
            <div class="content-head">
                <img :src="img " alt="">
                <van-icon class="close" name="clear" @click.stop="closeSharePopup()" />
            </div>
            <div class="content">
                <button type="button">长按图片保存到相册</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { Icon } from 'vant'
    export default {
        name: "SuccessPopup",
        data(){
            return{
            }
        },
        components: {
            [Icon.name]: Icon,
        },
        props:{
            img: {
                type: String,
                default: ''
            }
        },
        methods: {
            closeSharePopup() {
                this.$emit('closeSharePopup')
            }
        }
    }
</script>

<style lang="less" scoped>
    .popup {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.1);
        z-index: 100;
        .popup-overlay{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 100;
        }
        .popup-content {
            width: 343px;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 101;
            .content-head {
                width: 343px;
                height: auto;
                border-radius:8px;
                text-align: center;
                overflow: hidden;
                position: relative;
                img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                .close {
                    position: absolute;
                    right: 11px;
                    top: 11px;
                    color: rgba(255,255,255,0.6);
                    font-size: 22px;
                    cursor: pointer;
                }
            }
            .content {
                margin-top: 12px;
                text-align: center;
                button {
                    outline: none;
                    border: none;
                    width:200px;
                    height:36px;
                    background:linear-gradient(180deg,rgba(253,94,55,1) 0%,rgba(230,35,20,1) 100%);
                    border-radius:18px;
                    font-weight: bold;
                    color:rgba(255,255,255,1);
                    line-height: 36px;
                    font-size: 16px;
                }
            }
        }
    }
</style>