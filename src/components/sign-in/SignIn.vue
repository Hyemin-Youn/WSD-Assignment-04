<script>
export default {
  data() {
    return {
      activeCard: "login",
      email: "",
      password: "",
      rememberMe: false,
      loginError: "",
      newEmail: "",
      newPassword: "",
      confirmPassword: "",
      termsAccepted: false,
      signupError: "",
    };
  },
  methods: {
    switchToSignup() {
      this.activeCard = "signup";
    },
    switchToLogin() {
      this.activeCard = "login";
    },
    handleLogin() {
      if (this.password.length < 6) {
        this.loginError = "Password must be at least 6 characters long.";
        return;
      }
      alert("Login successful!");
      this.$store.dispatch("login", { email: this.email });
      if (this.$route.path !== "/home") {
        this.$router.push("/home");
      }
    },
    handleRegister() {
      if (this.newPassword.length < 6) {
        this.signupError = "Password must be at least 6 characters long.";
        return;
      }
      if (this.newPassword !== this.confirmPassword) {
        this.signupError = "Passwords do not match.";
        return;
      }
      alert("Registration successful!");
      this.switchToLogin();
    },
    handleKakaoLogin() {
      const clientId = process.env.VUE_APP_KAKAO_API_KEY;
      const redirectUri = "https://hyemin-youn.github.io/WSD-Assignment-04/";
      const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
      console.log("Redirecting to Kakao Login:", kakaoAuthUrl);
      window.location.href = kakaoAuthUrl;
    },
    handleKakaoCallback() {
      const queryParams = new URLSearchParams(window.location.search);
      const code = queryParams.get("code");
      if (code) {
        console.log("Authorization code received:", code);
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
              console.log("Access Token received:", data.access_token);
              localStorage.setItem("kakaoToken", data.access_token);
              this.getUserInfo(data.access_token);
            } else {
              console.error("Failed to get Access Token:", data);
              alert("카카오 로그인에 실패했습니다. 다시 시도해주세요.");
            }
          })
          .catch((error) => {
            console.error("Access Token 요청 실패:", error);
          });
      } else {
        console.error("Authorization Code가 없습니다.");
      }
    },
    getUserInfo(token) {
      fetch("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("User info received:", data);
          this.$store.dispatch("login", { user: data.kakao_account.profile, token });
          this.$router.push("/home");
        })
        .catch((error) => {
          console.error("사용자 정보 요청 실패:", error);
          alert("사용자 정보를 가져오는데 실패했습니다.");
        });
    },
  },
  mounted() {
    this.handleKakaoCallback();
  },
};
</script>
