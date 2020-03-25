<template>
  <div class="container">
    <h2>translate-origin 对 rotate 的影响</h2>
    <h3>默认 center center</h3>
    <div class="box box-1">
      <img src="https://picsum.photos/200/300" alt>
      <img src="https://picsum.photos/200/300" alt>
      <img src="https://picsum.photos/200/300" alt>
      <img src="https://picsum.photos/200/300" alt>
      <img src="https://picsum.photos/200/300" alt>
    </div>

    <h3>right top(100% 0%)</h3>
    <div class="box box-2">
      <img src="https://picsum.photos/200/300" alt>
      <img src="https://picsum.photos/200/300" alt>
      <img src="https://picsum.photos/200/300" alt>
      <img src="https://picsum.photos/200/300" alt>
      <img src="https://picsum.photos/200/300" alt>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
}

.box {
  position: relative;
  height: 450px;
  border: 1px solid skyblue;
}
.box-1 {
}

.box-2 img {
  transform-origin: right top;
}

img {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -150px;
}
img:nth-child(1) {
  transform: rotate(10deg);
  opacity: 0.15;
}
img:nth-child(2) {
  transform: rotate(25deg);
  opacity: 0.3;
}
img:nth-child(3) {
  transform: rotate(35deg);
  opacity: 0.45;
}
img:nth-child(4) {
  transform: rotate(45deg);
  opacity: 0.6;
}
img:nth-child(5) {
  transform: rotate(60deg);
  opacity: 0.85;
}
</style>
