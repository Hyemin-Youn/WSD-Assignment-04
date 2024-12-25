<template>
  <div>
    <p>카카오 로그인 중입니다. 잠시만 기다려 주세요...</p>
  </div>
</template>

<script>
export default {
  mounted() {
    // URL에서 인증 코드를 추출합니다.
    const query = new URLSearchParams(window.location.search);
    const code = query.get("code");

    if (code) {
      // 인증 코드를 사용하여 Access Token을 요청합니다.
      this.fetchAccessToken(code);
    } else {
      console.error("Authorization Code가 없습니다.");
      this.$router.push("/signin"); // 인증 코드가 없으면 로그인 페이지로 이동
    }
  },
  methods: {
    fetchAccessToken(code) {
      // Access Token 요청
      fetch("https://kauth.kakao.com/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id: process.env.VUE_APP_KAKAO_JAVASCRIPT_KEY, // 환경 변수에 저장된 JavaScript 키
          redirect_uri: process.env.VUE_APP_KAKAO_REDIRECT_URI, // 리다이렉트 URI
          code: code,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            // Access Token 저장
            localStorage.setItem("kakaoToken", data.access_token);

            // 사용자 정보 요청
            this.getUserInfo(data.access_token);
          } else {
            console.error("Access Token 발급 실패:", data);
            this.$router.push("/signin"); // 실패 시 로그인 페이지로 이동
          }
        })
        .catch((error) => {
          console.error("Access Token 요청 중 오류 발생:", error);
          this.$router.push("/signin"); // 오류 발생 시 로그인 페이지로 이동
        });
    },
    getUserInfo(token) {
      fetch("https://kapi.kakao.com/v2/user/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const userInfo = {
            nickname: data.properties.nickname,
            profile_image: data.properties.profile_image,
          };
          // 사용자 정보를 Vuex Store에 저장
          this.$store.commit("setUser", userInfo);

          // 홈 화면으로 리다이렉트
          this.$router.push("/home");
        })
        .catch((error) => {
          console.error("사용자 정보 요청 중 오류 발생:", error);
          this.$router.push("/signin"); // 오류 발생 시 로그인 페이지로 이동
        });
    },
  },
};
</script>

<style scoped>
/* 로딩 상태 스타일 */
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #555;
}
</style>
