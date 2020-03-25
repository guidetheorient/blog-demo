<template>
  <div class="component-root">
    <div class="perspective parent">
      <p>perspective 属性</p>
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
    </div>
    <div class="transform parent">
      <p>transform 属性: perspective 函数</p>
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.component-root{
  margin: 20px 50px;
}

.parent {
  margin: 50px;
  border: 1px solid;
  &.perspective {
    perspective: 100px;
    .child {
      transform: rotateX(20deg);
    }
  }
  &.transform {
    .child {
      transform: perspective(100px) rotateX(20deg);
      background: lightblue;
    }
  }
}

.child {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 10px;
  background: lightcoral;
}
</style>
