<template>
  <div id="project">
    <div class="item" v-for="(item, index) in project" :key="index">
      <div class="item__title">{{ item[$store.state.language].name }}</div>
      <img class="item__image" :src="item.image">
      <div class="item__used-language">{{ item.lang }}</div>
      <div class="item__info">
        <b class="item__info__text--blue">{{ information }}</b>
        <div class="item__info__text">{{ item[$store.state.language].info }}</div>
        <div class="item__info__text">{{ item[$store.state.language].disc }}</div>
      </div>
      <div class="item__info">
        <b class="item__info__text--blue">{{ date }}</b>
        <div class="item__info__text">{{ item.date }}</div>
      </div>
      <button class="item__more-button"
        @click="showPage(item.link)"
      >{{ more }}</button>
    </div>
  </div>
</template>

<script>
import Project from '@/models/Project.js'

export default {
  data () {
    return {
      project: Project
    }
  },
  computed: {
    information () {
      return this.$store.state.language === 'en' ? 'Information' : '정보'
    },
    date () {
      return this.$store.state.language === 'en' ? 'Date' : '날짜'
    },
    more () {
      return this.$store.state.language === 'en' ? 'More' : '더 보기'
    }
  },
  methods: {
    showPage (url) {
      if (url) {
        window.open(url)
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
