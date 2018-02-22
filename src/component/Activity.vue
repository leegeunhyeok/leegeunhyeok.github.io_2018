<template>
  <div id="activity">
    <div class="list-item" v-for="(item, index) in project" :key="index">
      <div class="list-title">{{item[lang].name}}</div>
      <br>
      <div class="list-info">
        <b class="blue">{{information}}</b>
        <div class="list-info-area">{{item[lang].info}}</div>
      </div>
      <div class="list-info">
        <b class="blue">{{date}}</b>
        <div class="list-info-area">{{item.date}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from '../model/Activity.js';

export default {
  props: ['lang'],
  data() {
    return {
      project: Project
    }
  },
  computed: {
    information() {
      return this.lang === 'en' ? 'Information':'정보';
    },
    date() {
      return this.lang === 'en' ? 'Date':'날짜';
    }
  },
  methods: {
    showPage(url) {
      if(url) {
        window.open(url);
      }
    }
  }
}
</script>

<style>
#activity {
  width: 100%;
  height: 100%;
  text-align: center;
  overflow-y: auto;
  background-color: #eee;
}
</style>
