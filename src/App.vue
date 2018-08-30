<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view
        @onPower="changeRoute('login')"
        @onLogin="changeRoute('main')"
        @onPoweroff="changeRoute('home')">
      </router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    changeRoute (routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>

<style>
@font-face {
  font-family: "NanumSquareRound";
  src:url('/fonts/NanumSquareRoundR.eot');
  src:url('/fonts/NanumSquareRoundR.eot#iefix') format('embedded-opentype'),
  url('/fonts/NanumSquareRoundR.woff') format('woff'),
  url('/fonts/NanumSquareRoundR.ttf') format('truetype');
  src:local(¡Ø), url('/fonts/NanumSquareRoundR.woff') format('woff');
}

html, #app {
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

body {
  font-family: "NanumSquareRound";
  background: url('./assets/background.svg') center;
  background-size: cover;
}

/* 텍스트 선택방지 */
div {
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter, .slide-leave-active {
  transform: translateX(-30);
}
</style>
