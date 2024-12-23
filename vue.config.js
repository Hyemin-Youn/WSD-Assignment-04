const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/WSD-Assignment-04/'
    : '/',
  env: {
    VUE_APP_KAKAO_JAVASCRIPT_KEY: process.env.VUE_APP_KAKAO_JAVASCRIPT_KEY,
  },
};

