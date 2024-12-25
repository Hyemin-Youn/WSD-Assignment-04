<template>
  <div>
    <p>카카오 로그인 중입니다. 잠시만 기다려 주세요...</p>
  </div>
</template>

<script>
export default {
  mounted() {
    const query = new URLSearchParams(window.location.search);
    const code = query.get("code");

    if (code) {
      this.fetchAccessToken(code);
    } else {
      console.error("Authorization Code가 없습니다.");
      this.$router.push("/signin");
    }
  },
  methods: {
    fetchAccessToken(code) {
      fetch("https://kauth.kakao.com/oauth/token", {
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
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            localStorage.setItem("kakaoToken", data.access_token);
            this.fetchUserInfo(data.access_token);
          } else {
            console.error("Access Token 발급 실패:", data);
            this.$router.push("/signin");
          }
        })
        .catch((error) => {
          console.error("Access Token 요청 중 오류 발생:", error);
          this.$router.push("/signin");
        });
    },
    fetchUserInfo(token) {
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
          this.$store.commit("setUser", userInfo); // Vuex에 사용자 정보 저장
          this.$router.push("/home"); // 홈 화면으로 리다이렉트
        })
        .catch((error) => {
          console.error("사용자 정보 조회 실패:", error);
          this.$router.push("/signin");
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
