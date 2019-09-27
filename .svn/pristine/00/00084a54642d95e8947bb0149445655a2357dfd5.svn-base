import router from '@/router.js'
import app from '@/main.js'

// 验证手机号码
export function checkMobile(mobile) {
    if (!(/^[1][0-9]{10}$/.test(mobile))) {
        return false;
    } else {
        return true
    }
}

//验证码验证
export function checkSmsCode(code) {
    if (!(/[0-9]{6}$/.test(code))) {
        return false;
    } else {
        return true
    }
}


// 节流函数
export function debounce(func, delay) {
    let timer
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}


export function isWeiXin() {
    const ua = navigator.userAgent.toLowerCase();
    const isWeixin = ua.indexOf('micromessenger') !== -1;
    return isWeixin

}

export function requestDispose(response, handelFlag = false, loginFlag = false) {
    if (response.data.code && '00' === response.data.code) {
        return response.data
    } else if (response.data.code && 'unLogin' === response.data.code) {
        if (!loginFlag) {
            router.push('/login')
        }
    } else {
        if (handelFlag) {
            return response.data
        } else {
            app.$toast({
                message: response.data.message,
            });
        }

    }
}

export function parseJson(str) {
    let _data = JSON.parse(str)
    let _str = ''
    for (let key in _data) {
        _str = _str + ' ' + _data[key]
    }
    _str = _str.substr(1)
    return _str
}

export function extend(target, source) {
    for (var obj in source) {
        target[obj] = source[obj];
    }
    return target;
}

function _add0(m) {
    return m < 10 ? '0' + m : m
}

export function timeFormat(timestamp, state = 0) {
    let time = new Date(timestamp);
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (state === 0) {
        return year + '-' + _add0(month) + '-' + _add0(date)
    } else if (state === 1) {
        return _add0(minutes) + ':' + _add0(seconds)
    } else if (state === 2) {
        return year + '-'+_add0(month) + '-' + _add0(date) + ' ' + _add0(hours) + ':' + _add0(minutes) + ':' + _add0(seconds)

    }
}

/**
 * @description: 格式化价格 保留两位小数
 * @param {type} : val {Num}
 * @return: val
 */
export function priceFormat(val) {
    if(val) {
        let res = parseFloat(val).toFixed(2)
        return res
    }
}

/**
 * @description: 添加百度统计事件追踪
 * @param {type}:  label {String}
 * @return: null
 */
export function trackEvent(label) {
    if(label) {
        try {
            window._hmt && window._hmt.push(['_trackEvent', label, 'click']);
        } catch (error) {
            console.log(label + '事件统计失败:' + error)
        }
    }
}
