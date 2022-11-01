module.exports = {
    devServer: {
        port: 8888,
        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
        // proxy: 'https://www2.exsoft.com.cn/'
        proxy: { //配置跨域
            '/api': {
              target: 'https://www2.exsoft.com.cn/', //填写请求的目标地址
              // ws: true,
              changOrigin: true, //允许跨域
              pathRewrite: {
                '^/api': '/api' //请求的时候使用这个api就可以
              }
            }
          }
    },
}