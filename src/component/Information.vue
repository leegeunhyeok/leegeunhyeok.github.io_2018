<template>
  <div id="information">
    <img src="../assets/logo.png" class="scale-image" @click="clickImage">
    <div class="information-text">
      {{language[lang].info}}
      <br>
      <b class="click-vue">({{language[lang].click}})</b>
      <br>
      <br>
      <br>
      {{language[lang].developer}}: <b>{{language[lang].user}}</b>
      <br>
      <br>
      {{language[lang].devstart}}: 2018/02/20
      <br>
      {{language[lang].lastbuild}}: 2018/03/02
      <br>
      <br>
      {{language[lang].source}}: <a href="https://github.com/leegeunhyeok/leegeunhyeok.github.com">Github</a>
      <br>
      <br>
      {{language[lang].blog}}
      <br>
      <a href="http://blog.naver.com/lghlove0509">{{language[lang].naver}}</a> / <a href="http://codevkr.tistory.com/">{{language[lang].tistory}}</a>
      <br>
      <button class="info-area-btn" @click="$emit('onBack')">{{back}}</button>
    </div>
  </div>
</template>

<script>
import Language from '../language/InformationLanguage.js';

export default {
  props: ['lang'],
  data() {
    return {
      language: Language
    }
  },
  computed: {
    back() {
      return this.lang === 'en' ? 'Back':'뒤로';
    }
  },
  methods: {
    clickImage() {
      console.log('Clicked');
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
