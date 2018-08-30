<template>
  <div id="main">
    <div id="desktop">
      <div id="shortcut-area">
        <shortcut-icon v-for="(item, index) in shortcut" :key="index" :path="item.image" @onClick="shortcutClick(index)">
          <div slot="shortcut-name">{{ item[$store.state.language + '-name'] }}</div>
        </shortcut-icon>
      </div>
      <transition name="fade" mode="in-out">
        <window-view v-if="window" :data="data" :type="type" @onClose="onClose" @shutdown="$emit('onPoweroff')" @close="window = false"></window-view>
      </transition>
    </div>
    <div id="taskbar">
      <button><img class="start" src="../assets/start.png" @click="showMenu = !showMenu"></button>
      <div id="time">{{ time }}</div>
    </div>
    <transition name="fade" mode="in-out">
      <div id="menu" v-if="showMenu">
        <img src="../assets/poweroff.png" @click="$emit('onPoweroff')">
        <br>
        <br>
        <b>{{ powerOff }}</b>
        <div class="language-btn-area">
          <div class="menu-language-text">{{changeLang}}</div>
          <transition name="fade" mode="out-in">
            <button class="menu-language-btn" @click="changeLanguage('kr')" v-if="$store.state.language === 'en'">Korean</button>
            <button class="menu-language-btn" @click="changeLanguage('en')" v-else>영어</button>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// 데스크탑 메인 화면
import Shortcut from '@/models/Shortcut.js'
import Format from '@/date-format.js'

import ShortcutComponent from '@/components/Shortcut.vue'
import WindowComponent from '@/components/Window.vue'

export default {
  data () {
    return {
      showMenu: false, // 시작메뉴 Show
      window: false, // 단축 아이콘 클릭시 윈도우 띄우기
      data: {}, // 폴더에서 보여줄 데이터
      type: 0, // 단축아이콘 타입(기본 윈도우, 브라우저, 정보)
      format: Format, // 시간포맷 변환객체
      time: Format.getSimple(null, this.$store.state.language),
      shortcut: Shortcut
    }
  },
  components: {
    'shortcut-icon': ShortcutComponent,
    'window-view': WindowComponent
  },
  computed: {
    powerOff () {
      return this.$store.state.language === 'en' ? 'Power Off' : '종료'
    },
    changeLang () {
      return this.$store.state.language === 'en' ? 'Change language' : '언어 변경'
    }
  },
  created () {
    this.refreshTime() // 1초에 한번씩 자동 갱신됨
  },
  methods: {
    refreshTime () {
      setInterval(() => {
        this.time = this.format.getSimple(null, this.$store.state.language) // 1초마다 시간 불러오기
      }, 1000)
    },
    shortcutClick (n) { // 단축아이콘 클릭 (0~7)
      if (n !== 5 && n !== 6) {
        this.showWindow(n) // 5, 6이 아니면 윈도우 띄우기
      } else if (n === 5) {
        window.open('https://github.com/leegeunhyeok') // 깃허브 새창으로 열기
      } else {
        window.open('mailto:lghlove0509@naver.com') // 메일 프로그램 연결
      }
    },
    showWindow (n) {
      this.type = n
      this.data = { 'title': this.shortcut[n][this.$store.state.language + '-name'] }
      this.window = true
    },
    changeLanguage (langCode) {
      this.$store.commit('changeLanguage', langCode)
    },
    onClose () { // 윈도우 닫기
      this.window = false
    }
  }
}
</script>

<style>
#main {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

#taskbar {
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  bottom: 0;
}

#taskbar button {
  cursor: pointer;
  width: 80px;
  height: 100%;
  color: #fff;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

#taskbar button:hover {
  background-color: rgba(0, 0, 0, 0.4);
}

#desktop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 50px;
  overflow-y: auto;
}

#shortcut-area {
  margin: auto;
  margin-top: 16rem;
  max-width: 32rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#time {
  line-height: 50px;
  width: 90px;
  height: 100%;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  float: right;
  background-color: rgba(0, 0, 0, 0.2);
}

.start {
  width: 45px;
  height: 45px;
  -ms-animation: fade 1s alternate infinite;
  -moz-animation: fade 1s alternate infinite;
  -o-animation: fade 1s alternate infinite;
  -webkit-animation: fade 1s alternate infinite;
  animation: fade 1s alternate infinite;
}

@keyframes fade {
  100% {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}

#menu {
  height: 40rem;
  width: 25rem;
  border-radius: 0px 10px 0px 0px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 50px;
  text-align: center;
}

#menu img {
  cursor: pointer;
  margin-top: 30%;
  border-radius: 50%;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

#menu img:hover {
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  #shortcut-area {
    margin-top: 10%;
  }

  #menu {
    border-radius: 0;
    height: 80%;
    width: 100%;
  }
}

.menu-language-text {
  color: #fff;
  margin-bottom: 16px;
}

.menu-language-btn {
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #fff;
  border-radius: 5px;
  outline: none;
  padding: 2px 6px;
  color: #fff;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.menu-language-btn:hover {
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
}
</style>
