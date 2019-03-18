<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view
        @onPower="changeRoute('login')"
        @onLogin="changeRoute('desktop')"
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

<style lang="scss">
@import "@/assets/style/common.scss";
@import "@/assets/style/transition.scss";

* {
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

div {
  -webkit-user-select: none;
   -khtml-user-select: none;
     -moz-user-select: -moz-none;
      -ms-user-select: none;
          user-select: none;
}

#app {
  width: 100%;
  height: 100%;
  font-family: "NanumSquareRound";
  background: url('./assets/background.svg') center;
  background-size: cover;
}

</style>
