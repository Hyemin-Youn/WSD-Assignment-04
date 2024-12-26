<template>
  <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
    <div class="navbar-left">
      <router-link to="/home">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </router-link>

      <ul class="nav-links">
        <li>
          <router-link to="/home">홈</router-link>
        </li>
        <li>
          <router-link to="/popular">대세 콘텐츠</router-link>
        </li>
        <li>
          <router-link to="/search">찾아보기</router-link>
        </li>
        <li>
          <router-link to="/wishlist">내가 찜한 리스트</router-link>
        </li>
      </ul>
    </div>

    <div class="navbar-right">
      <!-- 사용자 정보 -->
      <div class="user-info" v-if="user">
        <span>안녕하세요, {{ user.nickname }}님!</span>
        <img :src="user.profile_image" alt="프로필 이미지" class="profile-image" @click="logout" />
        <button @click="logout" class="logout-button">로그아웃</button>
      </div>
      <div v-else>
        <button @click="kakaoLogin">로그인</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isScrolled: false, // 스크롤 상태 관리
    };
  },
  computed: {
    user() {
      return this.$store.state.user; // Vuex 상태의 사용자 정보
    },
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
      alert("로그아웃되었습니다.");
      this.$router.push("/signin");
    },
    kakaoLogin() {
      this.$emit("kakao-login"); // 카카오 로그인 로직 호출
    },
  },
};
</script>

<style scoped>
/* 기존 스타일 + Header의 스타일 통합 */
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  box-sizing: border-box;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  z-index: 100;
  background-color: gray;
  box-sizing: border-box;
}

.navbar-scrolled {
  background-color: rgba(125, 16, 16, 0.9);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.navbar-left {
  display: flex;
  align-items: center;
}

.logo {
  width: 40px;
  margin-right: 20px;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links li {
  list-style: none;
}

.nav-links a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #e50914;
}

.navbar-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;
}

.logout-button {
  margin-left: 10px;
  padding: 5px 10px;
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
