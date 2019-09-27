<template>
    <button class="timer-btn" :class="disabled?'dissendSmsBtn':''" type="button" v-on:click="run"
            :disabled="disabled || time > 0">{{ text }}
    </button>
</template>


<script>
    export default {
        props: {
            second: {
                type: Number,
                default: 60
            }
        },
        data: function () {
            return {
                time: 0,
                disabled: false
            }
        },
        methods: {
            run: function () {
                this.$emit('run');
            },
            start: function () {
                clearTimeout(this.timeOut);
                this.time = this.second;
                this.timer();
            },
            reset(){
                clearTimeout(this.timeOut);
                this.disabled = false;
            },
            setDisabled: function (val) {
                this.disabled = val;
            },
            timer: function () {
                if (this.time > 0) {
                    this.time--;
                    this.timeOut=setTimeout(this.timer, 1000);
                } else {
                    this.disabled = false;
                }
            }

        },
        computed: {
            text: function () {
                return this.time > 0 ? this.time + 's 后重获取' : '获取验证码';
            }
        }
    }
</script>


<style lang="less" scoped>
    .timer-btn {
        height: 100%;
        width: 100%;
        display: block;
        border: none;
        text-align: center;
        font-size: 15px;
        background-color: transparent;
        color: @subject-color;
        &:disabled{
            color: #c2c2c2;
        }
    }
</style>
