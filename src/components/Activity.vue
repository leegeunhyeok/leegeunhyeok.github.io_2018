<template>
  <div id="activity">
    <div class="list-item" v-for="(item, index) in project" :key="index">
      <div class="list-title">{{ item[$store.state.language].name }}</div>
      <br>
      <div class="list-info">
        <b class="blue">{{ information }}</b>
        <div class="list-info-area">{{ item[$store.state.language].info }}</div>
      </div>
      <div class="list-info">
        <b class="blue">{{ date }}</b>
        <div class="list-info-area">{{ item.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from '@/models/Activity.js'

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
#activity {
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 0px 0px 5px 5px;
  overflow-y: auto;
  background-color: #eee;
}
</style>
