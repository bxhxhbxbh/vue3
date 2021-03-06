const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack")
const path = require("path")
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('html').tap(args => {
      args[0].title = "后台管理系统"
      return args
    })
    config.resolve.alias
    .set("@", resolve('src'))
  },
  devServer: {
    port: 8888,
    open: true,
    https: false, // 使用https提供服务
    host: 'localhost',
    hot: true,
    // disableHostCheck: true,
    proxy: {
      "^/api.*$": {
        target: 'http://1.116.64.64:5004/api2',
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
})
