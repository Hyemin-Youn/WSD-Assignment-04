const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/' // GitHub Pages 레포지토리 이름
    : '/',
    devServer: {
      historyApiFallback: true, // History 모드에서 개발 서버 지원
    },
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
