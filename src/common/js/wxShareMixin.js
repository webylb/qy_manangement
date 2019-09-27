import wx from 'weixin-js-sdk'
import * as core from '../../api/hexiao'

export default {
  data() {
    return {
      shareUrl: location.href,
      shareLink: window.location.href,  //分享出去的链接
      shareTitle: '',  //分享的标题
      shareDesc: '', //分享的详情介绍
      shareImgUrl: '',
      shareHidden: false,
      getLocation1:false
    }
  },
  methods: {
    //微信分享使用方法

    wxInit(sd) {
      console.log(wx);
      let _this = this;

    }),
  }
}
