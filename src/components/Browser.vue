<template>
  <div id="browser">
    <div class="browser-top">
      <button>
        <img src="../assets/refresh.png">
      </button>
      <input type="text" value="https://google.com" disabled>
    </div>
    <div class="google">
      <img src="../assets/google.png">
      <div class="browser-input-area">
        <input type="text" class="browser-input" v-model="keyword" @keypress="onKeypress">
        <input type="submit" class="browser-search" value="Search" @click="onSearch">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    onKeypress (e) {
      if (e.charCode === 13) { // 엔터키
        this.onSearch()
      }
    },
    onSearch () { // 검색
      if (this.keyword.length) {
        window.open('https://google.com/search?q=' + this.keyword) // 구글 검색창 띄우기
      }
    }
  }
}
</script>

<style>
#browser {
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 5px 5px;
  overflow: hidden;
}

.browser-top {
  width: 100%;
  height: 6%;
  background-color: #eee;
  border-bottom: 1px solid gray;
  display: flex;
}

.browser-top button {
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
}

.browser-top input {
  width: 70%;
  height: 60%;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 2px 10px;
  font-weight: bold;
  margin-top: 2px;
}

.google {
  width: 100%;
  height: 94%;
  background-color: #fff;
  text-align: center;
}

.google img {
  width: 20rem;
  height: 10rem;
  margin: 5rem 0px 3rem 0px;
}

.browser-input-area {
  position: relative;
}

.browser-input {
  border: 1px solid lightgray;
  border-radius: 2px;
  outline: none;
  width: 16rem;
  height: 1rem;
  padding: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.browser-search {
  border: none;
  border-radius: 5px;
  height: 1.8rem;
}

.google input:focus {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
}

.google input:hover {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
}
</style>
