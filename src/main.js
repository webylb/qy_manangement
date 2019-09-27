import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import "amfe-flexible";
import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';
import '@/common/style/font/iconfont.less'
import vueg from 'vueg'

const Options = {
    duration: .2,
    shadow: false,
    enter: 'fadeIn',
    leave: 'fadeOut'
};

import {Toast, Dialog} from 'vant';

// import VConsole from 'vconsole'
// Vue.use(new VConsole())

if(process.env.NODE_ENV === 'development'){
    // document.cookie = "CASH_STORE_COOKIE="+"\"sessionId=3a00ea28cbee6a2b5cf5def45eef08e9&storeId=9\""
}

Vue.use(vueg, router, Options);// 传入实例化后的router，和插件的全局配置
Vue.use(Toast);
Vue.use(Dialog);
Vue.config.productionTip = false;

//添加百度统计
router.beforeEach((to, from, next) => {
    if (to.fullPath) {
      try {
        window._hmt && window._hmt.push(['_trackPageview', '/f/g/' + window.infoData.merchantId + '.html' + to.fullPath]);
      } catch (e) {
        console.log(e)
      }
    }
    next();
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

export default new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
