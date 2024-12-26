<template>
  <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
    <div class="navbar-left">
      <router-link to="/home">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </router-link>

      <ul class="nav-links">
        <li><router-link to="/home">홈</router-link></li>
        <li><router-link to="/popular">대세 콘텐츠</router-link></li>
        <li><router-link to="/search">찾아보기</router-link></li>
        <li><router-link to="/wishlist">내가 찜한 리스트</router-link></li>
      </ul>
    </div>

    <div class="navbar-right">
      <div v-if="user" class="user-info">
        <span>안녕하세요, {{ user.nickname }}님!</span>
        <img :src="user.profile_image" alt="프로필 이미지" class="profile-icon" @click="logout" />
      </div>
      <div v-else>
        <router-link to="/signin">로그인</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      isScrolled: false,
    };
  },
  computed: {
    ...mapState(["user"]), // Vuex에서 user 상태 가져오기
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/signin");
      alert("로그아웃되었습니다.");
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: gray;
  padding: 10px 20px;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
