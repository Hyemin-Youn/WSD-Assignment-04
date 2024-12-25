<template>
    <div>
      <div class="bg-image" />
      <div class="wrapper">
        <div class="card">
          <div class="content">
            <h2>카카오 로그인</h2>
            <button class="kakao-login" @click="handleKakaoLogin">
              카카오 로그인
            </button>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        errorMessage: "", // 오류 메시지를 저장
      };
    },
    mounted() {
      const query = new URLSearchParams(window.location.search);
      const code = query.get("code");
  
      if (code) {
        this.handleKakaoCallback(code);
      }
    },
    methods: {
      handleKakaoLogin() {
        const clientId = process.env.VUE_APP_KAKAO_JAVASCRIPT_KEY;
        const redirectUri = process.env.VUE_APP_KAKAO_REDIRECT_URI;
        const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
        window.location.href = kakaoAuthUrl;
      },
      async handleKakaoCallback(code) {
        try {
          const response = await fetch("https://kauth.kakao.com/oauth/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              grant_type: "authorization_code",
              client_id: process.env.VUE_APP_KAKAO_JAVASCRIPT_KEY,
              redirect_uri: process.env.VUE_APP_KAKAO_REDIRECT_URI,
              code: code,
            }),
          });
  
          const data = await response.json();
          if (data.access_token) {
            localStorage.setItem("kakaoToken", data.access_token);
            this.getUserInfo(data.access_token);
          } else {
            this.errorMessage = "카카오 로그인 중 문제가 발생했습니다.";
          }
        } catch (error) {
          this.errorMessage = "네트워크 오류가 발생했습니다. 다시 시도해주세요.";
          console.error(error);
        }
      },
      async getUserInfo(token) {
        try {
          const response = await fetch("https://kapi.kakao.com/v2/user/me", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          const data = await response.json();
          const userInfo = {
            nickname: data.properties.nickname,
            profile_image: data.properties.profile_image,
          };
  
          // 유저 정보를 저장하고 메인 페이지로 리다이렉트
          this.$store.commit("setUser", userInfo);
          this.$router.push("/main");
        } catch (error) {
          this.errorMessage = "사용자 정보를 가져오는 중 오류가 발생했습니다.";
          console.error(error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* 배경 이미지 */
  .bg-image {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("https://images.unsplash.com/photo-1512070679279-8988d32161be?q=80&w=1938&auto=format&fit=crop");
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
  
  /* 컨테이너 */
  .wrapper {
    width: 90%;
    max-width: 400px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* 카드 스타일 */
  .card {
    width: 100%;
    padding: 20px;
    background: #e50914;
    color: white;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .content h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
  
  .kakao-login {
    margin-top: 10px;
    padding: 10px;
    background-color: #fee500;
    color: #3d1d1d;
    font-weight: bold;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  
  .kakao-login:hover {
    background-color: #ffd600;
  }
  
  .error {
    margin-top: 10px;
    color: yellow;
    font-size: 0.9rem;
  }
  </style>
  