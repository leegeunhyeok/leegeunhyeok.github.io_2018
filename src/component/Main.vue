<template>
  <div id="main">
    <div id="desktop">
      <div id="shortcut-area">
        <shortcut :path="'dist/folder.png'">
          <div slot="shortcut-name">Projects</div>
        </shortcut>
        <shortcut :path="'dist/folder.png'">
          <div slot="shortcut-name">About me</div>
        </shortcut>
        <shortcut :path="'dist/folder.png'">
          <div slot="shortcut-name">Education</div>
        </shortcut>
        <shortcut :path="'dist/terminal.png'">
          <div slot="shortcut-name">Terminal</div>
        </shortcut>
        <shortcut :path="'dist/browser.png'">
          <div slot="shortcut-name">Browser</div>
        </shortcut>
        <shortcut :path="'dist/github.png'">
          <div slot="shortcut-name">Github</div>
        </shortcut>    
        <shortcut :path="'dist/email.png'">
          <div slot="shortcut-name">Email</div>
        </shortcut>
        <shortcut :path="'dist/info.png'">
          <div slot="shortcut-name">Information</div>
        </shortcut>    
      </div>
    </div>
    <div id="taskbar">
      <button><img class="start" src="../assets/start.png"></button>
      <div id="time">{{time}}</div>
    </div>
  </div>  
</template>

<script>
import Project from '../model/Project.js';
import Format from '../date-format.js';

import Shortcut from './Shortcut.vue';

export default {
  data () {
    return {
      process: [],
      format: Format,
      time: Format.getSimple(),
      projects: Project
    }
  },
  components: {
    'shortcut': Shortcut
  },
  created() {
    this.refreshTime();
  },
  methods: {
    refreshTime() {
      setInterval(() => {
        this.time = this.format.getSimple();
      }, 1000);
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

@media (max-width: 768px) {
  #shortcut-area {
    margin-top: 12%;
  }
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
</style>
