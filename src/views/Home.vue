<template>
  <div>
    <Navbar />
    <div class="home">
      <div class="logout-section" v-if="user">
        <span>안녕하세요, {{ user.nickname }}님!</span>
        <img :src="user.profile_image" alt="프로필 이미지" class="profile-image" />
        <button @click="logout" class="logout-button">로그아웃</button>
      </div>
      <div v-if="isLoading" class="loading-overlay">
        <p>로딩중...</p>
      </div>
      <div v-else>
        <Banner :heroMovie="heroMovie" />
        <div v-for="category in movieCategories" :key="category.name" class="movie-category">
          <h3>{{ category.title }}</h3>
          <SliderContent :movies="category.movies" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/Banner.vue";
import SliderContent from "@/components/SliderContent.vue";
import store from "@/store";

export default {
  name: "Home",
  components: {
    Navbar,
    Banner,
    SliderContent,
  },
  data() {
    return {
      isLoading: true,
      heroMovie: {},
      movieCategories: [
        { name: "popular", title: "인기 영화", movies: [] },
        { name: "now_playing", title: "최신 영화", movies: [] },
        { name: "top_rated", title: "높은 평점 영화", movies: [] },
        { name: "upcoming", title: "개봉 예정 영화", movies: [] },
      ],
    };
  },
  computed: {
    user() {
      return store.state.user;
    },
  },
  created() {
    if (!store.getters.isAuthenticated) {
      this.$router.push("/signin");
    } else {
      this.loadData();
    }
  },
  methods: {
    logout() {
      store.commit("logout");
      alert("로그아웃되었습니다.");
      this.$router.push("/signin");
    },
    async loadData() {
      // 데이터 로드 로직
    },
  },
};
</script>


<style scoped>
.home {
  padding: 20px;
  background-color: #141414;
  color: #ffffff;
}

.logout-section {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: white;
}

.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
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

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 1.5em;
}

.movie-category {
  margin-bottom: 20px;
}

.movie-category h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}
</style>
