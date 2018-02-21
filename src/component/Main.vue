<template>
  <div id="main">
    <div id="desktop">
      <shortcut :path="'../assets/logo.png'">
        <div slot="shortcut-name">AA</div>
      </shortcut>
      <shortcut :path="'../assets/logo.png'">
        <div slot="shortcut-name">AA</div>
      </shortcut>
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
      format: Format,
      time: Format.getSimple()
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
  width: 100%;
  height: 100%;
  position: relative;
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
}

#taskbar button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

#desktop {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
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
