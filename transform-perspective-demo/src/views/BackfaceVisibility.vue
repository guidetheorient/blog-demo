<template>
  <div>
    <div class="stage">
      <pre>
1. 元素有透明度
2. 默认 backface-visibility: visible
      </pre>
      <div class="container">
        <div class="side has-opacity  front">前</div>
        <div class="side has-opacity back">后</div>
        <div class="side has-opacity left">左</div>
        <div class="side has-opacity right">右</div>
        <div class="side has-opacity top">上</div>
        <div class="side has-opacity bottom">下</div>
      </div>
    </div>

    <div class="stage" style="margin-top: 200px">
      <pre>
1. 元素有透明度
2. 设置 backface-visibility: hidden
      </pre>
      <div class="container">
        <div class="side has-opacity front" style="backface-visibility: hidden">前</div>
        <div class="side has-opacity back"  style="backface-visibility: hidden">后</div>
        <div class="side has-opacity left"  style="backface-visibility: hidden">左</div>
        <div class="side has-opacity right"  style="backface-visibility: hidden">右</div>
        <div class="side has-opacity top" style="backface-visibility: hidden">上</div>
        <div class="side has-opacity bottom"  style="backface-visibility: hidden">下</div>
      </div>
    </div>

  <div class="stage" style="margin-top: 200px">
      <pre>
1. 元素没有透明度
2. 设置 backface-visibility: visible

如果元素不透明，设置了 visible 也是无效的
      </pre>
      <div class="container">
        <div class="side front" style="backface-visibility: hidden;">前</div>
        <div class="side back"  style="backface-visibility: hidden;" >后</div>
        <div class="side left"  style="backface-visibility: hidden; ">左</div>
        <div class="side right"  style="backface-visibility: hidden;">右</div>
        <div class="side top" style="backface-visibility: hidden;">上</div>
        <div class="side bottom"  style="backface-visibility: hidden;">下</div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.stage {
  margin: 50px 100px;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  .container {
    transform-style: preserve-3d;
    &:hover {
      animation: spin 5s linear infinite;
    }
  }
  .side{
    position: absolute;
    height: 300px;
    width: 300px;
    &.top {
      transform: rotateX(90deg) translateZ(150px);
      background:  coral;
    }
    &.bottom{
      transform: rotateX(-90deg) translateZ(150px);
      background:  coral;
    }
    &.left {
      transform: rotateY(-90deg) translateZ(150px);
      background:  green;
    }
    &.right {
      transform: rotateY(90deg) translateZ(150px);
      background:  green;
    }
    &.front{
      transform: translateZ(150px);
      background:  blue;
    }
    &.back{
      transform: rotateY(180deg) translateZ(150px);
      background:  blue;
    }
    &.has-opacity {
      opacity: .6;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate3d(0, 0, 0, 360deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 360deg);
  }
}
</style>
