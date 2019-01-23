<template>
  <div id="terminal">
    <div class="terminal__command-area">
      <div class="terminal__command-area__command">
        <b class="terminal__command-area__command--user">leegeunhyeok@lgh-com</b>:~$
        <input class="terminal__command-area__command__input"
          type="text"
          ref="input"
          @keypress="onKeypress"
          v-model="command"
        >
      </div>
    </div>
  </div>
</template>

<script>
import Language from '../language/TerminalLanguage.js'

export default {
  data () {
    return {
      language: Language,
      terminal: null,
      command: '',
      version: '0.0.0',
      terminalVersion: '0.0.0'
    }
  },
  created () {
    const buildDate = new Date($BUILD$)
    const month = buildDate.getMonth() + 1
    const date = buildDate.getDate()
    const year = buildDate.getFullYear()
    this.terminalVersion = `${month}.${('' + date).length === 1 ? '0' + date : date}.${year}`
    this.version = $VERSION$
  },
  mounted () {
    this.terminal = document.getElementById('terminal')
    this.$refs.input.focus()
  },
  methods: {
    onKeypress (e) {
      if (e.charCode === 13 && this.command.length) {
        this.commandExecute()
      }
    },
    commandExecute () { // 커맨드 실행
      const $command = this.command.toLowerCase() // 입력한 커맨드를 변수에 저장하고
      this.command = '' // 빈칸으로 변경

      // 결과 엘리먼트
      var result = document.createElement('div')
      result.classList.add('terminal__command-area')

      var user = document.createElement('b')
      user.classList.add('terminal__command-area__command--user')
      user.appendChild(document.createTextNode('leegeunhyeok@lgh-com'))

      result.appendChild(user) // 사용자 이름 영역 추가
      result.appendChild(document.createTextNode(':~$ ' + $command)) // 입력한 명령어 추가
      result.appendChild(document.createElement('br')) // 한칸 개행

      // 명령어 분기
      if ($command === 'help') {
        this.helpcommand(result)
      } else if ($command.indexOf('lang') !== -1) { // lang
        if ($command.indexOf('-en') !== -1) { // -en 옵션
          this.$store.commit('changeLanguage', 'en')
          result.appendChild(document.createTextNode(this.language['en'].langchange))
          result.appendChild(document.createElement('br'))
        } else if ($command.indexOf('-kr') !== -1) { // -kr 옵션
          this.$store.commit('changeLanguage', 'kr')
          result.appendChild(document.createTextNode(this.language['kr'].langchange))
          result.appendChild(document.createElement('br'))
        } else { // lang ?? 알수없는 옵션
          result.appendChild(document.createTextNode('E: Option type error!'))
          result.appendChild(document.createElement('br'))
          result.appendChild(document.createTextNode('lang [-kr, -en]'))
          result.appendChild(document.createElement('br'))
          result.appendChild(document.createElement('br'))
          result.appendChild(document.createTextNode('eg. lang -kr'))
        }
      } else if ($command === 'whoami') {
        result.appendChild(document.createTextNode(this.language[this.$store.state.language].name))
        result.appendChild(document.createElement('br'))
        result.appendChild(document.createTextNode(this.language[this.$store.state.language].email))
        result.appendChild(document.createElement('br'))
        result.appendChild(document.createTextNode(this.language[this.$store.state.language].intro))
        result.appendChild(document.createElement('br'))
      } else if ($command === 'date') {
        result.appendChild(document.createTextNode(new Date()))
      } else if ($command === 'shutdown') {
        this.$emit('shutdown')
        return
      } else if ($command === 'exit') {
        this.$emit('onClose')
        return
      } else {
        result.appendChild(document.createTextNode($command + ': ' + this.language[this.$store.state.language].notfound))
        result.appendChild(document.createElement('br'))
      }

      this.terminal.insertBefore(result, this.terminal.lastChild) // 마지막 노드 앞에 결과 추가 (입력하는 영역이 항상 아래에 위치함)
      this.autoScroll()
      this.$refs.input.focus()
    },
    autoScroll () { // 자동 스크롤
      var terminal = document.getElementById('terminal')
      terminal.scrollTop = terminal.scrollHeight
    },
    helpcommand (el) {
      el.appendChild(document.createTextNode('Lgh\'s pc terminal'))
      el.appendChild(document.createElement('br'))
      el.appendChild(document.createTextNode(`Terminal, version ${this.terminalVersion} (web ${this.version})`))
      el.appendChild(document.createElement('br'))
      el.appendChild(document.createElement('br'))
      el.appendChild(document.createTextNode('help - show all commands'))
      el.appendChild(document.createElement('br'))
      el.appendChild(document.createTextNode('whoami - show information about leegeunhyeok'))
      el.appendChild(document.createElement('br'))
      el.appendChild(document.createTextNode('date - show current time'))
      el.appendChild(document.createElement('br'))
      el.appendChild(document.createTextNode('lang [-en] [-kr] - change language(eg. lang -kr)'))
      el.appendChild(document.createElement('br'))
      el.appendChild(document.createTextNode('shutdown - power off'))
      el.appendChild(document.createElement('br'))
      el.appendChild(document.createTextNode('exit - close terminal'))
      el.appendChild(document.createElement('br'))
    }
  }
}
</script>

<style lang="scss">

#terminal {
  width: 100%;
  height: 100%;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0px 0px 5px 5px;
  overflow-y: auto;

  .terminal__command-area {
    padding: 0 5px;
    color: #fff;

    .terminal__command-area__command--user {
      color: lawngreen;
    }

    .terminal__command-area__command {

      input {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.2);
        color: #fff;
        font-size: 1rem;
        padding: 2px 5px;
      }
    }
  }
}

</style>
