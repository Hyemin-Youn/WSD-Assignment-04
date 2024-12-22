<template>
    <div>
      <p>Redirecting... Please wait.</p>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const query = new URLSearchParams(window.location.search);
      const code = query.get("code");
  
      if (code) {
        this.exchangeAuthorizationCode(code);
      } else {
        console.error("No authorization code found");
        this.$router.push("/signin"); // 코드가 없을 경우 로그인 페이지로 이동
      }
    },
    methods: {
      exchangeAuthorizationCode(code) {
        fetch("https://kauth.kakao.com/oauth/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "authorization_code",
            client_id: process.env.VUE_APP_KAKAO_API_KEY,
            redirect_uri: "https://hyemin-youn.github.io/WSD-Assignment-04/oauth/callback",
            code: code,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.access_token) {
              console.log("Access Token:", data.access_token);
              localStorage.setItem("kakaoToken", data.access_token);
              this.$router.push("/home"); // 성공 시 홈으로 리디렉션
            } else {
              console.error("Failed to get Access Token", data);
              this.$router.push("/signin"); // 실패 시 로그인 페이지로 리디렉션
            }
          })
          .catch((error) => {
            console.error("Error during token exchange", error);
            this.$router.push("/signin");
          });
      },
    },
  };
  </script>
  