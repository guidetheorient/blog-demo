<template>
  <div>
    <div class="stage">
      <div class="container">
        <pre>
2D cube
        </pre>
        <div class="face top">top</div>
        <div class="face left">left</div>
        <div class="face right">right</div>
      </div>
    </div>
    <div class="stage">
      <pre>
从 3D cube 的效果来看，
1. 元素旋转后，其坐标系也跟着旋转了。
2. 3D transform 的顺序不能像 2D 一样随便更换，比如下面 CSS 不能为 transform: translateZ(150px) rotateY(-90deg) ;

以左侧面为例：
&.left {
  transform: rotateY(-90deg) translateZ(150px);
}
      </pre>
      <div class="container">
        <div class="side front">前</div>
        <div class="side back">后</div>
        <div class="side left">左</div>
        <div class="side right">右</div>
        <div class="side top">上</div>
        <div class="side bottom">下</div>
      </div>
    </div>

<div class="stage stage-2" style="margin: 300px 0">
      <pre>
旋转 cube 显示额外信息
注意 height 与 translateZ 之间的关系 2 : 1
      </pre>
      <div class="container-2">
        <div class="side front">Github</div>
        <div class="side bottom">github.com</div>
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

  .face {
    position: absolute;
    height: 100px;
    width: 100px;
    &.top {
      background: lightcoral;
      transform: rotate(-45deg) skew(15deg, 15deg);
    }
    &.left {
      background: lightgreen;
      transform: rotate(15deg) skew(15deg, 15deg) translate(-50%, 100%);
    }
    &.right {
      background: lightblue;
      transform: rotate(-15deg) skew(-15deg, -15deg) translate(50%, 100%);
    }
  }
  .side{
    position: absolute;
    height: 300px;
    width: 300px;
    &.top {
      transform: rotateX(90deg) translateZ(150px);
      background: rgba($color: coral, $alpha: .6);
    }
    &.bottom{
      transform: rotateX(-90deg) translateZ(150px);
      background: rgba($color: coral, $alpha: .6);
    }
    &.left {
      transform: rotateY(-90deg) translateZ(150px);
      background: rgba($color: green, $alpha: .6);
    }
    &.right {
      transform: rotateY(90deg) translateZ(150px);
      background: rgba($color: green, $alpha: .6);
    }
    &.front{
      transform: translateZ(150px);
      background: rgba($color: blue, $alpha: .6);
    }
    &.back{
      transform: rotateY(180deg) translateZ(150px);
      background: rgba($color: blue, $alpha: .6);
    }
  }
}

.stage-2{
  perspective: 4000px;
  .container-2{
    transform-style: preserve-3d;
    transition: transform .6s;
    &:hover {
      transform: translateZ(-50px) rotateX(95deg);
    }

    .side{
      height: 40px;
      transform: all .6s;
      &.front{
        transform: translateZ(20px);
        background: blue;
      }
      &.bottom{
        transform: rotateX(-90deg) translateZ(20px);
        background: coral;
      }
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
