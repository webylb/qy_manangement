<template>
    <div id="app">
        <van-nav-bar v-if="!showHeader"
                     :title="headerTitle"
                     :fixed="true"
                     :border="false"
                     :left-arrow="true"
                     @click-left="onClickLeft"
        />
        <router-view :style="viewPaddingTop" class="router-wrap"/>
    </div>
</template>

<script>
    import {isWeiXin} from '../src/common/js/util'
    import {NavBar} from 'vant';

    export default {
        name: "app",
        data() {
            return {
                showHeader: true,
                transitionName: "",
                headerTitle: '券码管理'
            }
        },
        computed: {
            viewPaddingTop() {
                if (!this.showHeader) {
                    return "padding-top: 1.22667rem"
                } else {
                    return "padding-top: 0rem"
                }
            },
        },
        components: {
            [NavBar.name]: NavBar
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1);//返回上一层
            }
        }
    }
</script>
<style lang="less" scoped>
    #app {
        color: #333;
        line-height: 1;
        font-family: "PingFang SC", "Heiti SC", Helvetica, sans-serif;
        max-width: 750px;
        // position: relative;

        .van-nav-bar  {
            z-index: 100!important;
        }
        .van-nav-bar .van-icon {
            color: #0d0d0d;
            font-size: 18px;
            font-weight: bold;
        }

        .van-nav-bar__title {
            font-size: 18px;
            color: #0d0d0d;
        }

        .van-nav-bar {
            background-color: #ededed;
        }
        .router-wrap {
          width: 100vw;
          height: 100vh;
          box-sizing: border-box;
          background-color: #fff;
          max-width: 750px;
          // position: fixed;
          // left: 0;
          // top: 0;
          // bottom: 0;
          // right: 0;
          // overflow-y: scroll;
        }
    }
</style>
