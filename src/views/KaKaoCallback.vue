<template>
    <div>Redirecting...</div>
  </template>
  
  <script>
  export default {
    mounted() {
      const query = new URLSearchParams(window.location.search);
      const code = query.get('code');
  
      if (code) {
        console.log("Authorization code received:", code);
        // Hash 모드로 다시 리다이렉션
        const redirectUrl = `/#/signin?code=${code}`;
        window.location.href = redirectUrl;
      } else {
        console.error("Authorization Code가 없습니다.");
      }
    },
  };
  </script>
  