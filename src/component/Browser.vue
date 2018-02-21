<template>
  <div id="browser">
    <div class="browser-top">
      <button @click="browserRefresh">
        <img src="../assets/refresh.png">
      </button>
      <input type="text" v-model="url" @keypress="changeUrl">
    </div>
    <iframe src="/" frameborder=0 id="iframe"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iframe: null,
      url: 'https://google.com/'
    }
  },
  mounted() {
    this.iframe = document.getElementById('iframe');
    this.iframe.src = this.url;
  },
  methods: {
    browserRefresh() {
      this.iframe.contentDocument.location.reload(true);
    },
    changeUrl(event) {
      if(event.charCode === 13) {
        this.httpCheck();
        this.iframe.src = this.url;
      }
    },
    httpCheck() {
      const url = this.url;
      const $http = 'http://';
      const $https = 'https://';

      if(url.indexOf($http) === -1 || url.indexOf($https) === -1) {
        this.url = 'http://' + this.url;
      }
    }
  }
}
</script>

<style>
#browser {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#browser iframe {
  width: 100%;
  height: 94%;
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

.go-btn {
  float: right;

}
</style>
