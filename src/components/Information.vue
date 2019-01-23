<template>
  <div id="information">
    <div class="information__wrap">
      <img class="information__logo-image" src="@/assets/logo.png">
      <div class="information__detail">
        <div class="information__detail__title">
          {{ language[$store.state.language].info}}
        </div>
        <div class="information__detail__text">
          {{ language[$store.state.language].developer }}: <b>{{language[$store.state.language].user}}</b>
        </div>
        <div class="information__detail__text">
        {{ language[$store.state.language].devstart }}: <b>2018/02/20</b>
        </div>
        {{ language[$store.state.language].lastbuild }}: <b>{{ lastBuild }}</b>
        <div class="information__detail__text-source">
        {{ language[$store.state.language].source }}: <a href="https://github.com/leegeunhyeok/leegeunhyeok.github.com">Github</a>
        </div>
        <div class="information__link-area">
          <div>{{ language[$store.state.language].blog }}</div>
          <a class="information__link-area__link"
            href="http://blog.naver.com/lghlove0509"
          >{{ language[$store.state.language].naver }}</a> /
          <a class="information__link-area__link"
            href="http://codevkr.tistory.com/"
          >{{ language[$store.state.language].tistory }}</a>
        </div>
        <button class="information__detail__back-button"
          @click="$emit('onClose')"
        >{{ back }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import Language from '@/language/InformationLanguage.js'

export default {
  data () {
    return {
      language: Language,
      lastBuild: ''
    }
  },
  created () {
    const lastBuildDate = new Date($BUILD$)
    const year = lastBuildDate.getFullYear()
    const month = this.appendZero(lastBuildDate.getMonth() + 1)
    const date = this.appendZero(lastBuildDate.getDate())
    this.lastBuild = `${year}/${month}/${date}`
  },
  computed: {
    back () {
      return this.$store.state.language === 'en' ? 'Back' : '뒤로'
    }
  },
  methods: {
    appendZero (number) {
      if (('' + number).length === 1) {
        return '0' + number
      } else {
        return number
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/common.scss";

#information {
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 0px 0px 5px 5px;
  background-color: #eee;

  .information__wrap {
    width: 100%;
    height: 100%;
    overflow-y: auto;

    @media only screen and (min-width: 320px) {
      padding-top: 10%;
    }

    @media only screen and (min-width: 768px) {
      padding-top: 5%;
    }

    @media only screen and (min-width: 1224px) {
      padding-top: 10px;
    }

    .information__logo-image {
      width: 10rem;
      -webkit-transform: scale(.5);
        -moz-transform: scale(.5);
          -ms-transform: scale(.5);
          -o-transform: scale(.5);
              transform: scale(.5);
      -webkit-animation: scale 1s alternate infinite;
        -moz-animation: scale 1s alternate infinite;
          -ms-animation: scale 1s alternate infinite;
          -o-animation: scale 1s alternate infinite;
              animation: scale 1s alternate infinite;
    }

    .information__detail {
      color: gray;

      .information__detail__title {
        margin-top: 10px;
        margin-bottom: 20px;
        color: #41b883;
        font-weight: bold;
        font-size: 1.2rem;
      }

      .information__detail__text {
        margin: 5px 0;
      }

      .information__detail__text-source {
        margin: 25px 0;
      }
    }

    .information__link-area {
      margin-top: 20px;
    }

    .information__detail__back-button {
      cursor: pointer;
      outline: none;
      border: none;
      border-radius: 5px;
      margin: 20px 0;
      padding: 5px 10px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
      -webkit-transition: $transition-duration;
        -moz-transition: $transition-duration;
          -ms-transition: $transition-duration;
          -o-transition: $transition-duration;
              transition: $transition-duration;

      &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
      }
    }
  }
}

@-webkit-keyframes scale {
  0% {
    transform: scale(.5);
  }

  100% {
    transform: scale(1.0);
  }
}

@-moz-keyframes scale {
  0% {
    transform: scale(.5);
  }

  100% {
    transform: scale(1.0);
  }
}

@-ms-keyframes scale {
  0% {
    transform: scale(.5);
  }

  100% {
    transform: scale(1.0);
  }
}

@-o-keyframes scale {
  0% {
    transform: scale(.5);
  }

  100% {
    transform: scale(1.0);
  }
}

@keyframes scale {
  0% {
    transform: scale(.5);
  }

  100% {
    transform: scale(1.0);
  }
}

</style>
