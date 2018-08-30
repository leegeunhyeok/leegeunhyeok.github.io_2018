<template>
  <div id="intro">
    <div class="intro-text-area">
      <div class="intro-text">{{ language[$store.state.language].portfolio }}</div>
      <p class="intro-sub-text-1">{{ language[$store.state.language].name }}</p>
    </div>
    <div class="power-btn-area">
      <img src="../assets/power.png" @click="$emit('onPower')">
      <p class="intro-sub-text-2">{{ language[$store.state.language].power }}</p>
    </div>
    <div class="language-btn-area">
      <div class="language-text">{{ changeLang }}</div>
      <transition name="fade" mode="out-in">
        <button class="language-btn" @click="changeLanguage('kr')" v-if="$store.state.language === 'en'">Korean</button>
        <button class="language-btn" @click="changeLanguage('en')" v-else>영어</button>
      </transition>
    </div>
  </div>
</template>

<script>
import Language from '@/language/IntroLanguage.js'

export default {
  data () {
    return {
      language: Language
    }
  },
  computed: {
    changeLang () {
      return this.$store.state.language === 'en' ? 'Change Language' : '언어 변경'
    }
  },
  methods: {
    changeLanguage (langCode) {
      this.$store.commit('changeLanguage', langCode)
    }
  }
}
</script>

<style>
#intro {
  width: 100%;
  height: 100%;
  background-color: #eee;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}

.intro-text-area {
  margin-top: 10%;
  text-align: center;
}

.intro-text {
  color: rgba(128, 128, 128, 0);
  font-size: 3rem;
  font-weight: bold;
  -moz-animation: fadein 1.5s 1s both;
  -o-animation: fadein 1.5s 1s both;
  -webkit-animation: fadein 1.5s 1s both;
  -ms-animation: fadein 1.5s 1s both;
  animation: fadein 1.5s 1s both;
}

.intro-sub-text-1 {
  color: rgba(128, 128, 128, 0);
  -moz-animation: fadein 1.5s 1s both;
  -o-animation: fadein 1.5s 1s both;
  -webkit-animation: fadein 1.5s 1s both;
  -ms-animation: fadein 1.5s 1s both;
  animation: fadein 1.5s 1.5s both;
}

.intro-sub-text-2 {
  font-size: 1.2rem;
  color: rgba(128, 128, 128, 0);
  -moz-animation: fadein 1s 2s alternate infinite;
  -o-animation: fadein 1s 2s alternate infinite;
  -webkit-animation: fadein 1s 2s alternate infinite;
  -ms-animation: fadein 1s 2s alternate infinite;
  animation: fadein 1s 2s alternate infinite;
}

@-moz-keyframes fadein {
  100% {
    color: gray;
  }
}

@-o-keyframes fadein {
  100% {
    color: gray;
  }
}

@-webkit-keyframes fadein {
  100% {
    color: gray;
  }
}

@-ms-keyframes fadein {
  100% {
    color: gray;
  }
}

@keyframes fadein {
  100% {
    color: gray;
  }
}

.language-btn-area {
  width: 100%;
  position: absolute;
  text-align: center;
  bottom: 16%;
}

.language-text {
  font-size: 1rem;
  color: gray;
  margin-bottom: 1rem;
}

.language-btn {
  cursor: pointer;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 5px;
  box-shadow: 1px 1px 5px gray;
  color: gray;
  transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  -ms-transition: 0.5s;
}

.language-btn:hover {
  box-shadow: 3px 3px 10px gray;
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.power-btn-area {
  width: 100%;
  margin-top: 5%;
  text-align: center;
  position: relative;
}

.power-btn-area img {
  cursor: pointer;
  border-radius: 50%;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  -ms-transition: 0.5s;
  transition: 0.5s;
}

.power-btn-area img:hover {
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  box-shadow: 0px 0px 20px rgba(128, 128, 128, 1);
}
</style>
