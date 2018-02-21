<template>
  <div id="main">
    <div id="desktop">
      <div id="shortcut-area">
        <shortcut-icon v-for="(item, index) in shortcut" :key="index" :path="item.image" @onClick="shortcutClick(index)">
          <div slot="shortcut-name">{{item.name}}</div>
        </shortcut-icon>
      </div>
      <transition name="fade" mode="in-out">
        <window-view @onClose="onClose" v-if="window" :data="data"></window-view>
      </transition>
    </div>
    <div id="taskbar">
      <button><img class="start" src="../assets/start.png" @click="showMenu = !showMenu"></button>
      <div id="time">{{time}}</div>
    </div>
    <transition name="fade" mode="in-out">
      <div id="menu" v-if="showMenu">
        <img src="../assets/poweroff.png">
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
      showMenu: false,
      window: false,
      data: {},
      format: Format,
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
    this.refreshTime();
  },
  methods: {
    refreshTime() {
      setInterval(() => {
        this.time = this.format.getSimple();
      }, 1000);
    },
    shortcutClick(n) {
      if(n === 0 || n === 1 || n === 2 || n === 4 || n === 7) {
        this.showWindow(n);
      } else if(n === 3) {
        this.showTerminal();
      } else if(n === 5) {
        window.open('https://github.com/leegeunhyeok');
      } else {
        window.open('mailto:lghlove0509@naver.com');
      }
    },
    showWindow(n) {
      var content = null;
      this.data = {'title':this.shortcut[n].name, 'content':content};
      this.window = true;
    },
    showTerminal(n) {
      
    },
    onClose() {
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
