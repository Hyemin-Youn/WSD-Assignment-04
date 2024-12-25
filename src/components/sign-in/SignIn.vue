<template>
  <div>
    <!-- 헤더 추가 -->
    <AppHeader @kakao-login="handleKakaoLogin" />

    <div class="bg-image" />
    <div class="wrapper">
      <!-- 로그인 카드 -->
      <div
        class="card"
        :class="{ active: activeCard === 'login', backward: activeCard === 'signup' }"
      >
        <div class="content">
          <h2>Login</h2>
          <form @submit.prevent="handleLogin">
            <label for="email">Email</label>
            <input id="email" v-model="email" type="email" required />

            <label for="password">Password</label>
            <input id="password" v-model="password" type="password" required />

            <p v-if="loginError" class="error">{{ loginError }}</p>

            <div class="remember-me">
              <input id="rememberMe" v-model="rememberMe" type="checkbox" />
              <label for="rememberMe">Remember Me</label>
            </div>

            <button type="submit">Sign In</button>
          </form>

          <!-- 카카오 로그인 버튼 -->
          <button class="kakao-login" @click="handleKakaoLogin">
            카카오 로그인
          </button>

          <p class="switch" @click="switchToSignup">
            Don't have an account? <b>Sign up</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue"; // 헤더 컴포넌트 import

export default {
  name: "SignInPage", // 컴포넌트 이름 수정
  components: {
    AppHeader, // 컴포넌트 등록
  },
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
  mounted() {
    const query = new URLSearchParams(window.location.search);
    const code = query.get("code");

    if (code) {
      this.handleKakaoCallback(code); // 카카오 로그인 토큰 처리 함수 호출
    }
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
      const clientId = process.env.VUE_APP_KAKAO_JAVASCRIPT_KEY;
      const redirectUri = process.env.VUE_APP_KAKAO_REDIRECT_URI;
      const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
      window.location.href = kakaoAuthUrl;
    },
    async handleKakaoCallback(code) {
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
        console.error("Failed to get Access Token:", data);
      }
    },
    async getUserInfo(accessToken) {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          console.log("사용자 정보:", res);

          // 사용자 정보를 Vuex에 저장
          const userInfo = {
            nickname: res.properties.nickname,
            profile_image: res.properties.profile_image,
          };
          this.$store.commit("setUser", userInfo);

          this.$router.push("/home");
        },
        fail: (err) => {
          console.error("사용자 정보 요청 실패:", err);
        },
      });
    },
  },
};
</script>

<style scoped>
/* 기존 스타일 유지 */
.bg-image {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1512070679279-8988d32161be?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.wrapper {
  width: 90%;
  max-width: 600px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.card {
  width: 100%;
  max-width: 560px;
  height: auto;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1.2s ease-in-out, opacity 1.2s ease-in-out;
  opacity: 0;
  z-index: 0;
  margin: 20px auto;
}

.card.active {
  opacity: 1;
  z-index: 2;
  transform: rotateY(0deg) translateX(0);
}

.card.backward {
  z-index: 1;
  transform: rotateY(-90deg) translateX(-100%);
  opacity: 0;
}
</style>
