<template>
  <div id="main">
    <div id="desktop">
      <div id="shortcut-area">
        <shortcut-icon v-for="(item, index) in shortcut" :key="index" :path="item.image" @onClick="shortcutClick(index)">
          <div slot="shortcut-name">{{item.name}}</div>
        </shortcut-icon>
      </div>
      <transition name="fade" mode="in-out">
        <window-view @onClose="onClose" v-if="window" :data="data" :type="type"></window-view>
      </transition>
    </div>
    <div id="taskbar">
      <button><img class="start" src="../assets/start.png" @click="showMenu = !showMenu"></button>
      <div id="time">{{time}}</div>
    </div>
    <transition name="fade" mode="in-out">
      <div id="menu" v-if="showMenu">
        <img src="../assets/poweroff.png" @click="$emit('onPoweroff')">
        <br>
        <b>Power Off</b>
      </div>
    </transition>
  </div>  
</template>

<script>
import Project from '../model/Project.js';
import Shortcut from '../model/Shortcut.js';
import Format from '../date-format.js';

import ShortcutComponent from './Shortcut.vue';
import WindowComponent from './Window.vue';

export default {
  data () {
    return {
      showMenu: false, // 시작메뉴 Show
      window: false, // 단축 아이콘 클릭시 윈도우 띄우기 
      data: {}, // 폴더에서 보여줄 데이터
      type: 0, // 단축아이콘 타입(기본 윈도우, 브라우저, 정보)
      format: Format, // 시간포맷 변환객체 
      time: Format.getSimple(),
      project: Project,
      shortcut: Shortcut
    }
  },
  components: {
    'shortcut-icon': ShortcutComponent,
    'window-view': WindowComponent
  },
  created() {
    this.refreshTime(); // 1초에 한번씩 자동 갱신됨
  },
  methods: {
    refreshTime() {
      setInterval(() => {
        this.time = this.format.getSimple(); // 1초마다 시간 불러오기 
      }, 1000);
    },
    shortcutClick(n) { // 단축아이콘 클릭 (0~7)
      if(n !== 5 && n !== 6) {
        this.showWindow(n); // 5, 6이 아니면 윈도우 띄우기 
      } else if(n === 5) {
        window.open('https://github.com/leegeunhyeok'); // 깃허브 새창으로 열기 
      } else {
        window.open('mailto:lghlove0509@naver.com'); // 메일 프로그램 연결 
      }
    },
    showWindow(n) {
      if(n === 0 || n === 1 || n === 2) { // 폴더 
        this.type = 0;
      } else if(n === 3) { // 터미널 
        this.type = 1;
      } else if(n === 4) { // 브라우저 
        this.type = 2;
      } else { // 정보 
        this.type = 3;
      }
      var content = null;
      this.data = {'title':this.shortcut[n].name, 'content':content};
      this.window = true;
    },
    onClose() { // 윈도우 닫기
      this.window = false;
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
  background-color: rgba(0, 0, 0, 0);
  transition: 0.5s;
  z-index: 9999;
}

#taskbar button:hover {
  background-color: rgba(0, 0, 0, 0.2);
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
}

.start {
  width: 45px;
  height: 45px;
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
  transition: 0.5s;
}

#menu img:hover {
  transform: scale(1.2); 
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  #shortcut-area {
    margin-top: 12%;
  }

  #menu {
    border-radius: 0;
    height: 80%;
    width: 100%;
  }
}
</style>
