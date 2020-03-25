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
    label: 'TransformOriginRotate',
    component: () => import('./views/TransformOriginRotate')
  },
  {
    path: '/TransformOriginSkew',
    label: 'TransformOriginSkew',
    component: () => import('./views/TransformOriginSkew')
  },
  {
    path: '/TransformOriginScale',
    label: 'TransformOriginScale',
    component: () => import('./views/TransformOriginScale')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
