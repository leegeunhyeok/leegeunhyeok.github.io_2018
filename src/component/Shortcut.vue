<template>
  <div class="shortcut" @click="$emit('onClick')">
    <img :src="path">
    <div class="shortcut-name">
      <slot name="shortcut-name"></slot>
    </div>
  </div>  
</template>

<script>

export default {
  props: ['path']
}
</script>

<style>
.shortcut {
  cursor: pointer;
  width: 6rem;
  height: 6rem;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  transition: 0.5s;
}

.shortcut:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.shortcut img {
  width: 4rem;
  height: 4rem;
}

.shortcut-name {
  color: #fff;
  text-shadow: 1px 1px 2px #000;
}
</style>
