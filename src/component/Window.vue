<template>
  <div id="window">
    <title-bar @onClose="$emit('onClose')" :title="data.title"></title-bar>
  </div>
</template>

<script>
import Title from './TitleBar.vue';

export default {
  props: ['data'],
  components: {
    'title-bar': Title
  }
}
</script>

<style>
#window {
  margin: 0;
  padding: 0;
  width: 45rem;
  height: 30rem;
  position: absolute;
  margin: auto;
  background-color: #eee;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  left: 50%; 
  transform:translateX(-50%);
  top: 20%;
}

@media (max-width: 768px) {
  #window {
    width: 90%;
    height: 96%;
    top: 2%;
  }
}
</style>
