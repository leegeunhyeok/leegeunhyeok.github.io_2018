<template>
  <div id="login">
    <div class="login__user-profile">
      <img src="../assets/lgh.png" class="login__user-profile__image">
      <p class="login__user-profile__name">{{ language[$store.state.language].user }}</p>
    </div>
    <div class="login__button-area">
      <transition name="fade" mode="out-in">
        <button class="login__button-area__button"
          @click="onLogin" v-if="!login"
        >
          {{ language[$store.state.language].login }}
        </button>
        <div class="login__button-area__message" v-else>{{ language[$store.state.language].hello }}</div>
      </transition>
    </div>
    <div class="login__time-area">
      <div class="login__time-area--time">
        {{ time }}
        <b class="login__time-area--ap">{{ ap }}</b>
      </div>
      <div class="login__time-area--date">{{ date }}</div>
    </div>
  </div>
</template>

<script>
import Language from '@/language/LoginLanguage.js'
import Format from '@/date-format.js'

export default {
  data () {
    return {
      language: Language,
      login: false,
      format: Format,
      time: Format.getTime(null, this.$store.state.language),
      date: Format.getDate(null, this.$store.state.language),
      ap: Format.getAp(null, this.$store.state.language)
    }
  },
  created () {
    this.refreshTime()
  },
  methods: {
    refreshTime () { // 시간과 날짜 1초마다 갱신
      setInterval(() => {
        this.time = this.format.getTime(null, this.$store.state.language)
        this.date = this.format.getDate(null, this.$store.state.language)
        this.ap = this.format.getAp(null, this.$store.state.language)
      }, 1000)
    },
    onLogin () { // 2.5초 후 부모에게 onLogin 이벤트 emit
      this.login = true
      setTimeout(() => {
        this.$emit('onLogin')
      }, 2500)
    }
  }
}
</script>

<style lang="scss">

#login {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  .login__user-profile {
    width: 100%;
    text-align: center;

    @media only screen and (min-width: 320px), (min-width: 768px) {
      margin-top: 25%;
    }

    @media only screen and (min-width: 1224px) {
      margin-top: 10%;
    }

    .login__user-profile__image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 3px solid #fff;
      background-color: #fff;
    }

    .login__user-profile__name {
      color: #fff;
      font-weight: bold;
      font-size: 1.5rem;
    }
  }

  .login__button-area {
    margin: auto;
    margin-top: 50px;
    text-align: center;

    .login__button-area__button {
      cursor: pointer;
      border: 1px solid #fff;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0);
      outline: none;
      color: #fff;
      font-weight: bold;
      padding: 10px 20px;
      transition: 0.3s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        color: #eee;
      }
    }

    .login__button-area__message {
      width: 100%;
      font-weight: bold;
      font-size: 2rem;
      color: #fff;
      text-align: center;
    }
  }

  .login__time-area {
    position: absolute;
    bottom: 0;
    margin: 20px;
    color: #fff;

    .login__time-area--time {
      font-weight: bold;

      @media only screen and (min-width: 320px) {
        font-size: 2.5rem;
      }

      @media only screen and (min-width: 768px), (min-width: 1224px) {
        font-size: 4rem;
      }
    }

    .login__time-area--date {
      @media only screen and (min-width: 320px) {
        font-size: 1rem;
      }

      @media only screen and (min-width: 768px), (min-width: 1224px) {
        font-size: 1.5rem;
      }
    }

    .login__time-area--ap {
      font-size: 1.5rem;
    }
  }
}

</style>
