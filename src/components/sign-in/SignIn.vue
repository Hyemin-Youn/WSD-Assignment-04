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
          <button class="kakao-login" @click="kakaoLogin">
            Login with Kakao
          </button>

          <p class="switch" @click="switchToSignup">
            Don't have an account? <b>Sign up</b>
          </p>
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
            <input id="newPassword" v-model="newPassword" type="password" required />

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
              <label for="terms">I have read the <b>Terms and Conditions</b></label>
            </div>

            <button type="submit" :disabled="!termsAccepted">Register</button>
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
      activeCard: "login", // 현재 활성 카드 (login or signup)
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
      this.triggerCardAnimation();
    },
    switchToLogin() {
      this.activeCard = "login";
      this.triggerCardAnimation();
    },
    triggerCardAnimation() {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        if (card.classList.contains("active")) {
          card.classList.remove("active");
          card.classList.add("backward");
        } else {
          card.classList.remove("backward");
          card.classList.add("enter");
          setTimeout(() => {
            card.classList.remove("enter");
            card.classList.add("active");
          }, 1000); // 애니메이션 시간을 1초로 설정
        }
      });
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
    kakaoLogin() {
      if (window.Kakao && window.Kakao.Auth) {
        window.Kakao.Auth.login({
          success: (authObj) => {
            console.log("Kakao Login Success:", authObj);
            window.Kakao.API.request({
              url: "/v2/user/me",
              success: (response) => {
                console.log("Kakao User Info:", response);
                this.$router.push("/home"); // 카카오 로그인 성공 시 홈으로 이동
              },
              fail: (error) => {
                console.error("Failed to fetch user info:", error);
              },
            });
          },
          fail: (error) => {
            console.error("Kakao Login Failed:", error);
          },
        });
      } else {
        console.error("Kakao SDK not initialized.");
      }
    },
  },
};
</script>

<style scoped>
.kakao-login {
  background-color: #fee500;
  color: #000;
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 0.9rem;
}
.kakao-login:hover {
  background-color: #ffd600;
}
</style>
