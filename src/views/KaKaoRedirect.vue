<template>
  <div>
    <p>로그인 처리 중...</p>
  </div>
</template>

<script>
export default {
  mounted() {
    const query = new URLSearchParams(window.location.search);
    const code = query.get("code");

    if (code) {
      this.exchangeKakaoToken(code);
    }
  },
  methods: {
    exchangeKakaoToken(code) {
      fetch("https://kauth.kakao.com/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id: process.env.VUE_APP_KAKAO_API_KEY,
          redirect_uri: "https://hyemin-youn.github.io/WSD-Assignment-04/kakao-redirect",
          code: code,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            localStorage.setItem("kakaoToken", data.access_token);
            this.$router.push("/home"); // 홈으로 리다이렉트
          } else {
            console.error("Failed to get Access Token:", data);
          }
        })
        .catch((error) => {
          console.error("Error during token exchange:", error);
        });
    },
  },
};
</script>
