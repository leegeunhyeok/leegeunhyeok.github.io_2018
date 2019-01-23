<template>
  <div class="title-bar" @mousedown="$emit('onDrag', $event)">
    <span class="title-bar__close-button"
      @click="$emit('onClose')">
    </span>
    <div class="title-bar__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss">

.title-bar {
  display: flex;
  width: 100%;
  height: 30px;
  border-radius: 5px 5px 0 0;
  background-color: #546e7a;

  .title-bar__close-button {
    cursor: pointer;
    width: 16px;
    height: 16px;
    margin: 7px;
    border-radius: 50%;
    color: #9a9c9d;
    background-color: #dbdee0;
    text-align: center;
    line-height: 16px;

    &:hover {
      .close-btn:hover {
        color: #9a9c9d;
        background-color: #afb1b3;
      }
    }

    &::before {
      content: 'x';
    }
  }

  .title-bar__title {
    height: 100%;
    line-height: 30px;
    color: #dbdee0;
    font-weight: bold;
  }
}

</style>
