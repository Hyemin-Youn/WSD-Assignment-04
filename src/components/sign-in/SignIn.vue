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

            <button type="submit">Sign In</button>
          </form>
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

            <button type="submit">Register</button>
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
      newEmail: "",
      newPassword: "",
      loginError: "",
    };
  },
  methods: {
    switchToSignup() {
      console.log("Switching to Signup");
      this.activeCard = "signup";
    },
    switchToLogin() {
      console.log("Switching to Login");
      this.activeCard = "login";
    },
  },
};
</script>

<style scoped>
.card {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out;
}

.card.active {
  z-index: 2;
  opacity: 1;
  transform: translateX(0);
}

.card.backward {
  z-index: 1;
  opacity: 0;
  transform: translateX(-100%);
}
</style>
