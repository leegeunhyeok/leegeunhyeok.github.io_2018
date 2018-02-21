<template>
  <div id="information">
    <img src="../assets/logo.png" class="scale-image">
    <div class="information-text">
      Vue. js Base WebPage
      <br>
      <br>
      Developer: <b>Leegeunhyeok</b>
      <br>
      <br>
      Development start date: 2018/02/20
      <br>
      Recently build date: 2018/02/21
      <br>
      <br>
      Source code: <a href="https://github.com/leegeunhyeok/leegeunhyeok.github.com">Github</a>
      <br>
      <br>
      <br>
      Visit Develpoer's blog
      <br>
      <a href="http://blog.naver.com/lghlove0509">Naver</a> / <a href="http://codevkr.tistory.com/">Tistory</a>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
#information {
  width: 100%;
  height: 100%;
  text-align: center;
  overflow-y: auto;
  background-color: #eee;
}

#information img {
  margin: 20px 0px;
  width: 10rem;
}

.information-text {
  color: gray;
}

.scale-image {
  animation: scale 1s alternate infinite;
}

@keyframes scale {
  0% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1.2);
  }
}
</style>
