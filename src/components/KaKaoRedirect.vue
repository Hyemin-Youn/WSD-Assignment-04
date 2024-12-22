<template>
  <div>
    <p>카카오 로그인 처리 중...</p>
  </div>
</template>

<script>
export default {
  mounted() {
    const query = new URLSearchParams(window.location.search);
    const code = query.get("code");

    if (code) {
      this.$emit("handleKakaoCallback", code);
    }
  },
};
</script>
