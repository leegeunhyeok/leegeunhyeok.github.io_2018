<template>
  <div id="cover">
    <div class="user-area">
      <img :src="'dist/lgh.png'" class="user-image">
      <p class="user-name">{{language[lang].user}}</p>
    </div>
    <div class="button-area">
      <transition name="fade" mode="out-in">
        <button @click="onLogin" v-if="!login">{{language[lang].login}}</button>
        <div class="loading-area" v-else>{{language[lang].hello}}</div>
      </transition>
    </div>
    <div class="time-area">
      <div id="login-time">{{time}}<b class="ap">{{ap}}</b></div>
      <div id="login-date">{{date}}</div>
    </div>
  </div>  
</template>

<script>
import Language from '../language/LoginLanguage.js';
import Format from '../date-format.js'

export default {
  props: ['lang'],
  data () {
    return {
      language: Language,
      login: false,
      format: Format,
      time: Format.getTime(null, this.lang),
      date: Format.getDate(null, this.lang),
      ap: Format.getAp(null, this.lang)
    }
  },
  created() {
    this.refreshTime();
  },
  methods: {
    refreshTime() { // 시간과 날짜 1초마다 갱신
      setInterval(() => {
        this.time = this.format.getTime(null, this.lang);
        this.date = this.format.getDate(null, this.lang);
        this.ap = this.format.getAp(null, this.lang);
      }, 1000);
    },
    onLogin() { // 2.5초 후 부모에게 onLogin 이벤트 emit 
      this.login = true;
      setTimeout(() => {
        this.$emit('onLogin');
      }, 2500);
    }
  }
}
</script>

<style>
#cover {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
}

.user-area {
  width: 100%;
  margin-top: 10%;
  text-align: center;
}

.user-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid #fff;
  background-color: #fff;
}

.user-name {
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
}

.button-area {
  width: 100%;
  margin-top: 50px;
  text-align: center;
}

.button-area button {
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  color: #fff;
  font-weight: bold;
  padding: 10px 20px;
  transition: 0.5s;
}

.button-area button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: #eee;
}

.time-area {
  margin: 20px;
  color: #fff;
  position: absolute;
  bottom: 0px;
}

#login-time {
  font-weight: bold;
  font-size: 4rem;
}

#login-date {
  font-size: 1.5rem;
}

.ap {
  margin-left: 10px;
  font-size: 1.5rem;
}

.loading-area {
  width: 100%;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
}
</style>
