<template>
  <div id="information">
    <img src="../assets/logo.png" class="scale-image" @click="clickImage">
    <div class="information-text">
      {{ language[$store.state.language].info}}
      <br>
      <br>
      {{ language[$store.state.language].developer }}: <b>{{language[$store.state.language].user}}</b>
      <br>
      <br>
      {{ language[$store.state.language].devstart }}: 2018/02/20
      <br>
      {{ language[$store.state.language].lastbuild }}: 2018/03/02
      <br>
      <br>
      {{ language[$store.state.language].source }}: <a href="https://github.com/leegeunhyeok/leegeunhyeok.github.com">Github</a>
      <br>
      <br>
      {{ language[$store.state.language].blog }}
      <br>
      <a href="http://blog.naver.com/lghlove0509">{{ language[$store.state.language].naver }}</a> / <a href="http://codevkr.tistory.com/">{{ language[lang].tistory }}</a>
      <br>
      <button class="info-area-btn" @click="$emit('onBack')">{{ back }}</button>
    </div>
  </div>
</template>

<script>
import Language from '@/language/InformationLanguage.js'

export default {
  data () {
    return {
      language: Language
    }
  },
  computed: {
    back () {
      return this.$store.state.language === 'en' ? 'Back' : '뒤로'
    }
  }
}
</script>

<style>
#information {
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 0px 0px 5px 5px;
  background-color: #eee;
}

#information img {
  transform: scale(0.5);
  width: 10rem;
}

.information-text {
  color: gray;
}

.click-vue {
  color: #41b883;
  font-size: 0.85rem;
}

.scale-image {
  cursor: pointer;
  animation: scale 1s alternate infinite;
}

@keyframes scale {
  0% {
    transform: scale(0.5);
  }

  100% {
    transform: scale(1.0);
  }
}
</style>
