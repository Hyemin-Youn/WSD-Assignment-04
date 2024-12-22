const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/WSD-Assignment-04/' // GitHub Pages 레포지토리 이름
    : '/',
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  devServer: {
    historyApiFallback: true, // 개발 서버에서 history 모드 활성화
  },
});
