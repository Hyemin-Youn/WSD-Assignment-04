<template>
  <div>
    <Navbar />
    <Header />
    <KaKaoLogin />
    
    <div class="home">
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
import Header from "../components/Header.vue";
import KaKaoLogin from "../components/KaKaoLogin.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Navbar,
    SliderContent,
    Header,
    KaKaoLogin,
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
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
  background-color: #141414;
  color: #ffffff;
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
