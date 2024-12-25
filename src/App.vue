<template>
  <div id="app">
    <Navbar />
    <router-view />

  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from '@/components/Navbar.vue'; // Navbar 컴포넌트 추가

export default {
  components: {
    Navbar,
  },
  methods: {
    handleKakaoLogin() {
      window.Kakao.Auth.authorize({
        redirectUri: process.env.VUE_APP_KAKAO_REDIRECT_URI,
      });
    },
  },
  mounted() {
    // 루트 경로에서 자동으로 "/signin"으로 리다이렉트
    if (this.$route.path === "/") {
      this.$router.push("/signin");
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
