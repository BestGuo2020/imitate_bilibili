module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://api.bilibili.com/x/web-interface/",
        changeOrigin: true, // 是否允许跨越, 开发环境中使用
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}