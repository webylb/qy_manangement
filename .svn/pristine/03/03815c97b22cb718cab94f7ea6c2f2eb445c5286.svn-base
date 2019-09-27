<template>
    <div id="Title">
        <div class="title_box">
            <div class="inner">
                <van-image
                        :width="child.style.width"
                        :height="child.style.height"
                        :src="child.content.imgLeft"
                />
                <P :style="{color: child.style.color}">{{child.content.text}}</P>
                <van-image
                        :width="child.style.width"
                        :height="child.style.height"
                        :src="child.content.imgRight"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import {Image} from 'vant'

    export default {
        name: 'Title',
        props: ['child'],
        components: {
            [Image.name]: Image
        },
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
    .title_box {
        width: 100%;

        .inner {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            P {
                font-size: 20px;
                font-family: PingFang SC;
                font-weight: 500;
                padding: 0 11px;
                margin: 0;
            }
        }
    }
</style>
