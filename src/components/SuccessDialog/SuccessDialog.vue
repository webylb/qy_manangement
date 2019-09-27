<template>
    <van-dialog
            v-model="show"
            :show-confirm-button="false"
    >
        <div class="inner-wrap">
            <img :src="img">
            <div v-html="text"></div>
        </div>
    </van-dialog>
</template>

<script>
    export default {
        name: "SuccessDialog",
        data(){
            return{
                img:''
            }
        },
        watch:{
            show(a){
            if (a){
                this.img=require('../../assets/images/success.gif')
            }else {
                this.img=''
            }
            }
        },
        props:{
            show:{
                type:Boolean,
                default:false
            },
            text:{
                type: String,
                default: '成功！'
            }
        }
    }
</script>

<style lang="less" scoped>
    .inner-wrap{
        text-align: center;
        img{
            width: 78px;
            height: 78px;
            padding: 35px 0 11px;
        }
        div{
            margin: 0;
            line-height: 22.5px;
            padding: 0 0 37.5px;
        }
    }
</style>