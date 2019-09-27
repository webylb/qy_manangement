const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const customTheme = require("./van-custom-theme")
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('html-loader')
            .test(/\.html$/)
            .use('html-loader')
            .loader('html-loader')
            .end()
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ["*"]
                    })
                ]
            },
            less: {
                modifyVars: customTheme.theme,
                javascriptEnabled: true
            }
        }
    },
    productionSourceMap: false,
    devServer: {
        disableHostCheck: true,
        // host: 'test.guijitech.com',
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            '/api': {
                target: 'https://prev-vip.guijitech.com/',
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_TITLE === 'qyCouponManagement_line' ? 'https://c1.51jujibao.com/static/mod/qyCouponManagement/' : 'https://prev-c1.51jujibao.com/static/mod/qyCouponManagement/' : '/',
    assetsDir: 'static',
    outputDir: process.env.VUE_APP_TITLE === 'qyCouponManagement_line' ? 'line' : 'prev',
    indexPath: 'index.html'
};
