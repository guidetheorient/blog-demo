<template>
  <div class="container">
    <h2>translate-origin 对 scale 的影响</h2>
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
  transform: scale(0.8);
}
img:nth-child(2) {
  transform: scale(0.6);
}
img:nth-child(3) {
  transform: scale(0.45);
}
img:nth-child(4) {
  transform: scale(0.3);
}
img:nth-child(5) {
  transform: scale(0.15);
}
</style>
