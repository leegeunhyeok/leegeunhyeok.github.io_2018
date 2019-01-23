<template>
  <div id="about">
    <img class="about__profile-image" src="@/assets/lgh.png">
    <div class="about__profile-name">{{ language[$store.state.language].name }}</div>
    <div class="about__profile-birth">{{ language[$store.state.language].birth }} 2000.05.09</div>
    <div class="about__profile-motto">{{ language[$store.state.language].motto }}: {{ language[$store.state.language]['motto-text'] }}</div>
    <div class="about__profile-education">
      <div id="about__profile-education__title">{{ language[$store.state.language].education }}</div>
      <div class="about__profile-education__text">{{ language[$store.state.language].high }}</div>
      <div class="about__profile-education__text">{{ language[$store.state.language].middle }}</div>
    </div>
  </div>
</template>

<script>
import Language from '@/language/AboutLanguage.js'

export default {
  data () {
    return {
      language: Language
    }
  }
}
</script>

<style lang="scss">

#about {
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 0px 0px 5px 5px;
  background-color: #eee;
  overflow-x: hidden;
  overflow-y: auto;

  .about__profile-image {
    border: 5px solid #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);

    @media only screen and (min-width: 320px) {
      margin-top: 12%;
    }

    @media only screen and (min-width: 768px) {
      margin-top: 14%;
    }

    @media only screen and (min-width: 1224px) {
      margin-top: 26px;
    }
  }

  .about__profile-name {
    font-size: 1rem;
    font-weight: bold;
  }

  .about__profile-birth {
    margin-top: 5px;
    font-size: .8rem;
  }

  .about__profile-motto {
    margin-top: 20px;
    font-size: 1rem;
    font-weight: bold;
    color: gray;
    -webkit-animation: bounce 1s alternate infinite;
       -moz-animation: bounce 1s alternate infinite;
        -ms-animation: bounce 1s alternate infinite;
         -o-animation: bounce 1s alternate infinite;
            animation: bounce 1s alternate infinite;
  }

  .about__profile-education {
    margin-top: 3rem;

    .about__profile-education__title {
      font-weight: bold;
      font-size: 1.1rem;
    }

    .about__profile-education__text {
      margin-bottom: 5px;
      font-weight: bold;
      font-size: 1.1rem;
      color: gray;
    }
  }
}

@-ms-keyframes bounce {
  0% {
    color: red;
  }

  25% {
    color: orange;
  }

  50% {
    color: green;
  }

  75% {
    color: blue;
  }
  100% {
    -ms-transform: scale(1.1);
    color: purple;
  }
}

@-o-keyframes bounce {
  0% {
    color: red;
  }

  25% {
    color: orange;
  }

  50% {
    color: green;
  }

  75% {
    color: blue;
  }
  100% {
    -o-transform: scale(1.1);
    color: purple;
  }
}

@-moz-keyframes bounce {
  0% {
    color: red;
  }

  25% {
    color: orange;
  }

  50% {
    color: green;
  }

  75% {
    color: blue;
  }
  100% {
    -moz-transform: scale(1.1);
    color: purple;
  }
}

@-webkit-keyframes bounce {
  0% {
    color: red;
  }

  25% {
    color: orange;
  }

  50% {
    color: green;
  }

  75% {
    color: blue;
  }
  100% {
    -webkit-transform: scale(1.1);
    color: purple;
  }
}

@keyframes bounce {
  0% {
    color: red;
  }

  25% {
    color: orange;
  }

  50% {
    color: green;
  }

  75% {
    color: blue;
  }
  100% {
    transform: scale(1.1);
    color: purple;
  }
}

</style>
