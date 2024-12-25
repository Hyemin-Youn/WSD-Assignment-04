<template>
  <header class="app-header">
    <div class="logo">My App</div>
    <div class="user-info" v-if="user">
      <img :src="user.profile_image" alt="프로필 이미지" />
      <span>안녕하세요, {{ user.nickname }}님!</span>
      <button @click="logout">로그아웃</button>
    </div>
    <div v-else>
      <button @click="$router.push('/signin')">로그인</button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user; // Vuex에서 사용자 정보 가져오기
    },
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      alert("로그아웃되었습니다.");
      this.$router.push("/signin");
    },
  },
};
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
