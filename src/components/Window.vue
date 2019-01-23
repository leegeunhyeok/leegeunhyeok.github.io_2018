<template>
  <div id="window">
    <title-bar @onClose="$emit('onClose')" :title="data.title"></title-bar>
    <div class="window__content-area">
      <transition name="fade" mode="out-in">
        <project-view v-if="type === 0"/>
        <about-view v-else-if="type === 1"/>
        <activity-view v-else-if="type === 2"/>
        <terminal-view v-else-if="type === 3"
          @shutdown="$emit('shutdown')"
          @onClose="$emit('onClose')"/>
        <browser-view v-else-if="type === 4"/>
        <information-view @onClose="$emit('onClose')" v-else/>
      </transition>
    </div>
  </div>
</template>

<script>
import Title from '@/components/TitleBar.vue'

import Project from '@/components/Project.vue'
import About from '@/components/AboutMe.vue'
import Activity from '@/components/Activity.vue'
import Terminal from '@/components/Terminal.vue'
import Browser from '@/components/Browser.vue'
import Information from '@/components/Information.vue'

export default {
  props: {
    data: Object,
    type: Number // type: 0(폴더), 1(터미널), 2(브라우저), 3(정보)
  },
  components: {
    'title-bar': Title,
    'project-view': Project,
    'about-view': About,
    'activity-view': Activity,
    'terminal-view': Terminal,
    'browser-view': Browser,
    'information-view': Information
  }
}
</script>

<style lang="scss">
@import "@/assets/style/common.scss";

#window {
  position: absolute;
  padding: 0;
  margin: 0;
  margin: auto;
  width: 45rem;
  height: 30rem;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  @media only screen and (min-width: 320px) {
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 50px);
    -webkit-transform: none;
       -moz-transform: none;
        -ms-transform: none;
         -o-transform: none;
            transform: none;
  }

  @media only screen and (min-width: 768px) {
    width: 65%;
    height: 60%;
    top: calc(50% - 50px);
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
       -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
         -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }

  @media only screen and (min-width: 1224px) {
    width: 45rem;
    height: 30rem;
    top: calc(50% - 50px);
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
       -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
         -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }

  .window__content-area {
    position: absolute;
    top: 30px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
  }
}

.item {
  width: 90%;
  margin: 20px auto;
  padding: 20px 0;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  .item__more-button {
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
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

  .item__title {
    margin: 10px 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: dodgerblue;
  }

  .item__image {
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);

    @media only screen and (min-width: 320px), (max-width: 768px) {
      width: 80%;
      height: 50%;
    }

    @media only screen and (min-width: 1224px) {
      width: 50%;
      height: 30%;
    }
  }

  .item__info {
    margin: 10px 0px;

    .item__info__text {
      padding: 5px;
    }

    .item__info__text--blue {
      color: dodgerblue;
    }
  }

  .item__used-language {
    padding: 0;
    margin: 10px 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: gray;
  }
}

</style>
