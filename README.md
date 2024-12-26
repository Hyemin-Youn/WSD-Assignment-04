
# Hyemin-Youn

## Overview
이 프로젝트는 Vue.js를 기반으로 한 넷플릭스 클론 프로젝트로, 카카오 로그인 기능을 구현하여 소셜 로그인과 사용자 데이터를 처리합니다. 또한, TMDB API를 사용하여 외부 데이터를 관리하며, 개발 및 배포 환경을 `.env` 파일로 분리하여 설정을 관리합니다.
---

## Technology Stack
- **Framework**: Vue.js (Version 3)
- **State Management**: Vuex
- **Routing**: Vue Router
- **HTTP Requests**: Axios
- **Icons**: FontAwesome
- **Styling**: SCSS
- **Build Tool**: Vue CLI

---

## Installed Packages
Below is a list of major packages installed in the project:

npm install (following packages)
1. **vue-router**: For managing routing in the Vue.js application.
2. **axios**: For making HTTP requests.
3. **@fortawesome/fontawesome-free**: For FontAwesome icons.
4. **babel-eslint**: For linting JavaScript files.
5. **@babel/eslint-parser**: A Babel parser for ESLint.
6. **vuex**: For state management in Vue 3.
7. **vue-slick-carousel**: For carousel/slider functionality.
8. **@types/webpack-env**: TypeScript definitions for Webpack.
9. **@fortawesome/vue-fontawesome**: Integration of FontAwesome with Vue.
10. **@fortawesome/free-solid-svg-icons**: Solid icons from FontAwesome.
11. **@fortawesome/fontawesome-svg-core**: Core utilities for FontAwesome.
12. **@vueuse/core**: Utility functions for Vue Composition API.
13. **dotenv**: For managing environment variables.
14. **gh-pages**: For deployment to GitHub Pages.

---

## Project Setup

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Hyemin-Youn
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run serve
   ```

4. Open your browser and visit:
   ```
   http://localhost:8080
   ```

---

## Folder Structure

Here is a brief overview of the folder structure:

```
WSD-Assignment-04/
├── public/          # 정적 파일 (favicon 등)
├── src/
│   ├── assets/      # 이미지, 스타일 등
│   ├── components/  # 재사용 가능한 Vue 컴포넌트
│   ├── views/       # 주요 페이지
│   ├── router/      # Vue Router 설정
│   ├── store/       # Vuex 상태 관리
│   ├── App.vue      # 메인 Vue 파일
│   └── main.js      # 프로젝트 진입 파일
├── .env             # 환경 변수(배포:github secrets)
├── .gitignore       # Git에 포함되지 않을 파일 목록
├── package.json     # 프로젝트 의존성과 스크립트
└── README.md        # 프로젝트 문서

```

---

## Available Scripts

### Compile and Hot-Reload for Development
```bash
npm run serve
```

### Compile and Minify for Production
```bash
npm run build
```

### Lint and Fix Files
```bash
npm run lint
```

---

## Environment Variables

The project uses **dotenv** to manage environment variables. To set up your environment:

1. Create a `.env` file in the root directory.
2. Add your variables in the following format:
   ```
   VUE_APP_TMDB_API_KEY=<your_tmdb_api_key>
   VUE_APP_BASE_URL=<api_base_url>
   KAKAO_API_KEY=<your_kakao_javascript_api_key>
   ```
---

## Contributors
- **Hyemin Youn**: Developer and maintainer.
---

## License
This project is licensed under the MIT License.

사진: <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%9D%80%EC%83%89%EA%B3%BC-%EA%B2%80%EC%9D%80%EC%83%89-%EB%85%B8%ED%8A%B8%EB%B6%81-%EC%BB%B4%ED%93%A8%ED%84%B0%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%82%AC%EB%9E%8C-jtmwD4i4v1U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>의<a href="https://unsplash.com/ko/@charlesdeluvio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">charlesdeluvio</a>
      
      

## Customize configuration
For more configuration options, see the [Vue CLI Configuration Reference](https://cli.vuejs.org/config/).

---

[!homepage screenshot](./screenshots/homepage.png)

---
