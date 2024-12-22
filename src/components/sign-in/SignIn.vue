handleKakaoCallback() {
  const queryParams = new URLSearchParams(window.location.search);
  const code = queryParams.get("code");
  if (code) {
    fetch("https://kauth.kakao.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.VUE_APP_KAKAO_API_KEY,
        redirect_uri: "https://hyemin-youn.github.io/WSD-Assignment-04/",
        code: code,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("kakaoToken", data.access_token);
          this.getUserInfo(data.access_token);
        } else {
          alert("카카오 로그인에 실패했습니다. 다시 시도하세요.");
        }
      })
      .catch((error) => {
        console.error("Access Token 요청 오류:", error);
      });
  } else {
    console.error("Authorization Code가 없습니다.");
  }
}
