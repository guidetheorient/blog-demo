<template>
  <div class="root">
    <div class="grid">
      <pre>
1. container 元素创建了 3D 空间
2. 其子元素使用了 transform 变换，并且设置了 transform-style: preserve-3d;
3. 其孙子元素也使用了 transform 变换

所以子孙元素都表现出了 3D 效果
      </pre>
      <pre>
.container{
  perspective: 500px;
}

.element{
  transform: rotateY(20deg);
  transform-style: preserve-3d;
}

img{
  animation: swing 3s linear infinite;
}
      </pre>
      <div class="container preserve-3d">
        <div class="element">
          <img src="https://picsum.photos/200/300" >
        </div>
      </div>
    </div>

    <div class="grid">
      <pre>
1. container 元素创建了 3D 空间
2. 其子元素使用了 transform 变换，使用了默认值 transform-style: flat;
3. 其孙子元素也使用了 transform 变换

所以子元素有 3D 效果，但孙子元素平铺在了子元素的 2D 平面
      </pre>
      <pre>
.container{
  perspective: 500px;
}

.element{
  transform: rotateY(20deg);
}

img{
  animation: swing 3s linear infinite;
}
      </pre>
      <div class="container flat">
        <div class="element">
          <img src="https://picsum.photos/200/300" >
        </div>
      </div>
    </div>

    <div class="grid">
      <pre>
1. container 元素创建了 3D 空间
2. 其子元素未使用 transform 变换
3. 其孙子元素使用了 transform 变换

从效果来看：
1. 如果子元素没有进行 transform，但孙子元素有的话，此时孙子元素应该是忽略掉子元素，直接受 contianer 的元素的影响。
2. 此时的效果和第一个例子是有区别的：img 元素旋转过程中始终位于 .element 上方，即不会穿过半透明的 .element 元素。如果此时设置 container 或者 .element 元素的 transform-style: preserve-3d，可以看到图片会穿过 .element 元素。
      </pre>
      <pre>
.container{
  perspective: 500px;
}

.element{
  transform: none
}

img{
  animation: swing 3s linear infinite;
}
      </pre>
      <div class="container">
        <div class="element" style="transform: none">
          <img src="https://picsum.photos/200/300" >
        </div>
      </div>
    </div>

    <div class="grid">
            <pre>
1. container 元素创建了 3D 空间
2. 其子元素使用了 rotateY(0deg) 变换;
3. 其孙子元素也使用了 transform 变换

从效果来看，子元素只要设置了 transform，即使值为 0，也认为是进行了 transform，所以孙子元素仍然会受 .element transform-style 属性的影响
      </pre>
      <pre>
.container{
  perspective: 500px;
}

.element{
  transform: rotateY(0deg)
}

img{
  animation: swing 3s linear infinite;
}
      </pre>
      <div class="container">
        <div class="element" style="transform: rotateY(0deg)">
          <img src="https://picsum.photos/200/300" >
        </div>
      </div>
    </div>

    <div class="grid">
      <pre>
最后测试一下四层嵌套元素，分为前后两个从效果来看，如果需要子元素也位于 3D 空间中，那么它的直接父元素必须设置 transform-style: preserve-3d 的。如果某个层级的元素没有进行 transform(transform: none)，那么它的下级元素同样会忽略这个层级的元素，受它的祖先元素的影响。
      </pre>
      <pre>
.container{
  perspective: 500px;
}

.element-wrapper{
  transform: rotateX(20deg);
  background: rgba(255, 0, 0, .5);
  transform-style: preserve-3d;
}

.element{
  transform: rotateY(20deg);
  transform-style: preserve-3d;
}

img{
  animation: swing 3s linear infinite;
}
      </pre>
      <div class="container">
        <div class="element-wrapper">
          <div class="element" style="transform-style: preserve-3d">
            <img src="https://picsum.photos/200/300" >
          </div>
        </div>
      </div>
    </div>

    <div class="grid">
      <pre>
这个示例为上一个示例的对比示例，与前一个示例的区别仅为 .element 元素未设置 transform-style: preserve-3d;
      </pre>
      <pre>
.container{
  perspective: 500px;
}

.element-wrapper{
  transform: rotateX(20deg);
  background: rgba(255, 0, 0, .5);
  transform-style: preserve-3d;
}

.element{
  transform: rotateY(20deg);
}

img{
  animation: swing 3s linear infinite;
}
      </pre>
      <div class="container">
        <div class="element-wrapper" style="transform-style: preserve-3d">
          <div class="element">
            <img src="https://picsum.photos/200/300" >
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

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
  &.flat{
    .element{
      transform-style: flat;
    }
  }
  &.preserve-3d{
    .element{
      transform-style: preserve-3d;
    }
  }
}

.element-wrapper{
  transform: rotateX(20deg);
  transform-style: preserve-3d;
  background: rgba(255, 0, 0, .5);
}

.element{
  background: rgba(0, 0, 0, .3);
  transform: rotateY(20deg);
}

img{
  display: block;
  transform-origin: top;
  animation: swing 3s linear infinite;
}

@keyframes swing {
  0%{
    transform: rotateX(-30deg);
  }
  50%{
    transform: rotateX(30deg);
  }
  100%{
    transform: rotateX(-30deg);
  }
}
</style>
