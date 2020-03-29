<template>
  <div class="root">
    <div class="grid perspective">
      <p>perspective 属性</p>
      <pre>
直接在父级使用 perspective: 100px 属性，可以创建一个子元素公用的 3D 空间
      </pre>
      <pre>
.perspective {
  perspective: 100px;
  .child {
    transform: rotateX(20deg);
  }
}
      </pre>
      <div class="container">
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
      </div>
    </div>

    <div class="grid transform">
      <p>transform 属性: perspective 函数</p>
      <pre>
在元素自身使用transform perspective(100px) function，创建一个对自身生效的 3D 空间
      </pre>
      <pre>
.transform {
  .child {
    transform: perspective(100px) rotateX(20deg);
    background: lightblue;
  }
}
      </pre>
      <div class="container">
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
      </div>
    </div>

    <div class="grid perspective">
      <p>perspective 属性</p>
      <pre>
这个示例用于调整浏览器窗口宽度，查看折行子元素的变形效果
共用 3D 空间时，中间部分变形小，上下变形比较大。
要理解这个效果，只需要拿一张卡片正对着自己，分别放在上、中、下三个位置，感受一下即可。
      </pre>
      <pre>
.perspective {
  perspective: 100px;
  .child {
    transform: rotateX(20deg);
  }
}
      </pre>
      <div class="container">
        <div class="child child-l"></div>
        <div class="child child-l"></div>
        <div class="child child-l"></div>
        <div class="child child-l"></div>
        <div class="child child-l"></div>
      </div>
    </div>

    <div class="grid transform">
      <p>transform 属性: perspective 函数</p>
      <pre>
.transform {
  .child {
    transform: perspective(100px) rotateX(20deg);
    background: lightblue;
  }
}
      </pre>
      <div class="container">
        <div class="child child-l"></div>
        <div class="child child-l"></div>
        <div class="child child-l"></div>
        <div class="child child-l"></div>
        <div class="child child-l"></div>
      </div>
    </div>

    <div class="grid">
      <p>perspective 与 translateZ</p>
      <pre>
translateZ 从 -200px 到 200px
      </pre>
      <pre>
.container{
  perspective: 500px;
}
      </pre>
      <div class="container container-center">
        <img src="https://picsum.photos/200/200" class="origin-img" alt="">
        <img src="https://picsum.photos/200/200" class="transform-img" alt="">
      </div>
    </div>

    <div class="grid">
      <p>perspective 与 translateZ</p>
      <pre>
img 的 perspective 从 300px 到 1500px；translateZ(100px) 保持不变。
从效果来看，perspective 与 translateZ 除了都是一种 Z 轴距离之外，并没有什么相似之处。
      </pre>
      <div class="container container-center" style="margin-top: 100px" >
        <img src="https://picsum.photos/200/200" class="origin-img" alt="">
        <img src="https://picsum.photos/200/200" ref="perspectiveContainer" class="perspective-img" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  mounted () {
    const el = this.$refs.perspectiveContainer
    console.log(el)
    if (el) {
      anime({
        targets: el,
        perspective: ['300px', '1500px'],
        translateZ: ['100px', '100px'],
        duration: 5000,
        loop: true,
        delay: 2000,
        easing: 'linear'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.root{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

pre{
  white-space: pre-wrap;
  word-wrap: break-word;
}

.grid{
  width: 40%;
  background: #faeee7;
  border-radius: 4px;
  padding: 20px;
  margin: 40px 0;
}

.container{
  width: 300px;
  height: 300px;
  perspective: 500px;
  border: 1px solid lightblue;
}

.container{
  width: auto;
  height: auto;
}

.perspective {
  perspective: 100px;
  .child {
    transform: rotateX(20deg);
  }
}

.transform {
  .child {
    transform: perspective(100px) rotateX(20deg);
    background: lightblue;
  }
}

.child {
  position: relative;
  display: inline-block;
  width: calc(20% - 20px);
  height: 100px;
  margin: 10px;
  background: lightcoral;
  &.child-l{
    width: 45%;
    height: 150px;
  }
}

.container-center{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

%img{
  width: 200px;
  height: 200px;
}
.origin-img{
  @extend %img;
  opacity: .6;
}
.transform-img{
  @extend %img;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
  animation: translateZ-animation 5s linear 2s infinite;
}

@keyframes translateZ-animation {
  0% {
    transform: translateZ(-200px);
  }
  50% {
    transform: translateZ(0);
  }
  100% {
    transform: translateZ(200px);
  }
}

.perspective-img{
  @extend .transform-img;
  transform: translateZ(100px);
  animation: none;
}
</style>
