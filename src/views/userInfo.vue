<template>
    <div class="my">
        <section>
          <div class="my-list">
            <van-cell-group>
              <van-cell class="name" title="姓名" :value="userInfo.contact" />
              <van-cell title="手机号" :value="userInfo.mobile" />
              <van-cell title="门店名称" :value="userInfo.name" />
              <van-cell title="注册时间" :value="formatTime(userInfo.createTime)" />
            </van-cell-group>
          </div>
        </section>
    </div>
</template>

<script>

    import { Cell, CellGroup } from 'vant'
    import { mapState, mapMutations } from 'vuex'
    import * as core from '../api/my'
    import { timeFormat } from '../common/js/util'

    export default {
        name: 'userInfo',
        data() {
          return {
            loading: false,
            finished: false,
            name: '聚小宝',
            phone: '1888888888',
            shopName: '门店',
            date: '注册时间'
          }
        },
        computed: {
          userInfo: {
            get(){
              return this.$store.state.userInfo
            },
            set(val){
              this.$store.state.userInfo = val
            }
          },
        },
        created() {
          document.title = this.$route.meta.title;
          if(!(this.userInfo && this.userInfo.name)){
            this.getUserData()
          }
        },
        methods: {
          formatTime(val){
            return timeFormat(val)
          },
          ...mapMutations(['SAVE_USER_INFO']),
          getUserData(){
            core.getUserData().then(res => {
              console.log(res)
              if (res.code && res.code == '00') {
                this.name = res.result.name
                this.SAVE_USER_INFO(res.result || '--')
              }else{
                this.$toast(res.message)
              }
            }).catch(err => {
              this.$toast("网络错误")
            })
          }
        },
        components: {
          [Cell.name]: Cell,
          [CellGroup.name]: CellGroup
        }
    }
</script>

<style lang="less" scoped>
    /*@import "../common/style/mixins";*/
    .my {
      background-color: #F5F5F5;
      width: 100%;
      height: 100vh;
      .my-list {
        font-size:16px;
        color:rgba(51,51,51,1);
        span {
          display: inline-block;
          height: 22px;
          line-height: 24px;
          font-size:16px;
        }
      }

    }
    .my-list  /deep/ .van-field__label {
      font-size: 16px;
    }
    .my /deep/ .van-cell {
      padding: 19px 12px;
    }
    .my /deep/ .van-cell::after {
      left: 12px;
      border-color:#ebedf0;
    }
</style>
