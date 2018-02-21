<template>
  <div id="boot">
    <div id="console">
      <img src="../assets/start.png">
      <div class="console-text">Leegeunhyeok's Portfolio [Dev-start 2018/02/20]</div>
      <div class="console-text">Copyright 2018 Leegeunhyeok.</div>
      <div class="console-text">All Rights Reserved</div>
      <div class="console-text">Last build: <b>2018/02/20</b></div>
      <br>
    </div>
  </div>
</template>

<script>

// 콘솔에 출력할 메시지(공백: br 태그)
const $messages = [
  'Link - https://leegeunhyeok.github.io/',
  'Github - leegeunhyeok',
  'Email - lghlove0509@naver.com',
  'More information -> After booting',
  '',
  'user: Leegeunhyeok',
  'password:',
  '',
  '',
  'Pleage wait...'
];

export default {
  data () {
    return {
      $console: null,
      messages: $messages
    }
  },
  mounted() {
    this.$console = document.getElementById('console');
    this.printMessage();
  },
  methods: {
    printMessage() {
      this.messages.forEach((message, index) => {
        setTimeout(() => {
          var el;
          if(message) {
            el = document.createElement('div');
            el.appendChild(document.createTextNode(message));
            el.classList.add('console-text');
          } else {
            el = document.createElement('br');
          }
          this.$console.appendChild(el);

          if(this.messages.length-1 === index) {
            this.printEnd();
          }
        }, 500 + index*100);
      });
    },
    printEnd() {
      setTimeout(() => {
        this.$emit('bootEnd');
      }, 2500)
    }
  }
}
</script>

<style>
#boot {
  font-family: "consolas";
  width: 100%;
  height: 100%;
  background-color: #000;
}

#console {
  padding: 10px;
}

.console-text {
  color: #fff;
  font-size: 0.9rem;
}
</style>
