<template>
  <div id="browser">
    <div class="browser__browser-top">
      <input class="browser__browser-top__address-bar" type="text" value="https://google.com" disabled>
    </div>
    <div class="browser__google-image-area">
      <img class="browser__google-image-area__image"
        src="@/assets/google.png"
      >
    </div>
    <div class="browser__search-area">
      <input type="text" class="browser__search-area__input" v-model="keyword" @keypress="onKeypress">
      <input type="submit" class="browser__search-area__button" value="Search" @click="onSearch">
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

<style lang="scss">
@import "@/assets/style/common.scss";

#browser {
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 5px 5px;
  background-color: #fff;
  overflow: hidden;

  .browser__browser-top {
    display: flex;
    width: 100%;
    height: 6%;
    background-color: #eee;
    border-bottom: 1px solid gray;

    .browser__browser-top__address-bar {
      width: 100%;
      height: 60%;
      padding: 5px 10px;
      margin: 7px 5px;
      border-radius: 5px;
      border: 1px solid gray;
      font-weight: bold;
    }
  }

  .browser__google-image-area {
    width: 100%;
    background-color: #fff;
    text-align: center;

    .browser__google-image-area__image {
      width: 20rem;
      margin: 7rem 0 3rem 0;
    }
  }

  .browser__search-area {
    text-align: center;

    .browser__search-area__input {
      border: 1px solid lightgray;
      border-radius: 2px;
      outline: none;
      width: 16rem;
      height: 1.6rem;
      padding: 5px;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, .2);
      transition: $transition-duration;

      &:focus, &:hover {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, .4);
      }
    }

    .browser__search-area__button {
      cursor: pointer;
      outline: none;
      height: 1.8rem;
      border: none;
      border-radius: 5px;
      margin-left: 5px;
    }
  }
}

</style>
