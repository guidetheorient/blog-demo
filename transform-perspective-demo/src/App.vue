<template>
  <div id="app">
    <div class="menu-wrapper">
      <router-link
        v-for="(item , i) in $router.options.routes"
        :key="i"
        :to="item.path"
        class="link"
      >
        {{item.label}}
      </router-link>
    </div>

    <router-view class="main-wrapper"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html, body{
  margin: 0;
  padding: 0;
}
#app{
  display: flex;
  overflow: hidden;
  height: 100vh;
  background: #fffffe;
  .menu-wrapper{
    flex: 0 0 200px;
    padding: 30px 25px;
    background: #faeee7;
    overflow: auto;
    .link{
      margin-bottom: 15px;
      padding: 10px;
      line-height: 1.5;
      text-align: center;
      text-decoration: none;
      color: #33272a;
      font-weight: bold;
      border-radius: 4px;
      background: #ff8ba7;
      transition: .3s;
      &.router-link-exact-active,
      &:hover{
        background: rgba($color: #ff8ba7, $alpha: .6);
      }
    }
  }
  .main-wrapper{
    padding: 30px 50px;
    overflow: auto;
  }
}

.link {
  display: block;
  line-height: 30px;
}
.box {
  position: relative;
  height: 450px;
  border: 1px solid skyblue;
}
.box::before,
.box::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #888;
  z-index: -1;
}
.box::before {
  width: 1px;
  height: 100%;
}
.box::after {
  width: 100%;
  height: 1px;
}
.box {
  img:nth-child(1) {
    opacity: 0.15;
  }
  img:nth-child(2) {
    opacity: 0.3;
  }
  img:nth-child(3) {
    opacity: 0.45;
  }
  img:nth-child(4) {
    opacity: 0.6;
  }
  img:nth-child(5) {
    opacity: 0.85;
  }
}
</style>
