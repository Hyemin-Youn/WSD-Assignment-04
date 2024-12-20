// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // router 설정 가져오기
import store from './store';
import '@fortawesome/fontawesome-free/css/all.css';

// FontAwesome 설정
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleLeft, faAngleRight, faHeart, faShareNodes } from '@fortawesome/free-solid-svg-icons';

// Kakao SDK 가져오기
import Kakao from '@kakao/kakao-js-sdk';

// 필요한 아이콘 추가
library.add(faAngleLeft, faAngleRight, faHeart, faShareNodes);

const app = createApp(App);

// Kakao SDK 초기화
Kakao.init(process.env.VUE_APP_KAKAO_API_KEY); // .env 파일에서 API 키 로드
console.log('Kakao SDK initialized:', Kakao.isInitialized()); // 초기화 여부 확인

// Vue 앱에 플러그인 등록
app.use(router);
app.use(store);

// FontAwesome 컴포넌트 등록
app.component('FontAwesomeIcon', FontAwesomeIcon);

// Vue 앱 마운트
app.mount('#app');
