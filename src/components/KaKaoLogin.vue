<template>
    <div>
      <button class="kakao-login" @click="handleKakaoLogin">카카오 로그인</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleKakaoLogin() {
        const clientId = process.env.VUE_APP_KAKAO_JAVASCRIPT_KEY;
        const redirectUri = process.env.VUE_APP_KAKAO_REDIRECT_URI;
        const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
        window.location.href = kakaoAuthUrl;
      },
    },
  };
  </script>
  
  <style scoped>
  .kakao-login {
    background-color: #fee500;
    color: #3d1d1d;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }
  </style>
  