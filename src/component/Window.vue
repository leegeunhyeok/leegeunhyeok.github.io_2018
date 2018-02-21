<template>
  <div id="window">
    <title-bar @onClose="$emit('onClose')" :title="data.title"></title-bar>
    <div class="content-area">
      <transition name="fade" mode="out-in">
        <folder-view v-if="type === 0" :data="data"></folder-view>
        <terminal-view v-else-if="type === 1"></terminal-view>
        <browser-view v-else-if="type === 2"></browser-view>
        <information-view v-else></information-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Title from './TitleBar.vue';

import Folder from './Folder.vue';
import Terminal from './Terminal.vue';
import Browser from './Browser.vue';
import Information from './Information.vue';

export default {
  props: ['data', 'type'], // type: 0(폴더), 1(터미널), 2(브라우저), 3(정보)
  components: {
    'title-bar': Title,
    'folder-view': Folder,
    'terminal-view': Terminal,
    'browser-view': Browser,
    'information-view': Information
  }
}
</script>

<style>
#window {
  margin: 0;
  padding: 0;
  width: 45rem;
  height: 30rem;
  position: absolute;
  margin: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  left: 50%; 
  transform:translateX(-50%);
  top: 20%;
}

@media (max-width: 768px) {
  #window {
    width: 90%;
    height: 96%;
    top: 2%;
  }
}

.content-area {
  position: absolute;
  top: 30px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
}
</style>
