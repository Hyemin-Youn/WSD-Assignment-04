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
import Popular from "@/components/Popular.vue";
import KaKaoCallback from "@/components/KaKaoCallback.vue"; // 추가

const routes = [
  { 
    path: '/signin', 
    name: 'SignIn', 
    component: SignIn,
    meta: { hideNavbar: true },
  },
  { 
    path: '/home', 
    name: 'Home', 
    component: Home,
    meta: { requiresAuth: true },
  },
  { 
    path: '/', 
    redirect: '/signin',
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
    redirect: "/popular/table",
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
    path: "/kakao-callback", // 경로 수정
    name: "KaKaoCallback",
    component: KaKaoCallback,
  },
];

const router = createRouter({
  history: createWebHashHistory(), 
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;

  if (to.name === 'SignIn' && isAuthenticated) {
    next('/home'); 
  } else {
    next(); 
  }
});

export default router;
