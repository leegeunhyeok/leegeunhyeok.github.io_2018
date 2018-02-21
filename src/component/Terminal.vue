<template>
  <div id="terminal">
    <div class="commend">
      <b class="terminal-user">leegeunhyeok@lgh-com</b>
      :~$ 
      <input type="text" v-model="commend" @keypress="onKeypress">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      terminal: null,
      commend: ''
    }
  },
  mounted() {
    this.terminal = document.getElementById('terminal');
  },
  methods: {
    onKeypress(e) {
      if(e.charCode === 13) {
        this.commendExecute();
      }
    },
    commendExecute() { // 커맨드 실행 
      const $commend = this.commend; // 입력한 커맨드를 변수에 저장하고
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

      // 입력한 명령어를 소문자로 변환 후 지정된 명령어에 알맞게 결과 생성
      switch($commend.toLowerCase()) {
        case 'help': {
          result.appendChild(document.createTextNode('help: 미구현'));
          break;
        }
        default: { // 해당 명령어가 없을 경우 
          result.appendChild(document.createTextNode($commend + ': commend not found'));
        }
      }
      this.terminal.insertBefore(result, this.terminal.lastChild); // 마지막 노드 앞에 결과 추가 (입력하는 영역이 항상 아래에 위치함)

      // TODO: Y 영역을 초과하면 스크롤바 + 아래로 스크롤
    }
  }
}
</script>

<style>
#terminal {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}

.terminal-user {
  color: lawngreen;
}

.commend input {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  color: #fff;
  font-size: 1rem;
}
</style>

