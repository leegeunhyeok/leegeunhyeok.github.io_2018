<template>
  <div id="information-main">
    <transition name="fade" mode="out-in">
      <div id="information-wrap" v-if="view === 0">
        <div id="info-btn" @click="view = 1">
          <img src="../assets/info.png">
          <div>{{language[lang].info}}</div>
        </div>
        <div id="changelog-btn" @click="view = 2">
          <img src="../assets/changelog.png">
          <div>{{language[lang].changelog}}</div>
        </div>
      </div>
      <info-view v-else-if="view === 1" :lang="lang" @onBack="view = 0"></info-view>
      <changelog-view v-else :lang="lang" @onBack="view = 0"></changelog-view>
    </transition>
  </div>
</template>

<script>
import Information from './Information.vue';
import ChangeLog from './Changelog.vue';

const $language = {
  'en': {
    'info': 'Information',
    'changelog': 'ChangeLog'
  },
  'kr': {
    'info': '정보',
    'changelog': '변경사항'
  }
}

export default {
  props: ['lang'],
  data() {
    return {
      language: $language,
      view: 0
    }
  },
  components: {
    'info-view': Information,
    'changelog-view': ChangeLog
  }
}
</script>

<style>
#information-main {
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 0px 0px 5px 5px;
  overflow-y: auto;
  background-color: #eee;
}

#information-wrap {
  width: 100%;
  height: 100%;
  display: flex;
}

#info-btn, #changelog-btn {
  cursor: pointer;
  width: 50%;
  height: 100%;
  font-weight: bold;
  font-size: 1.1rem;
  color: gray;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

#info-btn:hover, #changelog-btn:hover {
  background-color: rgba(220, 220, 220, 1);
}

#info-btn img, #changelog-btn img {
  margin-top: 100px;
}

#info-btn {
  border-right: 1px solid lightgray;
}

#changelog-btn {
  border-left: 1px solid lightgray;
}

@media (max-width: 768px) {
  #information-main {
    display: block;
    overflow: hidden;
  }
  
  #info-btn, #changelog-btn {
    width: 100%;
    height: 50%;
    border: none;
  }

  #info-btn img, #changelog-btn img {
    margin-top: 20px;
  }

  #info-btn {
    border-bottom: 1px solid lightgray;
  }

  #changelog-btn {
    border-top: 1px solid lightgray;
  }
}

.info-area-btn {
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px gray;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.info-area-btn:hover {
  box-shadow: 1px 1px 10px gray;
  -ms-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
