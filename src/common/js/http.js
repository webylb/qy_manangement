import axios from 'axios'
import {BASE_URL, OUT_TIME} from './config'
import app from '@/main.js'
import {throwErr} from "./throwErr";
// 创建axios实例

const $ = axios.create({
    // baseURL: BASE_URL,
    timeout: OUT_TIME
});


// 请求拦截器
$.interceptors.request.use((config) => {
    if (config.headers.showLoading) {
        showFullScreenLoading()
    }
    return config
}, error => {
    tryHideFullScreenLoading()
    app.$toast({
        message: "未知错误",
    });
})
// 响应拦截器
$.interceptors.response.use((response) => {
    if (response.config.headers.showLoading) {
        tryHideFullScreenLoading()
    }
    return response
}, error => {
    tryHideFullScreenLoading();
    if (error && error.response) {
        let res = {};
        res.code = error.response.status;
        res.msg = throwErr(error.response.status, error.response) //throwErr 捕捉服务端的http状态码 定义在utils工具类的方法
        app.$toast({
            message: res.msg,
        });
        return
    }
    app.$toast({
        message: "未知错误",
    });
})


let needLoadingRequestCount = 0

function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}


function startLoading() {
    app.$toast.loading({
        mask: false,
        forbidClick: true,
        message: '加载中...',
        duration: 0
    });
}

function endLoading() {
    app.$toast.clear()
}


function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return;
    needLoadingRequestCount--;
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}

export default {
    post: (url, data, config = {headers: {showLoading: true}}) => $.post(url, data, config)
}
