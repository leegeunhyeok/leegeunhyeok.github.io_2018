<template>
  <div id="intro">
    <div class="intro-text-area">
      <div class="intro-text">Portfolio</div>
      <p class="intro-sub-text-1">Leegeunhyeok</p>
    </div>
    <div class="power-btn-area">
      <img src="../assets/power.png" @click="$emit('onPower')">
    </div>
    <div class="intro-text-area">
      <p class="intro-sub-text-2">Press Power Button!</p>
    </div>  
  </div>
</template>

<script>
export default {

}
</script>

<style>
#intro {
  width: 100%;
  height: 100%;
  background-color: #eee;
  position: fixed;
  top: 0;
  left: 0;
}

.intro-text-area {
  margin-top: 50px;
  text-align: center;
}

.intro-text {
  color: rgba(128, 128, 128, 0);
  font-size: 3rem;
  font-weight: bold;
  animation: fadein 1.5s 1s both;
}

.intro-sub-text-1 {
  color: rgba(128, 128, 128, 0);
  animation: fadein 1.5s 1.5s both;
}

.intro-sub-text-2 {
  font-size: 1.2rem;
  color: rgba(128, 128, 128, 0);
  animation: fadein 1s 2s alternate infinite;
}

@keyframes fadein {
  100% {
    color: gray;
  }
}

.power-btn-area {
  width: 100%;
  margin-top: 150px;
  text-align: center;
  position: relative;
}

.power-btn-area img {
  cursor: pointer;
  border-radius: 50%;
  transition: 0.5s;
}

.power-btn-area img:hover {
  transform: scale(1.2); 
  box-shadow: 5px 5px 10px rgba(128, 128, 128, 0.5);
}
</style>
