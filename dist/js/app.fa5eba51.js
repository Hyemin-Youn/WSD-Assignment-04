(function(){"use strict";var e={6286:function(e,t,o){var s=o(5130),i=o(6768);const a={id:"app"};function r(e,t,o,s,r,n){const l=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",a,[(0,i.bF)(l)])}o(4114);var n={methods:{handleKakaoLogin(){window.Kakao.Auth.authorize({redirectUri:"https://hyemin-youn.github.io/WSD-Assignment-04/"})}},mounted(){"/"===this.$route.path&&this.$router.push("/signin")}},l=o(1241);const c=(0,l.A)(n,[["render",r]]);var h=c,d=o(1387),u=o(4232);const v={class:"home"},g={key:0,class:"loading-overlay"},m={key:1};function p(e,t,o,s,a,r){const n=(0,i.g2)("Navbar"),l=(0,i.g2)("Banner"),c=(0,i.g2)("SliderContent");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.bF)(n),(0,i.Lk)("div",v,[a.isLoading?((0,i.uX)(),(0,i.CE)("div",g,t[0]||(t[0]=[(0,i.Lk)("p",null,"로딩중...",-1)]))):((0,i.uX)(),(0,i.CE)("div",m,[(0,i.bF)(l,{heroMovie:a.heroMovie},null,8,["heroMovie"]),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.movieCategories,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.name,class:"movie-category"},[(0,i.Lk)("h3",null,(0,u.v_)(e.title),1),(0,i.bF)(c,{movies:e.movies},null,8,["movies"])])))),128))]))])])}o(1454);var k=o(4373);const A={class:"banner-content"},w={class:"banner-title"},f={class:"banner-description"},R={class:"banner-buttons"};function D(e,t,o,s,a,r){return(0,i.uX)(),(0,i.CE)("div",{class:"banner",style:(0,u.Tr)({backgroundImage:`url(${r.bannerImage})`})},[(0,i.Lk)("div",A,[(0,i.Lk)("h1",w,(0,u.v_)(o.heroMovie.title),1),(0,i.Lk)("p",f,(0,u.v_)(o.heroMovie.overview||"영화에 대한 설명이 없습니다."),1),(0,i.Lk)("div",R,[(0,i.Lk)("button",{class:"banner-button play",onClick:t[0]||(t[0]=(...e)=>r.playMovie&&r.playMovie(...e))}," 재생 "),(0,i.Lk)("button",{class:"banner-button info",onClick:t[1]||(t[1]=(...e)=>r.showDetails&&r.showDetails(...e))}," 상세 정보 ")])]),t[2]||(t[2]=(0,i.Lk)("div",{class:"banner-fade"},null,-1))],4)}var b={name:"Banner",props:{heroMovie:{type:Object,required:!0}},computed:{bannerImage(){return this.heroMovie.backdrop_path?`https://image.tmdb.org/t/p/original${this.heroMovie.backdrop_path}`:""}},methods:{playMovie(){console.log("Play movie:",this.heroMovie.title)},showDetails(){this.heroMovie.id?this.$router.push(`/movie/${this.heroMovie.id}`):console.error("Movie ID is not available")}}};const N=(0,l.A)(b,[["render",D],["__scopeId","data-v-79bd4bdb"]]);var y=N,E="data:image/png;base64,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",L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJQSURBVFiFxdfJjw1RFAbwXzdaaEQT87ATU4wxLMTGuhNtRf8BSMTG9C+IhcSGJQs7IYi9xDyFBdJIRAgRM4khHTE8i3vKe6T1q1dVHV9yclO3zne+U/dWnXuK1rEah3Afn8Pu4SBWFYiXG104jlqDvQnLrn/iGMZXLT4ND0LkMTZjYsP9iTH3JHweYGpV4iNwLQKfROcgvp04Fb5Xg1sa2yPgBXTk8O/ApeBsKyveJi3rDyxsgbcoOI/LJrBUepLzBbgXg7t4MKf2JkHmxXilQAKXY5xfJoGuGD8USOB9jBPKJPA2xskFEpgS4+sC3N+YK+3jzQLcW8GdUyYB6ItAa1rgrA3O3bLi0BvB+jAuh/846WyoYWMVCbThjHp1mz6I7wz1qnk6uJVgrFQJa/iIvViBMWErY+5T+JwLTqXowD70+/NEbLT+SCT3GVBkiWZKe7sOs2PuKc5KR/HzAjH/H1pdgXapKE3BpL/uvcGrsFr51OpoQzeO4p1/739m78K3W44HbOawFvvVe71+3MZL9VYsi5OtzBKMivnr2C31By1jF76HyBWsx+gcvNHokWpGLWLsbFX8gPo3v6lVcgN6I0YtYubC1iC80OQsz4kF0pbVsCWP81epoi2rQDzDcun/4at6kzMgso52R4XiGfZE7BP/clgo/Vg8xPAhSGAEHoXGgmyysSPaIH1Oh6U3t2p8w5HQ6BnI4bK0RHOHQDzD/NC4ONDN19KL0qxPLINh+CJ9FahXwuHSG/oDz4YwAZgViYzUsNXtuKN5na/KboSmX8iAsy1IrQKsAAAAAElFTkSuQmCC";const S={class:"navbar-left"},C={class:"nav-links"},M={class:"navbar-right"};function I(e,t,o,s,a,r){const n=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("nav",{class:(0,u.C4)(["navbar",{"navbar-scrolled":a.isScrolled}])},[(0,i.Lk)("div",S,[(0,i.bF)(n,{to:"/home"},{default:(0,i.k6)((()=>t[1]||(t[1]=[(0,i.Lk)("img",{src:E,alt:"Logo",class:"logo"},null,-1)]))),_:1}),(0,i.Lk)("ul",C,[(0,i.Lk)("li",null,[(0,i.bF)(n,{to:"/home"},{default:(0,i.k6)((()=>t[2]||(t[2]=[(0,i.eW)(" 홈 ")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(n,{to:"/popular"},{default:(0,i.k6)((()=>t[3]||(t[3]=[(0,i.eW)(" 대세 콘텐츠 ")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(n,{to:"/search"},{default:(0,i.k6)((()=>t[4]||(t[4]=[(0,i.eW)(" 찾아보기 ")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(n,{to:"/wishlist"},{default:(0,i.k6)((()=>t[5]||(t[5]=[(0,i.eW)(" 내가 찜한 리스트 ")]))),_:1})])])]),(0,i.Lk)("div",M,[(0,i.Lk)("img",{src:L,alt:"Profile",class:"profile-icon",onClick:t[0]||(t[0]=(...e)=>r.logout&&r.logout(...e))})])],2)}var P={name:"Navbar",data(){return{isScrolled:!1}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){this.isScrolled=window.scrollY>50},logout(){localStorage.removeItem("user"),this.$store&&this.$store.dispatch("logout"),this.$router.push("/signin")}}};const B=(0,l.A)(P,[["render",I],["__scopeId","data-v-bf0166f8"]]);var T=B;const _={class:"slider-container"},O={ref:"slider",class:"slider-content"};function Q(e,t,o,s,a,r){const n=(0,i.g2)("MovieCard");return(0,i.uX)(),(0,i.CE)("div",_,[(0,i.Lk)("button",{class:"arrow-btn left",onClick:t[0]||(t[0]=(...e)=>s.scrollLeft&&s.scrollLeft(...e))},t[2]||(t[2]=[(0,i.Lk)("i",{class:"fas fa-chevron-left"},null,-1)])),(0,i.Lk)("div",O,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.movies,(e=>((0,i.uX)(),(0,i.Wv)(n,{key:e.id,movie:e},null,8,["movie"])))),128))],512),(0,i.Lk)("button",{class:"arrow-btn right",onClick:t[1]||(t[1]=(...e)=>s.scrollRight&&s.scrollRight(...e))},t[3]||(t[3]=[(0,i.Lk)("i",{class:"fas fa-chevron-right"},null,-1)]))])}var U=o(144);const H={class:"movie-card"},X=["src","alt"],W={class:"movie-info"},J={class:"movie-title"},F={class:"release-date"},K={key:0,class:"movie-rating"};function V(e,t,o,a,r,n){return(0,i.uX)(),(0,i.CE)("div",H,[(0,i.Lk)("img",{src:n.posterUrl,alt:o.movie.title,class:"poster"},null,8,X),(0,i.Lk)("div",W,[(0,i.Lk)("p",J,(0,u.v_)(o.movie.title),1),(0,i.Lk)("p",F," 개봉일: "+(0,u.v_)(n.formattedReleaseDate),1),o.movie.vote_average?((0,i.uX)(),(0,i.CE)("div",K," ⭐ "+(0,u.v_)(o.movie.vote_average)+" / 10 ",1)):(0,i.Q3)("",!0)]),(0,i.Lk)("span",{class:"wishlist-icon",onClick:t[0]||(t[0]=(0,s.D$)(((...e)=>n.handleWishlist&&n.handleWishlist(...e)),["stop"]))},[(0,i.Lk)("i",{class:(0,u.C4)(e.isInWishlist(o.movie.id)?"fas fa-heart liked":"far fa-heart")},null,2)])])}var Y=o(782),G={props:{movie:{type:Object,required:!0}},computed:{...(0,Y.L8)(["isInWishlist"]),posterUrl(){return`https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`},formattedReleaseDate(){if(!this.movie.release_date)return"알 수 없음";const e={year:"numeric",month:"long",day:"numeric"};return new Date(this.movie.release_date).toLocaleDateString("ko-KR",e)}},methods:{...(0,Y.i0)(["toggleWishlist"]),handleWishlist(){this.toggleWishlist(this.movie)}}};const z=(0,l.A)(G,[["render",V],["__scopeId","data-v-7d36438e"]]);var x=z,j={components:{MovieCard:x},props:{movies:{type:Array,required:!0}},setup(){const e=(0,U.KR)(null),t=()=>{e.value&&e.value.scrollBy({left:-300,behavior:"smooth"})},o=()=>{e.value&&e.value.scrollBy({left:300,behavior:"smooth"})};return{slider:e,scrollLeft:t,scrollRight:o}}};const Z=(0,l.A)(j,[["render",Q],["__scopeId","data-v-7a43e855"]]);var $=Z;o(8992),o(7550);const q=(0,Y.y$)({state:{user:JSON.parse(localStorage.getItem("user"))||null,isAuthenticated:!!localStorage.getItem("user"),wishlist:JSON.parse(localStorage.getItem("wishlist"))||[],recentSearches:JSON.parse(localStorage.getItem("recentSearches"))||[],searchResults:JSON.parse(localStorage.getItem("searchResults"))||[]},mutations:{setUser(e,t){e.user=t,e.isAuthenticated=!!t,t?localStorage.setItem("user",JSON.stringify(t)):localStorage.removeItem("user")},logout(e){e.user=null,e.isAuthenticated=!1,localStorage.removeItem("user"),localStorage.removeItem("kakaoToken")},TOGGLE_WISHLIST(e,t){const o=e.wishlist.findIndex((e=>e.id===t.id));-1===o?e.wishlist.push(t):e.wishlist.splice(o,1),localStorage.setItem("wishlist",JSON.stringify(e.wishlist))},ADD_SEARCH_HISTORY(e,t){e.recentSearches.includes(t)||(e.recentSearches.unshift(t),e.recentSearches.length>10&&e.recentSearches.pop(),localStorage.setItem("recentSearches",JSON.stringify(e.recentSearches)))},DELETE_SEARCH_HISTORY(e,t){e.recentSearches.splice(t,1),localStorage.setItem("recentSearches",JSON.stringify(e.recentSearches))},SET_SEARCH_RESULTS(e,t){e.searchResults=t,localStorage.setItem("searchResults",JSON.stringify(t))}},actions:{toggleWishlist({commit:e},t){e("TOGGLE_WISHLIST",t)},addSearchHistory({commit:e},t){e("ADD_SEARCH_HISTORY",t)},deleteSearchHistory({commit:e},t){e("DELETE_SEARCH_HISTORY",t)},setSearchResults({commit:e},t){console.log("검색 결과 저장 중:",t),e("SET_SEARCH_RESULTS",t)},authenticateUser({commit:e},t){e("setUser",t)},logoutUser({commit:e}){e("logout")},async fetchKakaoUser({commit:e},t){try{const o=await fetch("https://kapi.kakao.com/v2/user/me",{method:"GET",headers:{Authorization:`Bearer ${t}`}}),s=await o.json(),i={nickname:s.properties.nickname,profile_image:s.properties.profile_image};e("setUser",i)}catch(o){console.error("카카오 사용자 정보 가져오기 실패:",o)}}},getters:{wishlist:e=>e.wishlist,isInWishlist:e=>t=>e.wishlist.some((e=>e.id===t)),recentSearches:e=>e.recentSearches,searchResults:e=>e.searchResults,isAuthenticated:e=>e.isAuthenticated,user:e=>e.user}});var ee=q,te={name:"Home",components:{Banner:y,Navbar:T,SliderContent:$},data(){return{isLoading:!0,heroMovie:{},movieCategories:[{name:"popular",title:"인기 영화",movies:[]},{name:"now_playing",title:"최신 영화",movies:[]},{name:"top_rated",title:"높은 평점 영화",movies:[]},{name:"upcoming",title:"개봉 예정 영화",movies:[]}]}},created(){ee.getters.isAuthenticated?this.loadData():this.$router.push("/signin")},methods:{async loadData(){try{await Promise.all([this.fetchHeroMovie(),this.fetchMovies()])}catch(e){console.error("Error loading data:",e),alert("영화 데이터를 불러오는데 실패했습니다. 나중에 다시 시도해 주세요.")}finally{this.isLoading=!1}},async fetchHeroMovie(){const e="75b7c972001662bd9d37622e0e222947";try{const t=await k.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR`);this.heroMovie=t.data.results[0]}catch(t){console.error("Hero Movie 로드 실패:",t),alert("메인 영화를 불러오지 못했습니다.")}},async fetchMovies(){const e="75b7c972001662bd9d37622e0e222947";try{const t=this.movieCategories.map((async t=>{const o=await k.A.get(`https://api.themoviedb.org/3/movie/${t.name}?api_key=${e}&language=ko-KR`);t.movies=o.data.results}));await Promise.all(t)}catch(t){console.error("Movie Categories 로드 실패.",t),alert("카테고리 데이터를 불러오는데 실패했습니다.")}}}};const oe=(0,l.A)(te,[["render",p],["__scopeId","data-v-02b4034e"]]);var se=oe;const ie={class:"wrapper"},ae={class:"content"},re={key:0,class:"error"},ne={class:"remember-me"},le={class:"content"},ce={key:0,class:"error"},he={class:"terms"},de=["disabled"];function ue(e,t,o,a,r,n){return(0,i.uX)(),(0,i.CE)("div",null,[t[24]||(t[24]=(0,i.Lk)("div",{class:"bg-image"},null,-1)),(0,i.Lk)("div",ie,[(0,i.Lk)("div",{class:(0,u.C4)(["card",{active:"login"===r.activeCard,backward:"signup"===r.activeCard}])},[(0,i.Lk)("div",ae,[t[17]||(t[17]=(0,i.Lk)("h2",null,"Login",-1)),(0,i.Lk)("form",{onSubmit:t[3]||(t[3]=(0,s.D$)(((...e)=>n.handleLogin&&n.handleLogin(...e)),["prevent"]))},[t[13]||(t[13]=(0,i.Lk)("label",{for:"email"},"Email",-1)),(0,i.bo)((0,i.Lk)("input",{id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>r.email=e),type:"email",required:""},null,512),[[s.Jo,r.email]]),t[14]||(t[14]=(0,i.Lk)("label",{for:"password"},"Password",-1)),(0,i.bo)((0,i.Lk)("input",{id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>r.password=e),type:"password",required:""},null,512),[[s.Jo,r.password]]),r.loginError?((0,i.uX)(),(0,i.CE)("p",re,(0,u.v_)(r.loginError),1)):(0,i.Q3)("",!0),(0,i.Lk)("div",ne,[(0,i.bo)((0,i.Lk)("input",{id:"rememberMe","onUpdate:modelValue":t[2]||(t[2]=e=>r.rememberMe=e),type:"checkbox"},null,512),[[s.lH,r.rememberMe]]),t[12]||(t[12]=(0,i.Lk)("label",{for:"rememberMe"},"Remember Me",-1))]),t[15]||(t[15]=(0,i.Lk)("button",{type:"submit"},"Sign In",-1))],32),(0,i.Lk)("button",{class:"kakao-login",onClick:t[4]||(t[4]=(...e)=>n.handleKakaoLogin&&n.handleKakaoLogin(...e))}," 카카오 로그인 "),(0,i.Lk)("p",{class:"switch",onClick:t[5]||(t[5]=(...e)=>n.switchToSignup&&n.switchToSignup(...e))},t[16]||(t[16]=[(0,i.eW)(" Don't have an account? "),(0,i.Lk)("b",null,"Sign up",-1)]))])],2),(0,i.Lk)("div",{class:(0,u.C4)(["card",{active:"signup"===r.activeCard,backward:"login"===r.activeCard}])},[(0,i.Lk)("div",le,[t[23]||(t[23]=(0,i.Lk)("h2",null,"Sign Up",-1)),(0,i.Lk)("form",{onSubmit:t[10]||(t[10]=(0,s.D$)(((...e)=>n.handleRegister&&n.handleRegister(...e)),["prevent"]))},[t[19]||(t[19]=(0,i.Lk)("label",{for:"newEmail"},"Email",-1)),(0,i.bo)((0,i.Lk)("input",{id:"newEmail","onUpdate:modelValue":t[6]||(t[6]=e=>r.newEmail=e),type:"email",required:""},null,512),[[s.Jo,r.newEmail]]),t[20]||(t[20]=(0,i.Lk)("label",{for:"newPassword"},"Password",-1)),(0,i.bo)((0,i.Lk)("input",{id:"newPassword","onUpdate:modelValue":t[7]||(t[7]=e=>r.newPassword=e),type:"password",required:""},null,512),[[s.Jo,r.newPassword]]),t[21]||(t[21]=(0,i.Lk)("label",{for:"confirmPassword"},"Confirm Password",-1)),(0,i.bo)((0,i.Lk)("input",{id:"confirmPassword","onUpdate:modelValue":t[8]||(t[8]=e=>r.confirmPassword=e),type:"password",required:""},null,512),[[s.Jo,r.confirmPassword]]),r.signupError?((0,i.uX)(),(0,i.CE)("p",ce,(0,u.v_)(r.signupError),1)):(0,i.Q3)("",!0),(0,i.Lk)("div",he,[(0,i.bo)((0,i.Lk)("input",{id:"terms","onUpdate:modelValue":t[9]||(t[9]=e=>r.termsAccepted=e),type:"checkbox"},null,512),[[s.lH,r.termsAccepted]]),t[18]||(t[18]=(0,i.Lk)("label",{for:"terms"},[(0,i.eW)(" I have read the "),(0,i.Lk)("b",null,"Terms and Conditions")],-1))]),(0,i.Lk)("button",{type:"submit",disabled:!r.termsAccepted}," Register ",8,de)],32),(0,i.Lk)("p",{class:"switch",onClick:t[11]||(t[11]=(...e)=>n.switchToLogin&&n.switchToLogin(...e))},t[22]||(t[22]=[(0,i.eW)(" Already have an account? "),(0,i.Lk)("b",null,"Sign in",-1)]))])],2)])])}o(4603),o(7566),o(8721);var ve={data(){return{activeCard:"login",email:"",password:"",rememberMe:!1,loginError:"",newEmail:"",newPassword:"",confirmPassword:"",termsAccepted:!1,signupError:""}},mounted(){const e=new URLSearchParams(window.location.search),t=e.get("code");t&&this.handleKakaoCallback(t)},methods:{switchToSignup(){this.activeCard="signup"},switchToLogin(){this.activeCard="login"},handleLogin(){this.password.length<6?this.loginError="Password must be at least 6 characters long.":(alert("Login successful!"),this.$store.commit("setUser",{email:this.email}),this.$router.push("/home"))},handleRegister(){this.newPassword.length<6?this.signupError="Password must be at least 6 characters long.":this.newPassword===this.confirmPassword?(alert("Registration successful!"),this.switchToLogin()):this.signupError="Passwords do not match."},handleKakaoLogin(){const e="8d03210ed7796dc9bd82c25753705f6f",t="https://hyemin-youn.github.io/WSD-Assignment-04/",o=`https://kauth.kakao.com/oauth/authorize?client_id=${e}&redirect_uri=${t}&response_type=code`;window.location.href=o},handleKakaoCallback(e){fetch("https://kauth.kakao.com/oauth/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"authorization_code",client_id:"8d03210ed7796dc9bd82c25753705f6f",redirect_uri:"https://hyemin-youn.github.io/WSD-Assignment-04/",code:e})}).then((e=>e.json())).then((e=>{e.access_token&&(localStorage.setItem("kakaoToken",e.access_token),this.getUserInfo(e.access_token))})).catch((e=>console.error(e)))},async getUserInfo(e){await fetch("https://kapi.kakao.com/v2/user/me",{method:"GET",headers:{Authorization:`Bearer ${e}`}}).then((e=>e.json())).then((e=>{const t={nickname:e.properties.nickname,profile_image:e.properties.profile_image};this.$store.commit("setUser",t),this.$router.push("/home")})).catch((e=>console.error(e)))}}};const ge=(0,l.A)(ve,[["render",ue],["__scopeId","data-v-5b1ef752"]]);var me=ge;const pe={class:"wishlist"},ke={key:0,class:"empty-wishlist"},Ae={key:1,class:"wishlist-movies"},we={class:"movie-info"},fe=["onClick"];function Re(e,t,o,s,a,r){const n=(0,i.g2)("Navbar");return(0,i.uX)(),(0,i.CE)("div",pe,[(0,i.bF)(n),t[1]||(t[1]=(0,i.Lk)("h2",null,"내가 찜한 콘텐츠",-1)),0===s.wishlist.length?((0,i.uX)(),(0,i.CE)("div",ke,t[0]||(t[0]=[(0,i.Lk)("p",null,"찜한 영화가 없습니다.",-1)]))):((0,i.uX)(),(0,i.CE)("div",Ae,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.wishlist,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:"wishlist-movie",style:(0,u.Tr)({backgroundImage:`url(https://image.tmdb.org/t/p/w500/${e.poster_path})`})},[(0,i.Lk)("div",we,[(0,i.Lk)("h4",null,(0,u.v_)(e.title),1),(0,i.Lk)("button",{class:"remove-btn",onClick:t=>s.toggleWishlist(e)}," 삭제 ",8,fe)])],4)))),128))]))])}var De={name:"WishList",components:{Navbar:T},setup(){const e=(0,Y.Pj)(),t=(0,i.EW)((()=>e.getters.wishlist)),o=t=>{e.dispatch("toggleWishlist",t)};return{wishlist:t,toggleWishlist:o}}};const be=(0,l.A)(De,[["render",Re],["__scopeId","data-v-1c034802"]]);var Ne=be;const ye={key:0,class:"movie-detail"},Ee=["src"],Le={class:"content"};function Se(e,t,o,s,a,r){return a.movie?((0,i.uX)(),(0,i.CE)("div",ye,[(0,i.Lk)("img",{src:r.makeImagePath(a.movie.backdrop_path,"w1280"),alt:"Movie Background"},null,8,Ee),(0,i.Lk)("div",Le,[(0,i.Lk)("h2",null,(0,u.v_)(a.movie.title),1),(0,i.Lk)("p",null,(0,u.v_)(a.movie.overview),1),(0,i.Lk)("p",null,"개봉일: "+(0,u.v_)(a.movie.release_date),1),(0,i.Lk)("p",null,"평점: ⭐ "+(0,u.v_)(a.movie.vote_average),1)])])):(0,i.Q3)("",!0)}var Ce={data(){return{movie:null}},created(){this.fetchMovieDetail()},methods:{async fetchMovieDetail(){const e="75b7c972001662bd9d37622e0e222947",t=this.$route.params.id;try{const o=await k.A.get(`https://api.themoviedb.org/3/movie/${t}?api_key=${e}&language=ko-KR`);this.movie=o.data}catch(o){console.error("Error fetching movie details:",o)}},makeImagePath(e,t){return`https://image.tmdb.org/t/p/${t}${e}`}}};const Me=(0,l.A)(Ce,[["render",Se],["__scopeId","data-v-3750c650"]]);var Ie=Me;const Pe={class:"search-bar"},Be={key:0,class:"recent-searches"},Te=["onClick"],_e=["onClick"],Oe={class:"dropdown-container"},Qe=["onClick"],Ue={key:0,class:"select-items"},He=["onClick"],Xe={class:"movie-grid"},We={class:"poster-container"},Je=["src","alt"],Fe=["onClick"],Ke={class:"movie-title"},Ve={key:1,class:"loading"};function Ye(e,t,o,a,r,n){const l=(0,i.g2)("Navbar");return(0,i.uX)(),(0,i.CE)("div",{class:"search-page",onScroll:t[4]||(t[4]=(...e)=>n.handleScroll&&n.handleScroll(...e))},[(0,i.bF)(l),t[7]||(t[7]=(0,i.Lk)("h1",null,"영화 검색",-1)),(0,i.Lk)("div",Pe,[(0,i.bo)((0,i.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.searchQuery=e),type:"text",placeholder:"영화 제목을 검색하세요",onKeydown:t[1]||(t[1]=(0,s.jR)(((...e)=>n.handleSearch&&n.handleSearch(...e)),["enter"]))},null,544),[[s.Jo,r.searchQuery]]),(0,i.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>n.handleSearch&&n.handleSearch(...e))}," 검색 ")]),e.recentSearches.length?((0,i.uX)(),(0,i.CE)("div",Be,[t[5]||(t[5]=(0,i.Lk)("h3",null,"최근 검색어",-1)),(0,i.Lk)("ul",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.recentSearches,((t,o)=>((0,i.uX)(),(0,i.CE)("li",{key:o},[(0,i.Lk)("span",{onClick:e=>n.searchFromHistory(t)},(0,u.v_)(t),9,Te),(0,i.Lk)("button",{class:"delete-btn",onClick:t=>e.deleteSearchHistory(o)}," X ",8,_e)])))),128))])])):(0,i.Q3)("",!0),(0,i.Lk)("div",Oe,[t[6]||(t[6]=(0,i.Lk)("label",null,"선호하는 설정을 선택하세요",-1)),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.dropdownEntries,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.key,class:"custom-select"},[(0,i.Lk)("div",{class:"select-selected",onClick:t=>n.toggleDropdown(e.key)},(0,u.v_)(r.selectedOptions[e.key]),9,Qe),r.activeDropdown===e.key?((0,i.uX)(),(0,i.CE)("div",Ue,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.options,(t=>((0,i.uX)(),(0,i.CE)("div",{key:t,onClick:o=>n.selectOption(e.key,t)},(0,u.v_)(t),9,He)))),128))])):(0,i.Q3)("",!0)])))),128)),(0,i.Lk)("button",{class:"clear-options",onClick:t[3]||(t[3]=(...e)=>n.clearOptions&&n.clearOptions(...e))}," 초기화 ")]),(0,i.Lk)("div",Xe,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.movies,(t=>((0,i.uX)(),(0,i.CE)("div",{key:t.id,class:"movie-card"},[(0,i.Lk)("div",We,[(0,i.Lk)("img",{class:"movie-poster",src:n.getPosterUrl(t.poster_path),alt:t.title},null,8,Je),(0,i.Lk)("button",{class:(0,u.C4)(["favorite-btn",{favorited:e.isInWishlist(t.id)}]),onClick:o=>e.toggleWishlist(t)}," ❤ ",10,Fe)]),(0,i.Lk)("div",Ke,(0,u.v_)(t.title),1)])))),128))]),r.loading?((0,i.uX)(),(0,i.CE)("div",Ve," 로딩 중... ")):(0,i.Q3)("",!0)],32)}const Ge="75b7c972001662bd9d37622e0e222947",ze="https://api.themoviedb.org/3",xe=async(e=1)=>{try{const t=await k.A.get(`${ze}/movie/popular`,{params:{api_key:Ge,language:"ko-KR",page:e}});return t.data}catch(t){return console.error("Error fetching popular movies:",t),{results:[]}}},je=async e=>{const{genre:t,rating:o,language:s,page:i=1}=e;try{const e={api_key:Ge,language:"ko-KR",page:i};if(t&&"장르 (전체)"!==t){const o={Action:28,Adventure:12,Comedy:35,Crime:80,Family:10751};e.with_genres=o[t]||null}if(o&&"평점 (전체)"!==o){const[t,s]=o.split("~").map(Number);e["vote_average.gte"]=t||0,e["vote_average.lte"]=s||10}s&&"언어 (전체)"!==s&&(e.with_original_language=s);const a=await k.A.get(`${ze}/discover/movie`,{params:e});return a.data}catch(a){return console.error("Error fetching movies:",a),{results:[]}}},Ze=async(e,t=1)=>{try{const o=await k.A.get(`${ze}/search/movie`,{params:{api_key:Ge,language:"ko-KR",query:e,page:t}});return o.data.results}catch(o){return console.error("Error searching movies:",o),[]}};var $e={name:"Search",components:{Navbar:T},data(){return{searchQuery:"",dropdowns:{originalLanguage:["장르 (전체)","Action","Adventure","Comedy","Crime","Family"],translationLanguage:["평점 (전체)","9~10","8~9","7~8","6~7","5~6","4~5","4점 이하"],sorting:["언어 (전체)","en","ko"]},DEFAULT_OPTIONS:{originalLanguage:"장르 (전체)",translationLanguage:"평점 (전체)",sorting:"언어 (전체)"},selectedOptions:{originalLanguage:"장르 (전체)",translationLanguage:"평점 (전체)",sorting:"언어 (전체)"},activeDropdown:null,movies:[],currentPage:1,totalPages:1,loading:!1}},computed:{...(0,Y.L8)(["recentSearches","wishlist","isInWishlist"]),dropdownEntries(){return Object.entries(this.dropdowns).map((([e,t])=>({key:e,options:t})))}},created(){this.fetchMovies(),window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{...(0,Y.i0)(["addSearchHistory","setSearchResults","toggleWishlist","deleteSearchHistory"]),async fetchMovies(e=1,t=!1){if(this.loading)return;this.loading=!0;const o={genre:this.selectedOptions.originalLanguage,rating:this.selectedOptions.translationLanguage,language:this.selectedOptions.sorting,page:e};try{const s=await je(o);this.movies=t?[...this.movies,...s.results]:s.results,this.currentPage=e,this.totalPages=s.total_pages}catch(s){console.error("Error fetching movies:",s)}finally{this.loading=!1}},async handleSearch(){if(this.searchQuery.trim()){this.loading=!0;try{this.addSearchHistory(this.searchQuery);const e=await Ze(this.searchQuery,1);this.movies=e||[],this.currentPage=1,this.totalPages=e.total_pages||1,this.setSearchResults(this.movies)}catch(e){console.error("검색 중 오류 발생:",e.message)}finally{this.loading=!1}}},searchFromHistory(e){this.searchQuery=e,this.handleSearch()},toggleDropdown(e){this.activeDropdown=this.activeDropdown===e?null:e},selectOption(e,t){this.selectedOptions={...this.selectedOptions,[e]:t},this.activeDropdown=null,this.fetchMovies(1)},clearOptions(){this.selectedOptions={...this.DEFAULT_OPTIONS},this.fetchMovies(1)},handleScroll(){const e=window.innerHeight+window.scrollY>=document.body.offsetHeight-100;e&&this.currentPage<this.totalPages&&this.fetchMovies(this.currentPage+1,!0)},getPosterUrl(e){return e?`https://image.tmdb.org/t/p/w500/${e}`:"default_poster.png"}}};const qe=(0,l.A)($e,[["render",Ye],["__scopeId","data-v-0f67f3c3"]]);var et=qe;const tt={class:"popular"},ot={class:"movie-grid"},st={key:0,class:"loading"};function it(e,t,o,s,a,r){const n=(0,i.g2)("MovieCard");return(0,i.uX)(),(0,i.CE)("div",tt,[(0,i.Lk)("div",ot,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.movies,(e=>((0,i.uX)(),(0,i.Wv)(n,{key:e.id,movie:e},null,8,["movie"])))),128))]),a.loading?((0,i.uX)(),(0,i.CE)("div",st," 로딩 중... ")):(0,i.Q3)("",!0),a.showScrollTopButton?((0,i.uX)(),(0,i.CE)("button",{key:1,class:"scroll-top",onClick:t[0]||(t[0]=(...e)=>r.scrollToTop&&r.scrollToTop(...e))}," TOP(위로) ")):(0,i.Q3)("",!0)])}var at={name:"PopularInfinite",components:{MovieCard:x},data(){return{movies:[],currentPage:1,totalPages:1,loading:!1,showScrollTopButton:!1}},created(){this.fetchMovies(),window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{async fetchMovies(e=1){if(this.loading||e>this.totalPages)return;this.loading=!0;const t=await xe(e);this.movies=[...this.movies,...t.results],this.currentPage=e,this.totalPages=t.total_pages,this.loading=!1},handleScroll(){const e=window.innerHeight+window.scrollY>=document.body.offsetHeight-100;e&&this.currentPage<this.totalPages&&this.fetchMovies(this.currentPage+1),this.showScrollTopButton=window.scrollY>300},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}};const rt=(0,l.A)(at,[["render",it],["__scopeId","data-v-3b23ca2e"]]);var nt=rt;const lt={class:"popular"},ct={class:"movie-grid"},ht={class:"pagination"},dt=["disabled"],ut=["disabled"];function vt(e,t,o,s,a,r){const n=(0,i.g2)("MovieCard");return(0,i.uX)(),(0,i.CE)("div",lt,[(0,i.Lk)("div",ct,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.paginatedMovies,(e=>((0,i.uX)(),(0,i.Wv)(n,{key:e.id,movie:e},null,8,["movie"])))),128))]),(0,i.Lk)("div",ht,[(0,i.Lk)("button",{disabled:1===a.currentPage,onClick:t[0]||(t[0]=e=>r.changePage(a.currentPage-1))}," < 이전 ",8,dt),(0,i.Lk)("span",null,(0,u.v_)(a.currentPage)+" / "+(0,u.v_)(a.totalPages),1),(0,i.Lk)("button",{disabled:a.currentPage===a.totalPages,onClick:t[1]||(t[1]=e=>r.changePage(a.currentPage+1))}," 다음 > ",8,ut)])])}var gt={name:"PopularTable",components:{MovieCard:x},data(){return{movies:[],currentPage:1,totalPages:1,moviesPerPage:this.calculateMoviesPerPage()}},computed:{paginatedMovies(){const e=(this.currentPage-1)*this.moviesPerPage,t=e+this.moviesPerPage;return this.movies.slice(e,t)}},created(){this.fetchMovies(),window.addEventListener("resize",this.handleResize)},beforeUnmount(){window.removeEventListener("resize",this.handleResize)},methods:{async fetchMovies(){try{const e=3;let t=[];for(let o=1;o<=e;o++){const e=await xe(o);t=[...t,...e.results]}this.movies=t,this.totalPages=Math.ceil(this.movies.length/this.moviesPerPage)}catch(e){console.error("Error fetching movies:",e)}},changePage(e){e>0&&e<=this.totalPages&&(this.currentPage=e)},calculateMoviesPerPage(){return window.innerWidth<=480?9:window.innerWidth<=768?6:10},handleResize(){this.moviesPerPage=this.calculateMoviesPerPage(),this.totalPages=Math.ceil(this.movies.length/this.moviesPerPage)}}};const mt=(0,l.A)(gt,[["render",vt],["__scopeId","data-v-00a191f2"]]);var pt=mt;const kt={class:"view-toggle"};function At(e,t,o,s,a,r){const n=(0,i.g2)("Navbar");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.bF)(n),(0,i.Lk)("div",kt,[(0,i.Lk)("button",{class:(0,u.C4)({active:"PopularTable"===a.currentView}),onClick:t[0]||(t[0]=e=>r.switchView("PopularTable"))}," 📋 Table View ",2),(0,i.Lk)("button",{class:(0,u.C4)({active:"PopularInfinite"===a.currentView}),onClick:t[1]||(t[1]=e=>r.switchView("PopularInfinite"))}," 📜 무한 스크롤 View ",2)]),((0,i.uX)(),(0,i.Wv)((0,i.$y)(a.currentView)))])}var wt={name:"Popular",components:{Navbar:T,PopularTable:pt,PopularInfinite:nt},data(){return{currentView:"PopularTable"}},watch:{currentView(e){document.body.style.overflow="PopularTable"===e?"hidden":""}},created(){"PopularTable"===this.currentView&&(document.body.style.overflow="hidden")},beforeUnmount(){document.body.style.overflow=""},methods:{switchView(e){this.currentView=e}}};const ft=(0,l.A)(wt,[["render",At],["__scopeId","data-v-3599d8e9"]]);var Rt=ft;function Dt(e,t,o,s,a,r){return(0,i.uX)(),(0,i.CE)("div",null,t[0]||(t[0]=[(0,i.Lk)("p",null,"카카오 로그인 중입니다. 잠시만 기다려 주세요...",-1)]))}var bt={mounted(){const e=new URLSearchParams(window.location.search),t=e.get("code");t?this.fetchAccessToken(t):(console.error("Authorization Code가 없습니다."),this.$router.push("/signin"))},methods:{fetchAccessToken(e){fetch("https://kauth.kakao.com/oauth/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"authorization_code",client_id:"8d03210ed7796dc9bd82c25753705f6f",redirect_uri:"https://hyemin-youn.github.io/WSD-Assignment-04/",code:e})}).then((e=>e.json())).then((e=>{e.access_token?(localStorage.setItem("kakaoToken",e.access_token),this.getUserInfo(e.access_token)):(console.error("Access Token 발급 실패:",e),this.$router.push("/signin"))})).catch((e=>{console.error("Access Token 요청 중 오류 발생:",e),this.$router.push("/signin")}))},getUserInfo(e){fetch("https://kapi.kakao.com/v2/user/me",{method:"GET",headers:{Authorization:`Bearer ${e}`}}).then((e=>e.json())).then((e=>{const t={nickname:e.properties.nickname,profile_image:e.properties.profile_image};this.$store.commit("setUser",t),this.$router.push("/home")})).catch((e=>{console.error("사용자 정보 요청 중 오류 발생:",e),this.$router.push("/signin")}))}}};const Nt=(0,l.A)(bt,[["render",Dt],["__scopeId","data-v-c5b3a1a6"]]);var yt=Nt;const Et=[{path:"/signin",name:"SignIn",component:me,meta:{hideNavbar:!0,showHeader:!1}},{path:"/home",name:"Home",component:se,meta:{requiresAuth:!0}},{path:"/",redirect:"/signin",meta:{showHeader:!1}},{path:"/movies/:id",name:"MovieDetail",component:Ie},{path:"/wishlist",name:"Wishlist",component:Ne,meta:{requiresAuth:!0}},{path:"/slider",name:"SliderContent",component:$},{path:"/popular",component:Rt,redirect:"/popular/table",children:[{path:"table",component:pt},{path:"infinite",component:nt}]},{path:"/search",name:"Search",component:et,meta:{requiresAuth:!0}},{path:"/kakao/callback",name:"KaKaoCallback",component:yt,meta:{hideNavbar:!0,showHeader:!1}}],Lt=(0,d.aE)({history:(0,d.Bt)(),routes:Et});Lt.beforeEach(((e,t,o)=>{const s=ee.getters.isAuthenticated;e.meta.requiresAuth&&!s?o("/signin"):"SignIn"===e.name&&s?o("/home"):o()}));var St=Lt,Ct=o(8950),Mt=o(292),It=o(2353);Ct.Yv.add(It.Uec,It.vmR,It.qcK,It.ekB);const Pt=(0,s.Ef)(h);Pt.use(St),Pt.use(ee),Pt.component("FontAwesomeIcon",Mt.gc),Pt.mount("#app")}},t={};function o(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,s,i,a){if(!s){var r=1/0;for(h=0;h<e.length;h++){s=e[h][0],i=e[h][1],a=e[h][2];for(var n=!0,l=0;l<s.length;l++)(!1&a||r>=a)&&Object.keys(o.O).every((function(e){return o.O[e](s[l])}))?s.splice(l--,1):(n=!1,a<r&&(r=a));if(n){e.splice(h--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var h=e.length;h>0&&e[h-1][2]>a;h--)e[h]=e[h-1];e[h]=[s,i,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,a,r=s[0],n=s[1],l=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(i in n)o.o(n,i)&&(o.m[i]=n[i]);if(l)var h=l(o)}for(t&&t(s);c<r.length;c++)a=r[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(h)},s=self["webpackChunknetflix_clone"]=self["webpackChunknetflix_clone"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(6286)}));s=o.O(s)})();
//# sourceMappingURL=app.fa5eba51.js.map