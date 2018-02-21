<template>
  <div id="boot">
    <div id="console">
      <img class="boot-image" src="../assets/start.png">
      <div class="console-text">Leegeunhyeok's Portfolio [Dev-start 2018/02/20]</div>
      <div class="console-text">Copyright 2018 Leegeunhyeok.</div>
      <div class="console-text">All Rights Reserved</div>
      <div class="console-text">Last build: <b>2018/02/22</b></div>
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
        }, 500 + index*100); // 100ms 간격으로 글자 출력
      });
    },
    printEnd() { // 모든 글자가 출력되었으면 2.5초 뒤 부모에게 bootEnd 이벤트 emit
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

.boot-image {
  animation: turn 2s infinite;
}

@keyframes turn {
  0% {
    transform: rotate(0.0deg);
  }

  100% {
    transform: rotate(360.0deg);
  }
}
</style>
