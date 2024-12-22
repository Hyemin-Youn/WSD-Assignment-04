(function(){"use strict";var e={373:function(e,t,o){var s=o(5130),a=o(6768);const i={id:"app"};function r(e,t,o,s,r,n){const l=(0,a.g2)("Navbar"),c=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.bF)(l),(0,a.bF)(c)])}var n=o(4232);const l={class:"banner-content"},c={class:"banner-title"},d={class:"banner-description"},h={class:"banner-buttons"};function u(e,t,o,s,i,r){return(0,a.uX)(),(0,a.CE)("div",{class:"banner",style:(0,n.Tr)({backgroundImage:`url(${r.bannerImage})`})},[(0,a.Lk)("div",l,[(0,a.Lk)("h1",c,(0,n.v_)(o.heroMovie.title),1),(0,a.Lk)("p",d,(0,n.v_)(o.heroMovie.overview||"영화에 대한 설명이 없습니다."),1),(0,a.Lk)("div",h,[(0,a.Lk)("button",{class:"banner-button play",onClick:t[0]||(t[0]=(...e)=>r.playMovie&&r.playMovie(...e))}," 재생 "),(0,a.Lk)("button",{class:"banner-button info",onClick:t[1]||(t[1]=(...e)=>r.showDetails&&r.showDetails(...e))}," 상세 정보 ")])]),t[2]||(t[2]=(0,a.Lk)("div",{class:"banner-fade"},null,-1))],4)}o(4114);var v={name:"Banner",props:{heroMovie:{type:Object,required:!0}},computed:{bannerImage(){return this.heroMovie.backdrop_path?`https://image.tmdb.org/t/p/original${this.heroMovie.backdrop_path}`:""}},methods:{playMovie(){console.log("Play movie:",this.heroMovie.title)},showDetails(){this.heroMovie.id?this.$router.push(`/movie/${this.heroMovie.id}`):console.error("Movie ID is not available")}}},g=o(1241);const m=(0,g.A)(v,[["render",u],["__scopeId","data-v-79bd4bdb"]]);var p=m;const k={class:"home"},A={key:0,class:"loading-overlay"},w={key:1};function R(e,t,o,s,i,r){const l=(0,a.g2)("Navbar"),c=(0,a.g2)("Banner"),d=(0,a.g2)("SliderContent");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(l),(0,a.Lk)("div",k,[i.isLoading?((0,a.uX)(),(0,a.CE)("div",A,t[0]||(t[0]=[(0,a.Lk)("p",null,"로딩중...",-1)]))):((0,a.uX)(),(0,a.CE)("div",w,[(0,a.bF)(c,{heroMovie:i.heroMovie},null,8,["heroMovie"]),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.movieCategories,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.name,class:"movie-category"},[(0,a.Lk)("h3",null,(0,n.v_)(e.title),1),(0,a.bF)(d,{movies:e.movies},null,8,["movies"])])))),128))]))])])}o(1454);var D=o(4373),b="data:image/png;base64,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",f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJQSURBVFiFxdfJjw1RFAbwXzdaaEQT87ATU4wxLMTGuhNtRf8BSMTG9C+IhcSGJQs7IYi9xDyFBdJIRAgRM4khHTE8i3vKe6T1q1dVHV9yclO3zne+U/dWnXuK1rEah3Afn8Pu4SBWFYiXG104jlqDvQnLrn/iGMZXLT4ND0LkMTZjYsP9iTH3JHweYGpV4iNwLQKfROcgvp04Fb5Xg1sa2yPgBXTk8O/ApeBsKyveJi3rDyxsgbcoOI/LJrBUepLzBbgXg7t4MKf2JkHmxXilQAKXY5xfJoGuGD8USOB9jBPKJPA2xskFEpgS4+sC3N+YK+3jzQLcW8GdUyYB6ItAa1rgrA3O3bLi0BvB+jAuh/846WyoYWMVCbThjHp1mz6I7wz1qnk6uJVgrFQJa/iIvViBMWErY+5T+JwLTqXowD70+/NEbLT+SCT3GVBkiWZKe7sOs2PuKc5KR/HzAjH/H1pdgXapKE3BpL/uvcGrsFr51OpoQzeO4p1/739m78K3W44HbOawFvvVe71+3MZL9VYsi5OtzBKMivnr2C31By1jF76HyBWsx+gcvNHokWpGLWLsbFX8gPo3v6lVcgN6I0YtYubC1iC80OQsz4kF0pbVsCWP81epoi2rQDzDcun/4at6kzMgso52R4XiGfZE7BP/clgo/Vg8xPAhSGAEHoXGgmyysSPaIH1Oh6U3t2p8w5HQ6BnI4bK0RHOHQDzD/NC4ONDN19KL0qxPLINh+CJ9FahXwuHSG/oDz4YwAZgViYzUsNXtuKN5na/KboSmX8iAsy1IrQKsAAAAAElFTkSuQmCC";const N={class:"navbar-left"},y={class:"nav-links"},L={class:"navbar-right"};function E(e,t,o,s,i,r){const l=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("nav",{class:(0,n.C4)(["navbar",{"navbar-scrolled":i.isScrolled}])},[(0,a.Lk)("div",N,[(0,a.bF)(l,{to:"/home"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.Lk)("img",{src:b,alt:"Logo",class:"logo"},null,-1)]))),_:1}),(0,a.Lk)("ul",y,[(0,a.Lk)("li",null,[(0,a.bF)(l,{to:"/home"},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)(" 홈 ")]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(l,{to:"/popular"},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)(" 대세 콘텐츠 ")]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(l,{to:"/search"},{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.eW)(" 찾아보기 ")]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(l,{to:"/wishlist"},{default:(0,a.k6)((()=>t[5]||(t[5]=[(0,a.eW)(" 내가 찜한 리스트 ")]))),_:1})])])]),(0,a.Lk)("div",L,[(0,a.Lk)("img",{src:f,alt:"Profile",class:"profile-icon",onClick:t[0]||(t[0]=(...e)=>r.logout&&r.logout(...e))})])],2)}var S={name:"Navbar",data(){return{isScrolled:!1}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){this.isScrolled=window.scrollY>50},logout(){localStorage.removeItem("user"),this.$store&&this.$store.dispatch("logout"),this.$router.push("/signin")}}};const C=(0,g.A)(S,[["render",E],["__scopeId","data-v-bf0166f8"]]);var M=C;const I={class:"slider-container"},P={ref:"slider",class:"slider-content"};function B(e,t,o,s,i,r){const n=(0,a.g2)("MovieCard");return(0,a.uX)(),(0,a.CE)("div",I,[(0,a.Lk)("button",{class:"arrow-btn left",onClick:t[0]||(t[0]=(...e)=>s.scrollLeft&&s.scrollLeft(...e))},t[2]||(t[2]=[(0,a.Lk)("i",{class:"fas fa-chevron-left"},null,-1)])),(0,a.Lk)("div",P,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.movies,(e=>((0,a.uX)(),(0,a.Wv)(n,{key:e.id,movie:e},null,8,["movie"])))),128))],512),(0,a.Lk)("button",{class:"arrow-btn right",onClick:t[1]||(t[1]=(...e)=>s.scrollRight&&s.scrollRight(...e))},t[3]||(t[3]=[(0,a.Lk)("i",{class:"fas fa-chevron-right"},null,-1)]))])}var T=o(144);const _={class:"movie-card"},O=["src","alt"],Q={class:"movie-info"},H={class:"movie-title"},U={class:"release-date"},X={key:0,class:"movie-rating"};function W(e,t,o,i,r,l){return(0,a.uX)(),(0,a.CE)("div",_,[(0,a.Lk)("img",{src:l.posterUrl,alt:o.movie.title,class:"poster"},null,8,O),(0,a.Lk)("div",Q,[(0,a.Lk)("p",H,(0,n.v_)(o.movie.title),1),(0,a.Lk)("p",U," 개봉일: "+(0,n.v_)(l.formattedReleaseDate),1),o.movie.vote_average?((0,a.uX)(),(0,a.CE)("div",X," ⭐ "+(0,n.v_)(o.movie.vote_average)+" / 10 ",1)):(0,a.Q3)("",!0)]),(0,a.Lk)("span",{class:"wishlist-icon",onClick:t[0]||(t[0]=(0,s.D$)(((...e)=>l.handleWishlist&&l.handleWishlist(...e)),["stop"]))},[(0,a.Lk)("i",{class:(0,n.C4)(e.isInWishlist(o.movie.id)?"fas fa-heart liked":"far fa-heart")},null,2)])])}var F=o(782),J={props:{movie:{type:Object,required:!0}},computed:{...(0,F.L8)(["isInWishlist"]),posterUrl(){return`https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`},formattedReleaseDate(){if(!this.movie.release_date)return"알 수 없음";const e={year:"numeric",month:"long",day:"numeric"};return new Date(this.movie.release_date).toLocaleDateString("ko-KR",e)}},methods:{...(0,F.i0)(["toggleWishlist"]),handleWishlist(){this.toggleWishlist(this.movie)}}};const K=(0,g.A)(J,[["render",W],["__scopeId","data-v-7d36438e"]]);var V=K,Y={components:{MovieCard:V},props:{movies:{type:Array,required:!0}},setup(){const e=(0,T.KR)(null),t=()=>{e.value&&e.value.scrollBy({left:-300,behavior:"smooth"})},o=()=>{e.value&&e.value.scrollBy({left:300,behavior:"smooth"})};return{slider:e,scrollLeft:t,scrollRight:o}}};const G=(0,g.A)(Y,[["render",B],["__scopeId","data-v-7a43e855"]]);var x=G,z={name:"Home",components:{Banner:p,Navbar:M,SliderContent:x},data(){return{isLoading:!0,heroMovie:{},movieCategories:[{name:"popular",title:"인기 영화",movies:[]},{name:"now_playing",title:"최신 영화",movies:[]},{name:"top_rated",title:"높은 평점 영화",movies:[]},{name:"upcoming",title:"개봉 예정 영화",movies:[]}]}},created(){this.loadData()},methods:{async loadData(){try{await Promise.all([this.fetchHeroMovie(),this.fetchMovies()])}catch(e){console.error("Error loading data:",e)}finally{this.isLoading=!1}},async fetchHeroMovie(){const e="75b7c972001662bd9d37622e0e222947";try{const t=await D.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR`);this.heroMovie=t.data.results[0]}catch(t){console.error("Hero Movie 로드 실패:",t)}},async fetchMovies(){const e="75b7c972001662bd9d37622e0e222947";try{const t=this.movieCategories.map((async t=>{const o=await D.A.get(`https://api.themoviedb.org/3/movie/${t.name}?api_key=${e}&language=ko-KR`);t.movies=o.data.results}));await Promise.all(t)}catch(t){console.error("Movie Categories 로드 실패:",t)}}}};const j=(0,g.A)(z,[["render",R],["__scopeId","data-v-f8e502b6"]]);var Z=j,q={components:{Banner:p,Home:Z}};const $=(0,g.A)(q,[["render",r]]);var ee=$,te=o(1387);const oe={class:"wrapper"},se={class:"content"},ae={key:0,class:"error"},ie={class:"remember-me"},re={class:"content"},ne={key:0,class:"error"},le={class:"terms"},ce=["disabled"];function de(e,t,o,i,r,l){return(0,a.uX)(),(0,a.CE)("div",null,[t[24]||(t[24]=(0,a.Lk)("div",{class:"bg-image"},null,-1)),(0,a.Lk)("div",oe,[(0,a.Lk)("div",{class:(0,n.C4)(["card",{active:"login"===r.activeCard,backward:"signup"===r.activeCard}])},[(0,a.Lk)("div",se,[t[17]||(t[17]=(0,a.Lk)("h2",null,"Login",-1)),(0,a.Lk)("form",{onSubmit:t[3]||(t[3]=(0,s.D$)(((...e)=>l.handleLogin&&l.handleLogin(...e)),["prevent"]))},[t[13]||(t[13]=(0,a.Lk)("label",{for:"email"},"Email",-1)),(0,a.bo)((0,a.Lk)("input",{id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>r.email=e),type:"email",required:""},null,512),[[s.Jo,r.email]]),t[14]||(t[14]=(0,a.Lk)("label",{for:"password"},"Password",-1)),(0,a.bo)((0,a.Lk)("input",{id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>r.password=e),type:"password",required:""},null,512),[[s.Jo,r.password]]),r.loginError?((0,a.uX)(),(0,a.CE)("p",ae,(0,n.v_)(r.loginError),1)):(0,a.Q3)("",!0),(0,a.Lk)("div",ie,[(0,a.bo)((0,a.Lk)("input",{id:"rememberMe","onUpdate:modelValue":t[2]||(t[2]=e=>r.rememberMe=e),type:"checkbox"},null,512),[[s.lH,r.rememberMe]]),t[12]||(t[12]=(0,a.Lk)("label",{for:"rememberMe"},"Remember Me",-1))]),t[15]||(t[15]=(0,a.Lk)("button",{type:"submit"},"Sign In",-1))],32),(0,a.Lk)("button",{class:"kakao-login",onClick:t[4]||(t[4]=(...e)=>l.handleKakaoLogin&&l.handleKakaoLogin(...e))}," 카카오 로그인 "),(0,a.Lk)("p",{class:"switch",onClick:t[5]||(t[5]=(...e)=>l.switchToSignup&&l.switchToSignup(...e))},t[16]||(t[16]=[(0,a.eW)(" Don't have an account? "),(0,a.Lk)("b",null,"Sign up",-1)]))])],2),(0,a.Lk)("div",{class:(0,n.C4)(["card",{active:"signup"===r.activeCard,backward:"login"===r.activeCard}])},[(0,a.Lk)("div",re,[t[23]||(t[23]=(0,a.Lk)("h2",null,"Sign Up",-1)),(0,a.Lk)("form",{onSubmit:t[10]||(t[10]=(0,s.D$)(((...e)=>l.handleRegister&&l.handleRegister(...e)),["prevent"]))},[t[19]||(t[19]=(0,a.Lk)("label",{for:"newEmail"},"Email",-1)),(0,a.bo)((0,a.Lk)("input",{id:"newEmail","onUpdate:modelValue":t[6]||(t[6]=e=>r.newEmail=e),type:"email",required:""},null,512),[[s.Jo,r.newEmail]]),t[20]||(t[20]=(0,a.Lk)("label",{for:"newPassword"},"Password",-1)),(0,a.bo)((0,a.Lk)("input",{id:"newPassword","onUpdate:modelValue":t[7]||(t[7]=e=>r.newPassword=e),type:"password",required:""},null,512),[[s.Jo,r.newPassword]]),t[21]||(t[21]=(0,a.Lk)("label",{for:"confirmPassword"},"Confirm Password",-1)),(0,a.bo)((0,a.Lk)("input",{id:"confirmPassword","onUpdate:modelValue":t[8]||(t[8]=e=>r.confirmPassword=e),type:"password",required:""},null,512),[[s.Jo,r.confirmPassword]]),r.signupError?((0,a.uX)(),(0,a.CE)("p",ne,(0,n.v_)(r.signupError),1)):(0,a.Q3)("",!0),(0,a.Lk)("div",le,[(0,a.bo)((0,a.Lk)("input",{id:"terms","onUpdate:modelValue":t[9]||(t[9]=e=>r.termsAccepted=e),type:"checkbox"},null,512),[[s.lH,r.termsAccepted]]),t[18]||(t[18]=(0,a.Lk)("label",{for:"terms"},[(0,a.eW)(" I have read the "),(0,a.Lk)("b",null,"Terms and Conditions")],-1))]),(0,a.Lk)("button",{type:"submit",disabled:!r.termsAccepted}," Register ",8,ce)],32),(0,a.Lk)("p",{class:"switch",onClick:t[11]||(t[11]=(...e)=>l.switchToLogin&&l.switchToLogin(...e))},t[22]||(t[22]=[(0,a.eW)(" Already have an account? "),(0,a.Lk)("b",null,"Sign in",-1)]))])],2)])])}o(8992),o(3949),o(4603),o(7566),o(8721);var he={data(){return{activeCard:"login",email:"",password:"",rememberMe:!1,loginError:"",newEmail:"",newPassword:"",confirmPassword:"",termsAccepted:!1,signupError:""}},mounted(){const e=new URLSearchParams(window.location.search),t=e.get("code");t&&this.handleKakaoCallback(t)},methods:{switchToSignup(){this.activeCard="signup",this.triggerCardAnimation()},switchToLogin(){this.activeCard="login",this.triggerCardAnimation()},triggerCardAnimation(){const e=document.querySelectorAll(".card");e.forEach((e=>{e.classList.contains("active")?(e.classList.remove("active"),e.classList.add("backward")):(e.classList.remove("backward"),e.classList.add("enter"),setTimeout((()=>{e.classList.remove("enter"),e.classList.add("active")}),1e3))}))},handleLogin(){this.password.length<6?this.loginError="Password must be at least 6 characters long.":(alert("Login successful!"),this.$store.dispatch("login",{email:this.email}),"/home"!==this.$route.path&&this.$router.push("/home"))},handleRegister(){this.newPassword.length<6?this.signupError="Password must be at least 6 characters long.":this.newPassword===this.confirmPassword?(alert("Registration successful!"),this.switchToLogin()):this.signupError="Passwords do not match."},handleKakaoLogin(){const e="92d19d65367f8ae3be01c23a17c88014",t="https://hyemin-youn.github.io/WSD-Assignment-04/",o=`https://kauth.kakao.com/oauth/authorize?client_id=${e}&redirect_uri=${t}&response_type=code`;window.location.href=o},handleKakaoCallback(e){fetch("https://kauth.kakao.com/oauth/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"authorization_code",client_id:"92d19d65367f8ae3be01c23a17c88014",redirect_uri:"https://hyemin-youn.github.io/WSD-Assignment-04/",code:e})}).then((e=>e.json())).then((e=>{e.access_token?(localStorage.setItem("kakaoToken",e.access_token),this.$router.push("/home")):console.error("Failed to get Access Token:",e)})).catch((e=>console.error("Error during token exchange:",e)))}}};const ue=(0,g.A)(he,[["render",de],["__scopeId","data-v-63dea030"]]);var ve=ue;const ge={class:"wishlist"},me={key:0,class:"empty-wishlist"},pe={key:1,class:"wishlist-movies"},ke={class:"movie-info"},Ae=["onClick"];function we(e,t,o,s,i,r){const l=(0,a.g2)("Navbar");return(0,a.uX)(),(0,a.CE)("div",ge,[(0,a.bF)(l),t[1]||(t[1]=(0,a.Lk)("h2",null,"내가 찜한 콘텐츠",-1)),0===s.wishlist.length?((0,a.uX)(),(0,a.CE)("div",me,t[0]||(t[0]=[(0,a.Lk)("p",null,"찜한 영화가 없습니다.",-1)]))):((0,a.uX)(),(0,a.CE)("div",pe,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.wishlist,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"wishlist-movie",style:(0,n.Tr)({backgroundImage:`url(https://image.tmdb.org/t/p/w500/${e.poster_path})`})},[(0,a.Lk)("div",ke,[(0,a.Lk)("h4",null,(0,n.v_)(e.title),1),(0,a.Lk)("button",{class:"remove-btn",onClick:t=>s.toggleWishlist(e)}," 삭제 ",8,Ae)])],4)))),128))]))])}var Re={name:"WishList",components:{Navbar:M},setup(){const e=(0,F.Pj)(),t=(0,a.EW)((()=>e.getters.wishlist)),o=t=>{e.dispatch("toggleWishlist",t)};return{wishlist:t,toggleWishlist:o}}};const De=(0,g.A)(Re,[["render",we],["__scopeId","data-v-1c034802"]]);var be=De;o(7550);const fe=(0,F.y$)({state:{user:JSON.parse(localStorage.getItem("user"))||null,isAuthenticated:!!localStorage.getItem("user"),wishlist:JSON.parse(localStorage.getItem("wishlist"))||[],recentSearches:JSON.parse(localStorage.getItem("recentSearches"))||[],searchResults:JSON.parse(localStorage.getItem("searchResults"))||[]},mutations:{setUser(e,{user:t,token:o}){e.user=t,e.isAuthenticated=!!t,t?(localStorage.setItem("user",JSON.stringify(t)),localStorage.setItem("kakaoToken",o)):(localStorage.removeItem("user"),localStorage.removeItem("kakaoToken"))},logout(e){e.user=null,e.isAuthenticated=!1,localStorage.removeItem("user"),localStorage.removeItem("kakaoToken")},TOGGLE_WISHLIST(e,t){const o=e.wishlist.findIndex((e=>e.id===t.id));-1===o?e.wishlist.push(t):e.wishlist.splice(o,1),localStorage.setItem("wishlist",JSON.stringify(e.wishlist))},ADD_SEARCH_HISTORY(e,t){e.recentSearches.includes(t)||(e.recentSearches.unshift(t),e.recentSearches.length>10&&e.recentSearches.pop(),localStorage.setItem("recentSearches",JSON.stringify(e.recentSearches)))},DELETE_SEARCH_HISTORY(e,t){e.recentSearches.splice(t,1),localStorage.setItem("recentSearches",JSON.stringify(e.recentSearches))},SET_SEARCH_RESULTS(e,t){e.searchResults=t,localStorage.setItem("searchResults",JSON.stringify(t))}},actions:{login({commit:e},{user:t,token:o}){e("setUser",{user:t,token:o})},logout({commit:e}){e("logout")},toggleWishlist({commit:e},t){e("TOGGLE_WISHLIST",t)},addSearchHistory({commit:e},t){e("ADD_SEARCH_HISTORY",t)},deleteSearchHistory({commit:e},t){e("DELETE_SEARCH_HISTORY",t)},setSearchResults({commit:e},t){console.log("검색 결과 저장 중:",t),e("SET_SEARCH_RESULTS",t)}},getters:{wishlist:e=>e.wishlist,isInWishlist:e=>t=>e.wishlist.some((e=>e.id===t)),recentSearches:e=>e.recentSearches,searchResults:e=>e.searchResults,isAuthenticated:e=>e.isAuthenticated,user:e=>e.user}});var Ne=fe;const ye={key:0,class:"movie-detail"},Le=["src"],Ee={class:"content"};function Se(e,t,o,s,i,r){return i.movie?((0,a.uX)(),(0,a.CE)("div",ye,[(0,a.Lk)("img",{src:r.makeImagePath(i.movie.backdrop_path,"w1280"),alt:"Movie Background"},null,8,Le),(0,a.Lk)("div",Ee,[(0,a.Lk)("h2",null,(0,n.v_)(i.movie.title),1),(0,a.Lk)("p",null,(0,n.v_)(i.movie.overview),1),(0,a.Lk)("p",null,"개봉일: "+(0,n.v_)(i.movie.release_date),1),(0,a.Lk)("p",null,"평점: ⭐ "+(0,n.v_)(i.movie.vote_average),1)])])):(0,a.Q3)("",!0)}var Ce={data(){return{movie:null}},created(){this.fetchMovieDetail()},methods:{async fetchMovieDetail(){const e="75b7c972001662bd9d37622e0e222947",t=this.$route.params.id;try{const o=await D.A.get(`https://api.themoviedb.org/3/movie/${t}?api_key=${e}&language=ko-KR`);this.movie=o.data}catch(o){console.error("Error fetching movie details:",o)}},makeImagePath(e,t){return`https://image.tmdb.org/t/p/${t}${e}`}}};const Me=(0,g.A)(Ce,[["render",Se],["__scopeId","data-v-06c832ca"]]);var Ie=Me;const Pe={class:"search-bar"},Be={key:0,class:"recent-searches"},Te=["onClick"],_e=["onClick"],Oe={class:"dropdown-container"},Qe=["onClick"],He={key:0,class:"select-items"},Ue=["onClick"],Xe={class:"movie-grid"},We={class:"poster-container"},Fe=["src","alt"],Je=["onClick"],Ke={class:"movie-title"},Ve={key:1,class:"loading"};function Ye(e,t,o,i,r,l){const c=(0,a.g2)("Navbar");return(0,a.uX)(),(0,a.CE)("div",{class:"search-page",onScroll:t[4]||(t[4]=(...e)=>l.handleScroll&&l.handleScroll(...e))},[(0,a.bF)(c),t[7]||(t[7]=(0,a.Lk)("h1",null,"영화 검색",-1)),(0,a.Lk)("div",Pe,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.searchQuery=e),type:"text",placeholder:"영화 제목을 검색하세요",onKeydown:t[1]||(t[1]=(0,s.jR)(((...e)=>l.handleSearch&&l.handleSearch(...e)),["enter"]))},null,544),[[s.Jo,r.searchQuery]]),(0,a.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>l.handleSearch&&l.handleSearch(...e))}," 검색 ")]),e.recentSearches.length?((0,a.uX)(),(0,a.CE)("div",Be,[t[5]||(t[5]=(0,a.Lk)("h3",null,"최근 검색어",-1)),(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.recentSearches,((t,o)=>((0,a.uX)(),(0,a.CE)("li",{key:o},[(0,a.Lk)("span",{onClick:e=>l.searchFromHistory(t)},(0,n.v_)(t),9,Te),(0,a.Lk)("button",{class:"delete-btn",onClick:t=>e.deleteSearchHistory(o)}," X ",8,_e)])))),128))])])):(0,a.Q3)("",!0),(0,a.Lk)("div",Oe,[t[6]||(t[6]=(0,a.Lk)("label",null,"선호하는 설정을 선택하세요",-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(l.dropdownEntries,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.key,class:"custom-select"},[(0,a.Lk)("div",{class:"select-selected",onClick:t=>l.toggleDropdown(e.key)},(0,n.v_)(r.selectedOptions[e.key]),9,Qe),r.activeDropdown===e.key?((0,a.uX)(),(0,a.CE)("div",He,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.options,(t=>((0,a.uX)(),(0,a.CE)("div",{key:t,onClick:o=>l.selectOption(e.key,t)},(0,n.v_)(t),9,Ue)))),128))])):(0,a.Q3)("",!0)])))),128)),(0,a.Lk)("button",{class:"clear-options",onClick:t[3]||(t[3]=(...e)=>l.clearOptions&&l.clearOptions(...e))}," 초기화 ")]),(0,a.Lk)("div",Xe,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.movies,(t=>((0,a.uX)(),(0,a.CE)("div",{key:t.id,class:"movie-card"},[(0,a.Lk)("div",We,[(0,a.Lk)("img",{class:"movie-poster",src:l.getPosterUrl(t.poster_path),alt:t.title},null,8,Fe),(0,a.Lk)("button",{class:(0,n.C4)(["favorite-btn",{favorited:e.isInWishlist(t.id)}]),onClick:o=>e.toggleWishlist(t)}," ❤ ",10,Je)]),(0,a.Lk)("div",Ke,(0,n.v_)(t.title),1)])))),128))]),r.loading?((0,a.uX)(),(0,a.CE)("div",Ve," 로딩 중... ")):(0,a.Q3)("",!0)],32)}const Ge="75b7c972001662bd9d37622e0e222947",xe="https://api.themoviedb.org/3",ze=async(e=1)=>{try{const t=await D.A.get(`${xe}/movie/popular`,{params:{api_key:Ge,language:"ko-KR",page:e}});return t.data}catch(t){return console.error("Error fetching popular movies:",t),{results:[]}}},je=async e=>{const{genre:t,rating:o,language:s,page:a=1}=e;try{const e={api_key:Ge,language:"ko-KR",page:a};if(t&&"장르 (전체)"!==t){const o={Action:28,Adventure:12,Comedy:35,Crime:80,Family:10751};e.with_genres=o[t]||null}if(o&&"평점 (전체)"!==o){const[t,s]=o.split("~").map(Number);e["vote_average.gte"]=t||0,e["vote_average.lte"]=s||10}s&&"언어 (전체)"!==s&&(e.with_original_language=s);const i=await D.A.get(`${xe}/discover/movie`,{params:e});return i.data}catch(i){return console.error("Error fetching movies:",i),{results:[]}}},Ze=async(e,t=1)=>{try{const o=await D.A.get(`${xe}/search/movie`,{params:{api_key:Ge,language:"ko-KR",query:e,page:t}});return o.data.results}catch(o){return console.error("Error searching movies:",o),[]}};var qe={name:"Search",components:{Navbar:M},data(){return{searchQuery:"",dropdowns:{originalLanguage:["장르 (전체)","Action","Adventure","Comedy","Crime","Family"],translationLanguage:["평점 (전체)","9~10","8~9","7~8","6~7","5~6","4~5","4점 이하"],sorting:["언어 (전체)","en","ko"]},DEFAULT_OPTIONS:{originalLanguage:"장르 (전체)",translationLanguage:"평점 (전체)",sorting:"언어 (전체)"},selectedOptions:{originalLanguage:"장르 (전체)",translationLanguage:"평점 (전체)",sorting:"언어 (전체)"},activeDropdown:null,movies:[],currentPage:1,totalPages:1,loading:!1}},computed:{...(0,F.L8)(["recentSearches","wishlist","isInWishlist"]),dropdownEntries(){return Object.entries(this.dropdowns).map((([e,t])=>({key:e,options:t})))}},created(){this.fetchMovies(),window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{...(0,F.i0)(["addSearchHistory","setSearchResults","toggleWishlist","deleteSearchHistory"]),async fetchMovies(e=1,t=!1){if(this.loading)return;this.loading=!0;const o={genre:this.selectedOptions.originalLanguage,rating:this.selectedOptions.translationLanguage,language:this.selectedOptions.sorting,page:e};try{const s=await je(o);this.movies=t?[...this.movies,...s.results]:s.results,this.currentPage=e,this.totalPages=s.total_pages}catch(s){console.error("Error fetching movies:",s)}finally{this.loading=!1}},async handleSearch(){if(this.searchQuery.trim()){this.loading=!0;try{this.addSearchHistory(this.searchQuery);const e=await Ze(this.searchQuery,1);this.movies=e||[],this.currentPage=1,this.totalPages=e.total_pages||1,this.setSearchResults(this.movies)}catch(e){console.error("검색 중 오류 발생:",e.message)}finally{this.loading=!1}}},searchFromHistory(e){this.searchQuery=e,this.handleSearch()},toggleDropdown(e){this.activeDropdown=this.activeDropdown===e?null:e},selectOption(e,t){this.selectedOptions={...this.selectedOptions,[e]:t},this.activeDropdown=null,this.fetchMovies(1)},clearOptions(){this.selectedOptions={...this.DEFAULT_OPTIONS},this.fetchMovies(1)},handleScroll(){const e=window.innerHeight+window.scrollY>=document.body.offsetHeight-100;e&&this.currentPage<this.totalPages&&this.fetchMovies(this.currentPage+1,!0)},getPosterUrl(e){return e?`https://image.tmdb.org/t/p/w500/${e}`:"default_poster.png"}}};const $e=(0,g.A)(qe,[["render",Ye],["__scopeId","data-v-0f67f3c3"]]);var et=$e;const tt={class:"popular"},ot={class:"movie-grid"},st={key:0,class:"loading"};function at(e,t,o,s,i,r){const n=(0,a.g2)("MovieCard");return(0,a.uX)(),(0,a.CE)("div",tt,[(0,a.Lk)("div",ot,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.movies,(e=>((0,a.uX)(),(0,a.Wv)(n,{key:e.id,movie:e},null,8,["movie"])))),128))]),i.loading?((0,a.uX)(),(0,a.CE)("div",st," 로딩 중... ")):(0,a.Q3)("",!0),i.showScrollTopButton?((0,a.uX)(),(0,a.CE)("button",{key:1,class:"scroll-top",onClick:t[0]||(t[0]=(...e)=>r.scrollToTop&&r.scrollToTop(...e))}," TOP(위로) ")):(0,a.Q3)("",!0)])}var it={name:"PopularInfinite",components:{MovieCard:V},data(){return{movies:[],currentPage:1,totalPages:1,loading:!1,showScrollTopButton:!1}},created(){this.fetchMovies(),window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{async fetchMovies(e=1){if(this.loading||e>this.totalPages)return;this.loading=!0;const t=await ze(e);this.movies=[...this.movies,...t.results],this.currentPage=e,this.totalPages=t.total_pages,this.loading=!1},handleScroll(){const e=window.innerHeight+window.scrollY>=document.body.offsetHeight-100;e&&this.currentPage<this.totalPages&&this.fetchMovies(this.currentPage+1),this.showScrollTopButton=window.scrollY>300},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}};const rt=(0,g.A)(it,[["render",at],["__scopeId","data-v-3b23ca2e"]]);var nt=rt;const lt={class:"popular"},ct={class:"movie-grid"},dt={class:"pagination"},ht=["disabled"],ut=["disabled"];function vt(e,t,o,s,i,r){const l=(0,a.g2)("MovieCard");return(0,a.uX)(),(0,a.CE)("div",lt,[(0,a.Lk)("div",ct,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.paginatedMovies,(e=>((0,a.uX)(),(0,a.Wv)(l,{key:e.id,movie:e},null,8,["movie"])))),128))]),(0,a.Lk)("div",dt,[(0,a.Lk)("button",{disabled:1===i.currentPage,onClick:t[0]||(t[0]=e=>r.changePage(i.currentPage-1))}," < 이전 ",8,ht),(0,a.Lk)("span",null,(0,n.v_)(i.currentPage)+" / "+(0,n.v_)(i.totalPages),1),(0,a.Lk)("button",{disabled:i.currentPage===i.totalPages,onClick:t[1]||(t[1]=e=>r.changePage(i.currentPage+1))}," 다음 > ",8,ut)])])}var gt={name:"PopularTable",components:{MovieCard:V},data(){return{movies:[],currentPage:1,totalPages:1,moviesPerPage:this.calculateMoviesPerPage()}},computed:{paginatedMovies(){const e=(this.currentPage-1)*this.moviesPerPage,t=e+this.moviesPerPage;return this.movies.slice(e,t)}},created(){this.fetchMovies(),window.addEventListener("resize",this.handleResize)},beforeUnmount(){window.removeEventListener("resize",this.handleResize)},methods:{async fetchMovies(){try{const e=3;let t=[];for(let o=1;o<=e;o++){const e=await ze(o);t=[...t,...e.results]}this.movies=t,this.totalPages=Math.ceil(this.movies.length/this.moviesPerPage)}catch(e){console.error("Error fetching movies:",e)}},changePage(e){e>0&&e<=this.totalPages&&(this.currentPage=e)},calculateMoviesPerPage(){return window.innerWidth<=480?9:window.innerWidth<=768?6:10},handleResize(){this.moviesPerPage=this.calculateMoviesPerPage(),this.totalPages=Math.ceil(this.movies.length/this.moviesPerPage)}}};const mt=(0,g.A)(gt,[["render",vt],["__scopeId","data-v-00a191f2"]]);var pt=mt;const kt={class:"view-toggle"};function At(e,t,o,s,i,r){const l=(0,a.g2)("Navbar");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(l),(0,a.Lk)("div",kt,[(0,a.Lk)("button",{class:(0,n.C4)({active:"PopularTable"===i.currentView}),onClick:t[0]||(t[0]=e=>r.switchView("PopularTable"))}," 📋 Table View ",2),(0,a.Lk)("button",{class:(0,n.C4)({active:"PopularInfinite"===i.currentView}),onClick:t[1]||(t[1]=e=>r.switchView("PopularInfinite"))}," 📜 무한 스크롤 View ",2)]),((0,a.uX)(),(0,a.Wv)((0,a.$y)(i.currentView)))])}var wt={name:"Popular",components:{Navbar:M,PopularTable:pt,PopularInfinite:nt},data(){return{currentView:"PopularTable"}},watch:{currentView(e){document.body.style.overflow="PopularTable"===e?"hidden":""}},created(){"PopularTable"===this.currentView&&(document.body.style.overflow="hidden")},beforeUnmount(){document.body.style.overflow=""},methods:{switchView(e){this.currentView=e}}};const Rt=(0,g.A)(wt,[["render",At],["__scopeId","data-v-3599d8e9"]]);var Dt=Rt;function bt(e,t,o,s,i,r){return(0,a.uX)(),(0,a.CE)("div",null,t[0]||(t[0]=[(0,a.Lk)("p",null,"Redirecting... Please wait.",-1)]))}var ft={mounted(){const e=new URLSearchParams(window.location.search),t=e.get("code");t?this.exchangeAuthorizationCode(t):(console.error("No authorization code found"),this.$router.push("/signin"))},methods:{exchangeAuthorizationCode(e){fetch("https://kauth.kakao.com/oauth/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"authorization_code",client_id:"92d19d65367f8ae3be01c23a17c88014",redirect_uri:"https://hyemin-youn.github.io/WSD-Assignment-04/oauth/callback",code:e})}).then((e=>e.json())).then((e=>{e.access_token?(console.log("Access Token:",e.access_token),localStorage.setItem("kakaoToken",e.access_token),this.$router.push("/home")):(console.error("Failed to get Access Token",e),this.$router.push("/signin"))})).catch((e=>{console.error("Error during token exchange",e),this.$router.push("/signin")}))}}};const Nt=(0,g.A)(ft,[["render",bt]]);var yt=Nt;const Lt=[{path:"/signin",name:"SignIn",component:ve,meta:{hideNavbar:!0}},{path:"/home",name:"Home",component:Z,meta:{requiresAuth:!0}},{path:"/",redirect:"/signin"},{path:"/movies/:id",component:Ie},{path:"/wishlist",name:"Wishlist",component:be},{path:"/slider",name:"SliderContent",component:x},{path:"/popular",component:Dt,redirect:"/popular/table",children:[{path:"table",component:pt},{path:"infinite",component:nt}]},{path:"/search",name:"Search",component:et},{path:"/kakao-redirect",name:"KakaoRedirect",component:yt}],Et=(0,te.aE)({history:(0,te.Bt)(),routes:Lt});Et.beforeEach(((e,t,o)=>{const s=Ne.getters.isAuthenticated;"SignIn"===e.name&&s?o("/home"):o()}));var St=Et,Ct=o(8950),Mt=o(292),It=o(2353);Ct.Yv.add(It.Uec,It.vmR,It.qcK,It.ekB);const Pt=(0,s.Ef)(ee);window.Kakao.init("92d19d65367f8ae3be01c23a17c88014"),console.log("Kakao API Key:","92d19d65367f8ae3be01c23a17c88014"),Pt.use(St),Pt.use(Ne),Pt.component("FontAwesomeIcon",Mt.gc),Pt.mount("#app"),console.log("Kakao API Key:","92d19d65367f8ae3be01c23a17c88014")}},t={};function o(s){var a=t[s];if(void 0!==a)return a.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,s,a,i){if(!s){var r=1/0;for(d=0;d<e.length;d++){s=e[d][0],a=e[d][1],i=e[d][2];for(var n=!0,l=0;l<s.length;l++)(!1&i||r>=i)&&Object.keys(o.O).every((function(e){return o.O[e](s[l])}))?s.splice(l--,1):(n=!1,i<r&&(r=i));if(n){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[s,a,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,i,r=s[0],n=s[1],l=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in n)o.o(n,a)&&(o.m[a]=n[a]);if(l)var d=l(o)}for(t&&t(s);c<r.length;c++)i=r[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},s=self["webpackChunknetflix_clone"]=self["webpackChunknetflix_clone"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(373)}));s=o.O(s)})();
//# sourceMappingURL=app.ec9572f5.js.map