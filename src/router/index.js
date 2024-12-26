import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../components/sign-in/SignIn.vue";
import Wishlist from "../views/WishList.vue";
import store from "../store";
import MovieDetail from "@/views/MovieDetail.vue";
import SliderContent from "../components/SliderContent.vue";
import Search from "@/views/Search.vue";
import PopularInfinite from "@/views/PopularInfinite.vue";
import PopularTable from "@/views/PopularTable.vue";
import Popular from "@/components/Popular.vue";
import KaKaoCallback from "@/views/KaKaoCallback.vue"; // 카카오 콜백 처리

const routes = [
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
    meta: { hideNavbar: true, showHeader: false }, // Navbar와 Header 숨김
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true }, // 인증 필요
  },
  {
    path: "/",
    redirect: "/signin",
    meta: { showHeader: false }, // Header 숨김
  },
  {
    path: "/movies/:id",
    name: "MovieDetail",
    component: MovieDetail,
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: Wishlist,
    meta: { requiresAuth: true }, // 인증 필요
  },
  {
    path: "/slider",
    name: "SliderContent",
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
    meta: { requiresAuth: true }, // 인증 필요
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 인증 라우트 가드
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;

  // 인증이 필요한 라우트 처리
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/signin");
  } else if (to.name === "SignIn" && isAuthenticated) {
    // 로그인된 사용자가 다시 로그인 페이지로 이동하려는 경우
    next("/home");
  } else {
    next();
  }
});

export default router;
