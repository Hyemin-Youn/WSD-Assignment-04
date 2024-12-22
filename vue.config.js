const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/WSD-Assignment-04/'
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
  outputDir: path.resolve(__dirname, './dist'), // dist 폴더를 명시적으로 설정
});
