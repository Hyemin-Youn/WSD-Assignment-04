// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // router 설정 가져오기
import store from './store';
import '@fortawesome/fontawesome-free/css/all.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleLeft, faAngleRight, faHeart, faShareNodes } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleLeft, faAngleRight, faHeart, faShareNodes);

const app = createApp(App);

// Kakao SDK 초기화
if (!window.Kakao.isInitialized()) {
  window.Kakao.init(process.env.VUE_APP_KAKAO_API_KEY);
  console.log("Kakao API Key:", process.env.VUE_APP_KAKAO_API_KEY);
}

app.use(router);
app.use(store);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
