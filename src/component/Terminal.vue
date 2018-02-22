<template>
  <div id="terminal-background">
    <div id="terminal">
      <div class="commend">
        <b class="terminal-user">leegeunhyeok@lgh-com</b>
        :~$ 
        <input type="text" v-model="commend" @keypress="onKeypress" id="terminal-input">
      </div>
    </div>
  </div>
</template>

<script>
import Language from '../language/TerminalLanguage.js';

export default {
  props: ['lang'],
  data() {
    return {
      language: Language,
      terminal: null,
      commend: ''
    }
  },
  mounted() {
    this.terminal = document.getElementById('terminal');
    document.getElementById('terminal-input').focus();
  },
  methods: {
    onKeypress(e) {
      if(e.charCode === 13 && this.commend.length) {
        this.commendExecute();
      }
    },
    commendExecute() { // 커맨드 실행 
      const $commend = this.commend.toLowerCase(); // 입력한 커맨드를 변수에 저장하고
      this.commend = ''; // 빈칸으로 변경

      // 결과 엘리먼트 
      var result = document.createElement('div');
      result.classList.add('commend'); // 클래스 적용

      var user = document.createElement('b');
      user.classList.add('terminal-user');
      user.appendChild(document.createTextNode('leegeunhyeok@lgh-com'));
      
      result.appendChild(user); // 사용자 이름 영역 추가 
      result.appendChild(document.createTextNode(' :~$ ' + $commend)); // 입력한 명령어 추가 
      result.appendChild(document.createElement('br')); // 한칸 개행 

      // 명령어 분기 
      if($commend === 'help') { 
        this.helpCommend(result)
      } else if($commend.indexOf('lang') !== -1) { // lang
        if($commend.indexOf('-en') !== -1) { // -en 옵션
          this.$emit('changeLanguage', 'en'); 
          result.appendChild(document.createTextNode(this.language['en'].langchange));
          result.appendChild(document.createElement('br'));
        } else if($commend.indexOf('-kr') !== -1) { // -kr 옵션
          this.$emit('changeLanguage', 'kr');
          result.appendChild(document.createTextNode(this.language['kr'].langchange));
          result.appendChild(document.createElement('br'));
        } else { // lang ?? 알수없는 옵션
          result.appendChild(document.createTextNode('E: Option type error!'));
          result.appendChild(document.createElement('br'));
          result.appendChild(document.createTextNode('lang [-kr, -en]'));
          result.appendChild(document.createElement('br'));
          result.appendChild(document.createElement('br'));
          result.appendChild(document.createTextNode('eg. lang -kr'));
        }
      } else if($commend === 'whoami') {
        result.appendChild(document.createTextNode(this.language[this.lang].name));
        result.appendChild(document.createElement('br'));
        result.appendChild(document.createTextNode(this.language[this.lang].email));
        result.appendChild(document.createElement('br'));
        result.appendChild(document.createTextNode(this.language[this.lang].intro));
        result.appendChild(document.createElement('br'));
      } else if($commend === 'date') {
        result.appendChild(document.createTextNode(new Date()));
      } else if($commend === 'shutdown') {
        this.$emit('shutdown'); 
        return;
      } else if($commend === 'exit') {
        this.$emit('close'); 
        return;
      } else {
        result.appendChild(document.createTextNode(this.language[this.lang].notfound));
        result.appendChild(document.createElement('br'));
      }

      this.terminal.insertBefore(result, this.terminal.lastChild); // 마지막 노드 앞에 결과 추가 (입력하는 영역이 항상 아래에 위치함)
      this.autoScroll();
      document.getElementById('terminal-input').focus();
    },
    autoScroll() { // 자동 스크롤 
      var terminal = document.getElementById('terminal-background');
      terminal.scrollTop = terminal.scrollHeight;
    },
    helpCommend(el) {
      el.appendChild(document.createElement('br'));
      el.appendChild(document.createTextNode('Lgh\'s pc terminal'));
      el.appendChild(document.createElement('br'));
      el.appendChild(document.createTextNode('Version 2.22.2018'));
      el.appendChild(document.createElement('br'));
      el.appendChild(document.createElement('br'));
      el.appendChild(document.createTextNode('help - show all commends'));
      el.appendChild(document.createElement('br'));
      el.appendChild(document.createTextNode('whoami - show information about leegeunhyeok'));
      el.appendChild(document.createElement('br'));
      el.appendChild(document.createTextNode('date - show current time'));
      el.appendChild(document.createElement('br'));
      el.appendChild(document.createTextNode('lang [-en, -kr] - change language(eg. lang -kr)'));
      el.appendChild(document.createElement('br'));
      el.appendChild(document.createTextNode('shutdown - power off'));
      el.appendChild(document.createElement('br'));
      el.appendChild(document.createTextNode('exit - close terminal'));
      el.appendChild(document.createElement('br'));
      el.appendChild(document.createElement('br'));
    }
  }
}
</script>

<style>
#terminal-background {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: auto;
}

#terminal {
  padding: 0 5px;
  color: #fff;
}

.terminal-user {
  color: lawngreen;
}

.commend input {
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 5px;
  outline: none;
  color: #fff;
  font-size: 1rem;
}
</style>

