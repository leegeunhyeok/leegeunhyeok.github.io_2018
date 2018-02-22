<template>
  <div id="information">
    <img src="../assets/logo.png" class="scale-image">
    <div class="information-text">
      {{language[lang].info}}
      <br>
      <br>
      {{language[lang].developer}}: <b>{{language[lang].user}}</b>
      <br>
      <br>
      {{language[lang].devstart}}: 2018/02/20
      <br>
      {{language[lang].lastbuild}}: 2018/02/23
      <br>
      <br>
      {{language[lang].source}}: <a href="https://github.com/leegeunhyeok/leegeunhyeok.github.com">Github</a>
      <br>
      <br>
      <br>
      {{language[lang].blog}}
      <br>
      <a href="http://blog.naver.com/lghlove0509">{{language[lang].naver}}</a> / <a href="http://codevkr.tistory.com/">{{language[lang].tistory}}</a>
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
  }
}
</script>

<style>
#information {
  width: 100%;
  height: 100%;
  text-align: center;
  overflow-y: auto;
  background-color: #eee;
}

#information img {
  margin: 20px 0px;
  width: 10rem;
}

.information-text {
  color: gray;
}

.scale-image {
  animation: scale 1s alternate infinite;
}

@keyframes scale {
  0% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1.2);
  }
}
</style>
