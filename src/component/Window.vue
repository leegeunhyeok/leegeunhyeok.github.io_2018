<template>
  <div id="window">
    <title-bar @onClose="$emit('onClose')" :title="data.title"></title-bar>
    <div class="content-area">
      <transition name="fade" mode="out-in">
        <project-view v-if="type === 0" :lang="lang"></project-view>
        <aboutme-view v-else-if="type === 1" :lang="lang"></aboutme-view>
        <activity-view v-else-if="type === 2" :lang="lang"></activity-view>
        <terminal-view v-else-if="type === 3" :lang="lang" @changeLanguage="$emit('changeLanguage', $event)" @shutdown="$emit('shutdown')" @close="$emit('close')"></terminal-view>
        <browser-view v-else-if="type === 4"></browser-view>
        <information-view v-else :lang="lang"></information-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Title from './TitleBar.vue';

import Project from './Project.vue';
import About from './AboutMe.vue';
import Activity from './Activity.vue';
import Terminal from './Terminal.vue';
import Browser from './Browser.vue';
import Information from './Information.vue';

export default {
  props: ['data', 'type', 'lang'], // type: 0(폴더), 1(터미널), 2(브라우저), 3(정보)
  components: {
    'title-bar': Title,
    'project-view': Project,
    'aboutme-view': About,
    'activity-view': Activity,
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
