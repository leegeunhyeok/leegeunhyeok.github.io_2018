<template>
  <div id="project">
    <div class="list-item" v-for="(item, index) in project" :key="index">
      <div class="list-title">{{item[lang].name}}</div>
      <img :src="item.image" class="list-image">
      <div class="list-lang">{{item.lang}}</div>
      <div class="list-info">
        <b class="blue">{{information}}</b>
        <div class="list-info-area">{{item[lang].info}}</div>
        <div class="list-info-area">{{item[lang].disc}}</div>
      </div>
      <div class="list-info">
        <b class="blue">{{date}}</b>
        <div class="list-info-area">{{item.date}}</div>
      </div>
      <button @click="showPage(item.link)">{{more}}</button>
    </div>
  </div>
</template>

<script>
import Project from '../model/Project.js';

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
    },
    more() {
      return this.lang === 'en' ? 'More':'더 보기';
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
#project {
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 0px 0px 5px 5px;
  overflow-y: auto;
  background-color: #eee;
}
</style>
