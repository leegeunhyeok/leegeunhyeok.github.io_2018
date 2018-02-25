<template>
  <div id="changelog">
    <div class="list-item" v-for="(item, index) in changelog" :key="index">
      <div class="list-build">{{item.build}}</div>
      <div class="list-info" v-for="log in item[lang]" :key="log">
        <div class="list-info-area information-text">{{log}}</div>
      </div>
    </div>
    <button class="info-area-btn" @click="$emit('onBack')">Back</button>
  </div>
</template>

<script>
import Changelog from '../model/Changelog.js';

export default {
  props: ['lang'],
  data() {
    return {
      changelog: Changelog
    }
  }
}
</script>

<style>
#information {
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 0px 0px 5px 5px;
  overflow-y: auto;
  background-color: #eee;
}

#information img {
  margin: 20px 0px;
  width: 10rem;
}

.list-build {
  color: dodgerblue;
  font-weight: bold;
  font-size: 1.4rem;
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
