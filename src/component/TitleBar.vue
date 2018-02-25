<template>
  <div class="title-bar" @mousedown="$emit('onDrag', $event)">
    <span class="close-btn" @click="$emit('onClose')"></span>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>
.title-bar {
  width: 100%;
  height: 30px;
  background-color: #546e7a; 
  border-radius: 5px 5px 0px 0px;
  display: flex;
}

.close-btn {
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin: 7px;
  border-radius: 50%;
  color: #9a9c9d;
  background-color: #dbdee0;
  text-align: center;
  line-height: 16px;
}

.close-btn:hover {
  color: #9a9c9d;
  background-color: #afb1b3;
}

.close-btn::before {
  content: 'x';
}

.title {
  height: 100%;
  line-height: 30px;
  color: #dbdee0;
  font-weight: bold;
}
</style>
