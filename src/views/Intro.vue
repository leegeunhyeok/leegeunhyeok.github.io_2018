<template>
  <div id="intro">
    <div class="intro__intro-text-area">
      <div class="intro__intro-text-area__text">{{ language[$store.state.language].title }}</div>
      <p class="intro__intro-text-area__sub-text">{{ language[$store.state.language].name }}</p>
    </div>
    <div class="intro__power-btn-area">
      <img class="intro__power-btn-area__image" src="@/assets/power.png" @click="$emit('onPower')">
      <p class="intro__power-btn-area__text">{{ language[$store.state.language].power }}</p>
    </div>
    <div class="intro__language-area">
      <div class="intro__language-area__text">{{ changeLang }}</div>
      <transition name="fade" mode="out-in">
        <button class="intro__language-area__button" @click="changeLanguage()">
          {{ willChangeLanguage }}
        </button>
      </transition>
    </div>
  </div>
</template>

<script>
import Language from '@/language/IntroLanguage.js'

export default {
  data () {
    return {
      language: Language
    }
  },
  computed: {
    changeLang () {
      return this.$store.state.language === 'en' ? 'Change Language' : '언어 변경'
    },
    willChangeLanguage () {
      return this.$store.state.language === 'en' ? 'Korean' : '영어'
    }
  },
  created () {
    const path = this.$route.query.p
    if (path) {
      if (this.$router.resolve(path) !== '404') {
        this.$router.push({ path })
      } else {
        this.$router.push({ path: '/' })
      }
    }
  },
  methods: {
    changeLanguage () {
      this.$store.commit('changeLanguage', this.$store.state.language === 'en' ? 'kr' : 'en')
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/common.scss";

#intro {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #eee;
  overflow-y: auto;

  .intro__intro-text-area {
    margin-top: 10%;
    text-align: center;

    .intro__intro-text-area__text {
      font-size: 3rem;
      font-weight: bold;
      color: rgba(128, 128, 128, 0);
      -webkit-animation: fadein 1.5s 1s both;
         -moz-animation: fadein 1.5s 1s both;
          -ms-animation: fadein 1.5s 1s both;
           -o-animation: fadein 1.5s 1s both;
              animation: fadein 1.5s 1s both;
    }

    .intro__intro-text-area__sub-text {
      color: rgba(128, 128, 128, 0);
      -webkit-animation: fadein 1.5s 1s both;
         -moz-animation: fadein 1.5s 1s both;
          -ms-animation: fadein 1.5s 1s both;
           -o-animation: fadein 1.5s 1s both;
            animation: fadein 1.5s 1.5s both;
    }
  }

  .intro__power-btn-area {
    position: relative;
    width: 100%;
    margin-top: 5%;
    text-align: center;

    .intro__power-btn-area__image {
      cursor: pointer;
      border-radius: 50%;
      -webkit-transition: $transition-duration;
         -moz-transition: $transition-duration;
          -ms-transition: $transition-duration;
           -o-transition: $transition-duration;
              transition: $transition-duration;

      &:hover {
        box-shadow: 0px 0px 20px rgba(128, 128, 128, 1);
        -webkit-transform: scale(1.2);
           -moz-transform: scale(1.2);
            -ms-transform: scale(1.2);
             -o-transform: scale(1.2);
                transform: scale(1.2);
      }
    }

    .intro__power-btn-area__text {
      font-size: 1.2rem;
      color: rgba(128, 128, 128, 0);
      -webkit-animation: fadein 1s 2s alternate infinite;
         -moz-animation: fadein 1s 2s alternate infinite;
          -ms-animation: fadein 1s 2s alternate infinite;
           -o-animation: fadein 1s 2s alternate infinite;
              animation: fadein 1s 2s alternate infinite;
    }
  }

  .intro__language-area {
    position: absolute;
    bottom: 16%;
    width: 100%;
    text-align: center;

    .intro__language-area__text {
      margin-bottom: 1rem;
      font-size: 1rem;
      color: gray;
    }

    .intro__language-area__button {
      cursor: pointer;
      border: none;
      border-radius: 5px;
      outline: none;
      padding: 5px;
      box-shadow: 1px 1px 5px gray;
      color: gray;
      -webkit-transition: $transition-duration;
         -moz-transition: $transition-duration;
          -ms-transition: $transition-duration;
           -o-transition: $transition-duration;
              transition: $transition-duration;

      &:hover {
        box-shadow: 3px 3px 10px gray;
        -webkit-transform: scale(1.1);
           -moz-transform: scale(1.1);
            -ms-transform: scale(1.1);
             -o-transform: scale(1.1);
                transform: scale(1.1);
      }
    }
  }
}

@-webkit-keyframes fadein {
  100% {
    color: gray;
  }
}

@-moz-keyframes fadein {
  100% {
    color: gray;
  }
}

@-ms-keyframes fadein {
  100% {
    color: gray;
  }
}

@-o-keyframes fadein {
  100% {
    color: gray;
  }
}

@keyframes fadein {
  100% {
    color: gray;
  }
}

</style>
