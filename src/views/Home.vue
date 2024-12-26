<template>
  <div>
    <div class="bg-image" />
    <div class="wrapper">
      <!-- 로그인 카드 -->
      <div
        class="card"
        :class="{ active: activeCard === 'login', backward: activeCard === 'signup' }"
      >
        <div class="content">
          <h2 v-if="!user">Login</h2>
          <h2 v-else>Welcome, {{ user.nickname }}!</h2>
          <form v-if="!user" @submit.prevent="handleLogin">
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
          <button v-if="!user" class="kakao-login" @click="handleKakaoLogin">
            카카오 로그인
          </button>

          <p v-if="!user" class="switch" @click="switchToSignup">
            Don't have an account? <b>Sign up</b>
          </p>

          <!-- 로그아웃 버튼 -->
          <button v-else @click="logout" class="logout-button">Logout</button>
        </div>
      </div>

      <!-- 회원가입 카드 -->
      <div
        class="card"
        :class="{ active: activeCard === 'signup', backward: activeCard === 'login' }"
      >
        <div class="content">
          <h2>Sign Up</h2>
          <form @submit.prevent="handleRegister">
            <label for="newEmail">Email</label>
            <input id="newEmail" v-model="newEmail" type="email" required />

            <label for="newPassword">Password</label>
            <input
              id="newPassword"
              v-model="newPassword"
              type="password"
              required
            />

            <label for="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              required
            />

            <p v-if="signupError" class="error">{{ signupError }}</p>

            <div class="terms">
              <input id="terms" v-model="termsAccepted" type="checkbox" />
              <label for="terms">
                I have read the <b>Terms and Conditions</b>
              </label>
            </div>

            <button type="submit" :disabled="!termsAccepted">
              Register
            </button>
          </form>
          <p class="switch" @click="switchToLogin">
            Already have an account? <b>Sign in</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

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
  computed: {
    user() {
      return this.$store.state.user; // Vuex에서 사용자 정보 가져오기
    },
  },
  mounted() {
    const query = new URLSearchParams(window.location.search);
    const code = query.get("code");

    if (code) {
      this.handleKakaoCallback(code);
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
      this.$store.commit("setUser", { email: this.email });
      this.$router.push("/home");
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
    handleKakaoCallback(code) {
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
            this.getUserInfo(data.access_token);
          }
        })
        .catch((error) => console.error(error));
    },
    async getUserInfo(token) {
      await fetch("https://kapi.kakao.com/v2/user/me", {
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
          this.$store.commit("setUser", userInfo);
          this.$router.push("/home");
        })
        .catch((error) => console.error(error));
    },
    logout() {
      this.$store.commit("logout");
      localStorage.removeItem("kakaoToken");
      alert("로그아웃되었습니다.");
      this.$router.push("/signin");
    },
  },
};
</script>

<style scoped>
.logout-button {
  margin-top: 10px;
  padding: 10px;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #bf0812;
}
</style>
