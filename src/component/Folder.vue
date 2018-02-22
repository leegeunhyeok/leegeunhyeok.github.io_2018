<template>
  <div id="folder">
    <div class="list-item" v-for="(item, index) in data.content" :key="index">
      <div class="list-title">{{item[lang].name}}</div>
      <img :src="item.image" class="list-image">
      <div class="list-title">{{item.lang}}</div>
      <div class="list-info"><b>Information: </b>{{item[lang].info}}</div>
      <div class="list-info"><b>Date: </b>{{item.date}}</div>
      <button @click="showPage(item.link)">{{more}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'lang'],
  computed: {
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
#folder {
  width: 100%;
  height: 100%;
  text-align: center;
  overflow-y: auto;
  background-color: #eee;
  overflow-y: auto;
}

.list-item {
  width: 100%;
  border-bottom: 2px solid lightgray;
}

.list-item button {
  cursor: pointer;
  border: none;
  outline: none;
  margin-bottom: 20px;
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
}

.list-image {
  width: 50%;
  height: 30%;
  border: 1px solid gray;
  border-radius: 10px;
}

.list-info {
  margin: 10px 0px;
}
</style>
