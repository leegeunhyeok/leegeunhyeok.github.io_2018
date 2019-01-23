<template>
  <div id="main">
    <div class="desktop">
      <div class="shortcut-area">
        <div class="shortcut-wrap">
          <shortcut-icon v-for="(item, index) in shortcut"
            :key="index"
            :path="item.image"
            @onClick="shortcutClick(index)"
          >
            <div slot="shortcut-name">
              {{ item[$store.state.language + '-name'] }}
            </div>
          </shortcut-icon>
        </div>
      </div>
      <transition name="fade" mode="in-out">
        <window-view v-if="window"
          :data="data"
          :type="type"
          @onClose="onClose"
          @shutdown="$emit('onPoweroff')"
        />
      </transition>
    </div>
    <div class="task-bar">
      <button class="task-bar__menu-button">
        <img class="task-bar__menu-button--start" src="@/assets/start.png" @click="showMenu = !showMenu">
      </button>
      <div class="task-bar__time">{{ time }}</div>
    </div>
    <transition name="fade" mode="in-out">
      <div class="start-menu" v-if="showMenu">
        <img class="start-menu__power-image" src="@/assets/poweroff.png" @click="$emit('onPoweroff')">
        <b class="start-menu__power-off-text">{{ powerOff }}</b>
        <div class="start-menu__language-button-area">
          <div class="start-menu__language-button-area__text">{{ changeLang }}</div>
          <button class="start-menu__language-button-area__change-button"
            @click="changeLanguage()"
          >{{ willChangeLanguage }}</button>
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
      shortcut: Shortcut,
      interval: null
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
    },
    willChangeLanguage () {
      return this.$store.state.language === 'en' ? 'Korean' : '영어'
    }
  },
  created () {
    this.refreshTime()
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  methods: {
    refreshTime () {
      this.interval = setInterval(() => {
        // 매 초마다 시간 갱신
        this.time = this.format.getSimple(null, this.$store.state.language)
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
    changeLanguage () {
      this.$store.commit('changeLanguage', this.$store.state.language === 'en' ? 'kr' : 'en')
    },
    onClose () { // 윈도우 닫기
      this.window = false
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/common.scss";

#main {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .desktop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    overflow-y: auto;

    .shortcut-area {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      .shortcut-wrap {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        max-width: 36rem;
        padding: 1rem;
      }
    }
  }

  .task-bar {
    width: 100%;
    height: 50px;
    background-color: rgba(0, 0, 0, .3);
    position: absolute;
    left: 0;
    bottom: 0;

    .task-bar__menu-button {
      cursor: pointer;
      width: 80px;
      height: 100%;
      color: #fff;
      border: none;
      outline: none;
      font-weight: bold;
      font-size: 1rem;
      background-color: rgba(0, 0, 0, .2);
      -webkit-transition: $transition-duration;
         -moz-transition: $transition-duration;
          -ms-transition: $transition-duration;
           -o-transition: $transition-duration;
              transition: $transition-duration;

      &:hover {
        background-color: rgba(0, 0, 0, .4);
      }

      .task-bar__menu-button--start {
        width: 45px;
        height: 45px;
        -webkit-animation: breath 1s alternate infinite;
           -moz-animation: breath 1s alternate infinite;
            -ms-animation: breath 1s alternate infinite;
             -o-animation: breath 1s alternate infinite;
                animation: breath 1s alternate infinite;
      }
    }

    .task-bar__time {
      width: 90px;
      height: 100%;
      color: #fff;
      line-height: 50px;
      text-align: center;
      font-size: 1rem;
      float: right;
      background-color: rgba(0, 0, 0, .2);
    }
  }

  .start-menu {
    position: absolute;
    left: 0;
    bottom: 50px;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    text-align: center;

    @media only screen and (min-width: 320px), (min-width: 768px) {
      border-radius: 0;
      height: 100%;
      width: 100%;
    }

    @media only screen and (min-width: 1224px) {
      width: 25rem;
      height: 40rem;
      border-top-right-radius: 10px;
    }

    .start-menu__power-image {
      cursor: pointer;
      margin-bottom: 2rem;
      border-radius: 50%;
      -webkit-transition: $transition-duration;
         -moz-transition: $transition-duration;
          -ms-transition: $transition-duration;
           -o-transition: $transition-duration;
              transition: $transition-duration;

      @media only screen and (min-width: 320px), (min-width: 768px) {
        margin-top: 50%;
      }

      @media only screen and (min-width: 1224px) {
        margin-top: 40%;
      }

      &:hover {
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
        -webkit-transform: scale(1.1);
           -moz-transform: scale(1.1);
            -ms-transform: scale(1.1);
             -o-transform: scale(1.1);
                transform: scale(1.1);
      }
    }

    .start-menu__power-off-text {
      display: block;
    }

    .start-menu__language-button-area {

      .start-menu__language-button-area__text {
        color: #fff;
        margin-bottom: 16px;
      }

      .start-menu__language-button-area__change-button {
        cursor: pointer;
        outline: none;
        border: 1px solid #fff;
        border-radius: 5px;
        padding: 2px 6px;
        color: #fff;
        background-color: transparent;
        -webkit-transition: $transition-duration;
           -moz-transition: $transition-duration;
            -ms-transition: $transition-duration;
             -o-transition: $transition-duration;
                transition: $transition-duration;

        &:hover {
          box-shadow: 0px 0px 10px rgba(255, 255, 255, .5);
        }
      }
    }
  }
}

@keyframes breath {
  100% {
    -webkit-transform: scale(1.1);
       -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
         -o-transform: scale(1.1);
            transform: scale(1.1);
  }
}

</style>
