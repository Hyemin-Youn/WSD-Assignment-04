const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './'
    ? '/WSD-Assignment-04/' // GitHub Pages의 레포지토리 이름
    : '/'
};

const path = require('path');

module.exports = {
  lintOnSave: false, // 저장 시 ESLint 비활성화
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
};

