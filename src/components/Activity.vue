<template>
  <div id="activity">
    <div class="item" v-for="(item, index) in project" :key="index">
      <div class="item__title">{{ item[$store.state.language].name }}</div>
      <br>
      <div class="item__info">
        <b class="item__info__text--blue">{{ information }}</b>
        <div class="item__info__text">{{ item[$store.state.language].info }}</div>
      </div>
      <div class="item__info">
        <b class="item__info__text--blue">{{ date }}</b>
        <div class="item__info__text">{{ item.date }}</div>
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

<style lang="scss">

#activity {
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 5px 5px;
  background-color: #eee;
  text-align: center;
  overflow-y: auto;
}

</style>
