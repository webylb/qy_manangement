<template>
    <div class="login">
        <div class="logo-wrap">

        </div>
        <div class="main-wrap">
            <van-field
                    v-model="phoneNumber"
                    left-icon="phone-o"
                    placeholder="请输入手机号"
                    clearable
            >
                <div class="img-icon-wrap" slot="left-icon">

                </div>
            </van-field>
            <van-field type="password"
                       v-model="password"
                       left-icon="bag-o"
                       placeholder="请输入密码"
                       clearable
            >
                <div class="img-icon-wrap" slot="left-icon">

                </div>

            </van-field>
            <van-checkbox
                    v-model="checked"
                    icon-size="12"
            >
                同意<a href="https://www.baidu.com" class="use-protocol">《使用协议》</a>
            </van-checkbox>
            <van-button :disabled="disabledBtn" round to="/home" type="info">登录</van-button>
        </div>
        <div class="footer-wrap">
            <van-divider>
                客服电话：<span class="service-tel" @click="toService">40000000</span>
            </van-divider>
        </div>
    </div>
</template>

<script>
    import {Field, Checkbox, Button, Divider} from 'vant';

    export default {
        name: "Login",
        data() {
            return {
                checked: false,
                phoneNumber: '',
                password: '',
                disabledBtn: true
            }
        },
        watch: {
            phoneNumber(val) {
                if (val !== '' && this.password !== '') {
                    this.disabledBtn = false
                }
            },
            password(val) {
                if (val !== '' && this.phoneNumber !== '') {
                    this.disabledBtn = false
                }
            }
        },
        methods: {
            toService() {
                this.$dialog.alert({
                    message: '客服热线：40000000',
                    confirmButtonColor: '#1890ff',
                    closeOnClickOverlay: true
                }).then(() => {
                    // on confirm
                    window.location.href = 'tel:40000000'
                });
            }
        },
        components: {
            [Field.name]: Field,
            [Checkbox.name]: Checkbox,
            [Button.name]: Button,
            [Divider.name]: Divider,
        }

    }
</script>
<style lang="less">
    .login {
        .van-field__control::placeholder {
            color: #c2c2c2;
        }
    }
</style>
<style lang="less" scoped>
    .login {
        background-color: #fff !important;

        .logo-wrap {
            text-align: center;
            padding: 50px 0 24px 0;

            img {
                width: 90px;
            }
        }

        .main-wrap {
            width: 327px;
            margin: 0 auto;

            .van-field {
                margin-top: 26px;
                padding-left: 0;

                &::after {
                    left: 0;
                }

                .img-icon-wrap {
                    display: flex;
                    height: 24px;
                    align-items: center;
                    margin-right: 10px;

                    img {
                        height: 20px;
                    }
                }

            }

            .van-checkbox {
                padding-top: 15px;
                font-size: 12px;

                .use-protocol {
                    color: @subject-color;
                }
            }

            .van-button {
                margin-top: 62px;
                width: 225px;
                margin-left: 51px;
            }

            .van-button--disabled {
                border-color: #ddd;
                background-color: #ddd;
            }
        }

        .footer-wrap {
            padding-top: 120px;
            margin: 0 auto;
            width: 218px;

            .van-divider {
                margin: 0;
                font-size: 12px;

                .service-tel {
                    color: @subject-color;
                }
            }

        }
    }

</style>