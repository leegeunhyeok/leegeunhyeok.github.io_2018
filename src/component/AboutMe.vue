<template>
  <div id="about">
    <img src="../assets/lgh.png">
    <div id="about-name">{{language[lang].name}}</div>
    <div id="about-birthday">{{language[lang].birth}} 2000.05.09</div>
    <div id="about-motto">{{language[lang].motto}}: {{language[lang]['motto-text']}}</div>
    <div id="about-ecudation">
      <div id="about-ecudation-title">{{language[lang].education}}</div>
      <div class="school">{{language[lang].high}}</div>
      <div class="school">{{language[lang].middle}}</div>
    </div>
  </div>  
</template>

<script>
import Language from '../language/AboutLanguage.js';

export default {
  props: ['lang'],
  data () {
    return {
      language: Language
    }
  }
}
</script>

<style>
#about {
  width: 100%;
  height: 100%;
  text-align: center;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #eee;
}

#about img {
  border: 5px solid #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 10px gray;
  margin: 10px 0;
}

#about-name {
  font-size: 1rem;
  font-weight: bold;
}

#about-birthday {
  margin-top: 5px;
  font-size: 0.8rem;
}

#about-motto {
  margin-top: 20px;
  font-size: 1rem;
  font-weight: bold;
  color: gray;
  -ms-animation: bounce 1s alternate infinite;
  -moz-animation: bounce 1s alternate infinite;
  -o-animation: bounce 1s alternate infinite;
  -webkit-animation: bounce 1s alternate infinite;
  animation: bounce 0.7s alternate infinite;
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
    -ms-transform: scale(1.2);
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
    -o-transform: scale(1.2);
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
    -moz-transform: scale(1.2);
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
    -webkit-transform: scale(1.2);
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
    transform: scale(1.2);
    color: purple;
  }
}

#about-ecudation {
  margin-top: 3rem;
}

#about-ecudation-title {
  font-weight: bold;
  font-size: 1.2rem;
}

.school {
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 1.1rem;
  color: gray;
}
</style>
