const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/WSD-Assignment-04/' // GitHub Pages 레포지토리 이름
    : '/',
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
