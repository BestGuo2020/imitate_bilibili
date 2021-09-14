import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: "首页",
    path: '/',
    component: () => import('../views/channel/Index'),
    children: [
      {
        name: "类别",
        path: 'channel/:category/:sub_category?',
        props: true
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
