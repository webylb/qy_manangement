<template>
    <div class="popup" @touchmove.prevent>
        <div class="popup-overlay"></div>
        <div class="popup-content">
            <div class="content-head">
                <img src="../../assets/images/popup-success.png" alt="">
                <p v-if="successType == 1">恭喜你参团成功</p>
                <p v-else-if="successType == 2">大佬，恭喜你拼团成功啦~</p>
                <p v-else>恭喜你拼团成功</p>
                <van-icon class="close" name="cross" @click.stop="closeSuccessPupup()" />
            </div>
            <div class="content">
                <div v-if="successType == 1" class="cont-default-add-success">
                    <div class="qr-wrap">
                        <img src="../../assets/images/qr-code.png" alt="">
                    </div>
                    <p class="text1">关注公众号获得最新拼团消息</p>
                    <p class="text2">识别二维码关注公众号</p>
                </div>  
                <div v-else-if="successType == 2" class="cont-member-add-success">
                    <div class="prizes-content">
                        <div class="prizes-item">
                            <img src="../../assets/images/vip-img.png" alt="">
                            <div class="info">
                                <p class="title">获得沃粉会员一个月</p>
                                <p class="text">详情请往【杭州沃粉团】公共号查看</p>
                            </div>
                        </div>
                    </div>
                    <div class="info-success">
                        <p>免费开团</p>
                        <p>获得爱奇艺会员月卡</p>
                        <div>
                            <img src="../../assets/images/text-bottom.png" alt="">
                        </div>
                    </div>
                    <div class="btn">
                        <button type="button" @click.stop="createCollage()">我要开团</button>
                    </div>
                </div>
                <div v-else class="cont-member-add-success cont-commander-add-success">
                    <div class="prizes-content">
                        <div class="prizes-item">
                            <img src="../../assets/images/vip-img.png" alt="">
                            <div class="info">
                                <p class="title">获得沃粉会员一个月</p>
                                <p class="text">详情请往【杭州沃粉团】公共号查看</p>
                            </div>
                        </div>
                        <div class="prizes-item">
                            <img src="../../assets/images/iqy.png" alt="">
                            <div class="iqy-info">
                                <p class="title">获得沃粉会员一个月</p>
                                <p class="code">
                                    <span>兑换码： {{ code }}</span> 
                                    <button type="button"
                                        v-clipboard:copy="code" 
                                        v-clipboard:success="copySuccess" 
                                        v-clipboard:error="copyError">复制</button>
                                </p>
                                <p class="link">
                                    <span @click.stop="toUse()" class="van-hairline--bottom">前去使用</span> <i class="iconfont">&#xe62a;</i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="btn">
                        <button type="button" @click.stop="closeSuccessPupup()">我知道了</button>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Icon } from 'vant'
    import VueClipboard from 'vue-clipboard2'
    Vue.use(VueClipboard)
    import { trackEvent } from '../../common/js/util'
    export default {
        name: "SuccessPopup",
        data(){
            return{
                img:''
            }
        },
        components: {
            [Icon.name]: Icon,
        },
        props:{
            successType: {
                type: Number,
                default: 1
            },
            code: {
                type: Number
            }
        },
        methods: {
            createCollage(){
                this.$emit('createCollage','partnerPopOpen')
            },
            closeSuccessPupup() {
                this.$emit('closeSuccessPupup')
            },
            copySuccess(){
                this.$toast('复制成功');
                trackEvent('团员拼团成功页弹窗复制按钮')
            },
            copyError(){
                this.$toast('复制失败');
            },
            toUse(){
                this.$emit('toUse','leaderPopUse');
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
            background:rgba(255,255,255,1);
            border-radius:15px;
            z-index: 101;
            .content-head {
                width:343px;
                height:179px;
                background: url('../../assets/images/popup-bg.png') no-repeat center;
                background-size: 100% 100%;
                border-radius:15px;
                text-align: center;
                padding-top: 26px;
                box-sizing: border-box;
                position: relative;
                img {
                    width: 106px;
                    height: 71px;
                }
                p {
                    margin: 0;
                    font-size:20px;
                    font-family:PingFang SC;
                    font-weight:bold;
                    color:rgba(255,59,50,1);
                    text-align: center;
                    margin-top: 16px;
                }
                .close {
                    position: absolute;
                    right: 17px;
                    top: 22px;
                    color: rgba(204, 204, 204, 1);
                    font-size: 18px;
                    cursor: pointer;
                }
            }
            .content {
                min-height: 100px;
                .cont-default-add-success {
                    padding: 31px 0 33px 0;
                    box-sizing: border-box;
                    .qr-wrap {
                        width: 112px;
                        height: 112px;
                        margin: 0 auto;
                        border-radius:8px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    p {
                        margin: 0;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .text1 {
                        margin: 16px 0 13px 0;
                        font-size:14px;
                        font-family:PingFang SC;
                        font-weight:500;
                        color:rgba(136,74,50,1);
                        text-align: center;
                    }
                    .text2 {
                        font-size:12px;
                        font-family:PingFang SC;
                        font-weight:500;
                        color:rgba(153,153,153,1);
                        text-align: center;
                    }
                }
                .cont-member-add-success {
                    padding: 19px 0 44px 0;
                    box-sizing: border-box;
                    .prizes-content {
                        text-align: center;
                        .prizes-item {
                            display: flex;
                            justify-content: flex-start;
                            // align-items: center;
                            padding: 0 16px;
                            box-sizing: border-box;
                            img {
                                height: 60px;
                                width: 92px;
                                margin: 0 12px 0 0;
                            }
                            .info {
                                padding: 7px 0 10px 0;
                                width: 207px;
                                box-sizing: border-box;
                                p {
                                    margin: 0;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    text-align: left;
                                    line-height: 1.2;
                                }
                                .title{
                                    font-size: 16px;
                                    color: rgba(136, 74, 50, 1);
                                    margin-bottom: 10px;
                                }
                                .text {
                                    font-size: 12px;
                                    color: rgba(153, 153, 153, 1);
                                }

                            }
                        }
                    }
                    .info-success {
                        margin-top: 20px;
                        margin-bottom: 35px;
                        font-size:18px;
                        font-family:PingFang SC;
                        font-weight:500;
                        color:rgba(120,50,24,1);
                        line-height:26px;
                        p {
                            margin: 0;
                            text-align: center;
                            color: rgba(120, 50, 24, 1);
                        }
                        div {
                            margin-top: 14px;
                            text-align: center;
                            img { 
                                width: 12px;
                                height: 12px;
                            }
                        }
                    }
                    .btn {
                        height: 55px;
                        text-align: center;
                        button {
                            outline: none;
                            border: none;    
                            width:293px;
                            height:55px;
                            border-radius:28px;
                            border: 4px solid #ffdb68;
                            color: #fff;
                            font-size: 18px;
                            // background: #ffdb68 url("../../assets/images/btn-default.png") no-repeat center;
                            // background-size: 100% 100%;
                            // box-shadow: 0px 5px 25px rgba(250,69,43,0.4);
                            background: linear-gradient(0deg, #FF3931 0%, #FF953C 100%);
                            box-shadow: 0px 8px 12px 0px #FF6A23 inset, 0px -7px 12px 0px #FF2721 inset, 0px 5px 25px rgba(250,69,43,0.4);
                        }
                    }
                }
                .cont-commander-add-success {
                    .prizes-item {
                        margin-bottom: 20px;
                        &:last-child {
                            margin-bottom: 36px;
                        }
                        .iqy-info {
                            width: 207px;
                            p {
                                margin: 0;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                text-align: left;
                            }
                            .title{
                                font-size: 16px;
                                color: rgba(136, 74, 50, 1);
                                margin-bottom: 5px;
                            }
                            .code {
                                font-size: 12px;
                                color: rgba(153, 153, 153, 1);
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                                margin-bottom: 3px;
                                line-height: 1.2;
                                span {
                                    width: 170px;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    margin-right: 3px;
                                }
                                button {
                                    outline: none;
                                    background: transparent;
                                    width: 34px;
                                    height:18px;
                                    border:1px solid rgba(255,145,60,1);
                                    border-radius:9px;
                                    font-size:11px;
                                    font-family:PingFang SC;
                                    font-weight:500;
                                    color:rgba(255,145,60,1);
                                    padding: 0;
                                    text-align: center;
                                }
                            }
                            .link {
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                                span {
                                    font-size:14px;
                                    font-family:PingFang SC;
                                    font-weight:500;
                                    color:rgba(253,123,66,1);
                                    border-bottom: 1px solid rgba(253,123,66,1);;
                                }
                                i {
                                    font-size:16px;
                                    color: rgba(253,123,66,1);
                                    margin-left: 5px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>