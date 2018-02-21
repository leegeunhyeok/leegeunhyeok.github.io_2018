<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <intro-view v-if="view === 0" @onPower="view = 1"></intro-view>
      <boot-view v-else-if="view === 1" @bootEnd="view = 2"></boot-view>
      <login-view v-else-if="view === 2" @onLogin="view = 3"></login-view>
      <main-view v-else></main-view>
    </transition>
  </div>
</template>

<script>
import Intro from './component/Intro.vue';
import Boot from './component/Boot.vue';
import Login from './component/Login.vue';
import Main from './component/Main.vue';

export default {
  name: 'app',
  data () {
    return {
      view: 0
    }
  },
  components: {
    'intro-view': Intro,
    'boot-view': Boot,
    'login-view': Login,
    'main-view': Main
  },
  methods: {
    // 메소드 정의  
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
  transition: opacity .5s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
