import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import md5 from 'js-md5'
import "amfe-flexible";
import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';
import '@/common/style/font/iconfont.less'
import '@/common/style/common.less'

import {Toast, Dialog} from 'vant';

Vue.prototype.$md5 = md5;

import VConsole from 'vconsole'
Vue.use(new VConsole())

if(process.env.NODE_ENV === 'development'){
    // document.cookie = "CASH_STORE_COOKIE="+"\"sessionId=3a00ea28cbee6a2b5cf5def45eef08e9&storeId=9\""
}

Vue.use(Toast);
Vue.use(Dialog);
Vue.config.productionTip = false;

//添加百度统计
router.beforeEach((to, from, next) => {
    if (to.fullPath) {
      try {
        window._hmt && window._hmt.push(['_trackPageview', '/cash/ticket/index.html' + to.fullPath]);
      } catch (e) {
        console.log(e)
      }
    }

    if (to.meta.title) { // 判断是否有标题
        document.title = to.meta.title
    }

    next();
})

router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

export default new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
