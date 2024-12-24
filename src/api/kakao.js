export async function getKakaoToken(authCode) {
    const response = await fetch("https://kauth.kakao.com/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.VUE_APP_KAKAO_JAVASCRIPT_KEY,
        redirect_uri: "https://hyemin-youn.github.io/WSD-Assignment-04/",
        code: authCode,
      }),
    });
    return response.json();
  }
  
  export async function getKakaoUserInfo(accessToken) {
    const response = await fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.json();
  }
  