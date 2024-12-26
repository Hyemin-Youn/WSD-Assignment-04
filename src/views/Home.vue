<template>
  <div>
    <Navbar />
    <div class="home">
      <div class="logout-section" v-if="user">
        <span>안녕하세요, {{ user.nickname }}님! ({{ user.email }})</span>
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
import axios from "axios";
import Banner from "@/components/Banner.vue";
import Navbar from "@/components/Navbar.vue";
import SliderContent from "@/components/SliderContent.vue";
import store from "@/store"; // Vuex store 가져오기

export default {
  name: "Home",
  components: {
    Banner,
    Navbar,
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
      return store.state.user; // Vuex에서 사용자 정보 가져오기
    },
  },
  created() {
    // 인증 여부 체크
    if (!store.getters.isAuthenticated) {
      this.$router.push("/signin");
    } else {
      this.loadData();
    }
  },
  methods: {
    async loadData() {
      try {
        await Promise.all([this.fetchHeroMovie(), this.fetchMovies()]);
      } catch (error) {
        console.error("Error loading data:", error);
        alert("영화 데이터를 불러오는데 실패했습니다. 나중에 다시 시도해 주세요.");
      } finally {
        this.isLoading = false;
      }
    },
    async fetchHeroMovie() {
      const TMDB_API_KEY = process.env.VUE_APP_TMDB_API_KEY;
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=ko-KR`
        );
        this.heroMovie = response.data.results[0];
      } catch (error) {
        console.error("Hero Movie 로드 실패:", error);
        alert("메인 영화를 불러오지 못했습니다.");
      }
    },
    async fetchMovies() {
      const TMDB_API_KEY = process.env.VUE_APP_TMDB_API_KEY;
      try {
        const requests = this.movieCategories.map(async (category) => {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${category.name}?api_key=${TMDB_API_KEY}&language=ko-KR`
          );
          category.movies = response.data.results;
        });
        await Promise.all(requests);
      } catch (error) {
        console.error("Movie Categories 로드 실패.", error);
        alert("카테고리 데이터를 불러오는데 실패했습니다.");
      }
    },
    logout() {
      store.commit("logout"); // Vuex 상태 초기화
      alert("로그아웃되었습니다.");
      this.$router.push("/signin"); // 로그인 페이지로 이동
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
