import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/TransformStyle',
    label: 'transform-style 的两个值 flat 与 preserve-3d 的区别',
    component: () => import('./views/TransformStyle')
  },
  {
    path: '/perspective',
    label: 'perspective',
    component: () => import('./views/Perspective')
  },
  {
    path: '/test',
    label: '测试',
    component: () => import('./views/Test')
  },
  {
    path: '/TransformOriginRotate',
    label: 'TransformOrigin + Rotate',
    component: () => import('./views/TransformOriginRotate')
  },
  {
    path: '/TransformOriginSkew',
    label: 'TransformOrigin + Skew',
    component: () => import('./views/TransformOriginSkew')
  },
  {
    path: '/TransformOriginScale',
    label: 'TransformOrigin + Scale',
    component: () => import('./views/TransformOriginScale')
  },
  {
    path: '/Cube',
    label: 'Cube',
    component: () => import('./views/Cube')
  },
  {
    path: '/BackfaceVisibility',
    label: 'backface-visibility',
    component: () => import('./views/BackfaceVisibility')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
