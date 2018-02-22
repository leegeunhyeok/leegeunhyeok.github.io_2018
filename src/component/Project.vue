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
  overflow-y: auto;
  background-color: #eee;
}

.list-item {
  width: 90%;
  margin: 20px auto;
  padding: 20px 0;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.list-item button {
  margin-top: 10px;
  cursor: pointer;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px gray;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.list-item button:hover {
  box-shadow: 1px 1px 10px gray;
  -ms-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


.list-title {
  margin: 10px 0px;
  font-size: 1.5rem;
  font-weight: bold;
  color: dodgerblue;
}

.list-lang {
  color: gray;
  padding: 0px;
  margin: 10px 0px;
  font-size: 1.5rem;
  font-weight: bold;
}

.list-image {
  width: 50%;
  height: 30%;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
}

.list-info {
  margin: 10px 0px;
}

.list-info-area {
  padding: 5px; 
}

@media (max-width: 768px) {
  .list-image {
    width: 80%;
    height: 50%;
  }
}

.blue {
  color: dodgerblue;
}
</style>
