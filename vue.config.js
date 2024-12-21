const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/WSD-Assignment-04/#/' // GitHub Pages 레포지토리 이름
    : '/',
  transpileDependencies: true,
  lintOnSave: false, // 저장 시 ESLint 비활성화
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
});
