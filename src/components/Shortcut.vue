<template>
  <div class="shortcut" @click="$emit('onClick')">
    <img class="shortcut__image" :src="path">
    <div class="shortcut__name">
      <slot name="shortcut-name"></slot>
    </div>
  </div>
</template>

<script>
// 단축 아이콘

export default {
  props: {
    path: String,
    required: true
  }
}
</script>

<style lang="scss">
@import "@/assets/style/common.scss";

.shortcut {
  cursor: pointer;
  width: 8rem;
  height: 8rem;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  -ms-transition: $transition-duration;
  -moz-transition: $transition-duration;
  -o-transition: $transition-duration;
  -webkit-transition: $transition-duration;
  transition: $transition-duration;

  .shortcut__image {
    width: 4rem;
    height: 4rem;
  }

  .shortcut__name {
    color: #fff;
    text-shadow: 1px 1px 2px #000;
  }

  &:hover {
    background-color: rgba(0, 0, 0, .2);
  }
}

</style>
