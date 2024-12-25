<template>
    <div>
      <header id="header">
        <!-- 로그인 상태에 따라 UI 변경 -->
        <div v-if="isLoggedIn">
          <p>안녕하세요, {{ userName }}님</p>
          <button @click="handleLogout">로그아웃</button>
        </div>
        <div v-else>
          <p>로그인이 필요합니다</p>
          <button @click="handleLogin">로그인</button>
        </div>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoggedIn: false, // 로그인 상태
        userName: "", // 사용자 이름
      };
    },
    mounted() {
      // Kakao 초기화 (Kakao Developers에서 발급받은 JavaScript 키를 사용하세요)
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("YOUR_KAKAO_JAVASCRIPT_KEY");
      }
  
      // 새로고침 시 로그인 상태 확인
      const token = localStorage.getItem("kakaoToken");
      if (token) {
        this.isLoggedIn = true;
        this.fetchProfile();
      }
    },
    methods: {
      // 카카오 로그인 처리
      handleLogin() {
        window.Kakao.Auth.login({
          scope: "profile_nickname, account_email", // 동의 항목
          success: (authObj) => {
            console.log("로그인 성공:", authObj);
            localStorage.setItem("kakaoToken", authObj.access_token);
            this.isLoggedIn = true;
            this.fetchProfile();
          },
          fail: (err) => {
            console.error("로그인 실패:", err);
            alert("로그인에 실패했습니다. 다시 시도해주세요.");
          },
        });
      },
      // 사용자 정보 가져오기
      fetchProfile() {
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (response) => {
            console.log("사용자 정보:", response);
            this.userName = response.properties.nickname; // 프로필 이름 저장
          },
          fail: (error) => {
            console.error("프로필 조회 실패:", error);
            alert("사용자 정보를 불러올 수 없습니다.");
          },
        });
      },
      // 로그아웃 처리
      handleLogout() {
        if (window.Kakao.Auth.getAccessToken()) {
          window.Kakao.Auth.logout(() => {
            console.log("로그아웃 성공");
            localStorage.removeItem("kakaoToken");
            this.isLoggedIn = false;
            this.userName = "";
          });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  header {
    text-align: center;
    margin-top: 50px;
  }
  button {
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
  }
  </style>
  