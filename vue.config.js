const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/WSD-Assignment-04/' // GitHub Pages 레포지토리 이름
    : '/',
  devServer: {
    historyApiFallback: true, // `hash` 모드에서는 불필요
    allowedHosts: 'all', // 필요시 개발 서버가 모든 네트워크에서 접근 가능하도록 설정
  },
  transpileDependencies: true,
  lintOnSave: process.env.NODE_ENV !== 'production', // 배포 시 Lint 비활성화, 개발 시 활성화
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
});
