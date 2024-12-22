import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SignIn from '../components/sign-in/SignIn.vue';
import Wishlist from '../views/WishList.vue';
import store from '../store';
import MovieDetail from "@/views/MovieDetail.vue";
import SliderContent from '../components/SliderContent.vue';
import Search from "@/views/Search.vue";
import PopularInfinite from "@/views/PopularInfinite.vue";
import PopularTable from "@/views/PopularTable.vue";
import Popular from "@/components/Popular.vue"; // 경로 수정
import KakaoRedirect from "@/components/KakaoRedirect.vue"; // 경로 수정

const routes = [
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: { hideNavbar: true }, // Navbar를 숨기기 위한 메타 데이터
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/',
    redirect: { name: 'SignIn' }, // 기본 경로 리디렉션
  },
  {
    path: "/movies/:id",
    component: MovieDetail,
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist,
  },
  {
    path: "/slider",
    name: 'SliderContent',
    component: SliderContent,
  },
  {
    path: "/popular",
    component: Popular,
    redirect: "/popular/table", // 기본적으로 Table View로 리디렉션
    children: [
      {
        path: "table",
        component: PopularTable,
      },
      {
        path: "infinite",
        component: PopularInfinite,
      },
    ],
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/kakao-redirect",
    name: "KakaoRedirect",
    component: KakaoRedirect,
  },
];

const router = createRouter({
  history: createWebHashHistory(), // Hash 모드 사용
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;

  if (to.name === 'SignIn' && isAuthenticated) {
    return next('/home'); // 인증된 사용자가 로그인 페이지로 접근할 때
  }
  next(); // 나머지 경우는 통과
});

export default router;
