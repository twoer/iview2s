import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const index = r => require.ensure([], () => r(require('../views/index.vue')), 'home')
const home = r => require.ensure([], () => r(require('../views/home.vue')), 'home')
const page = r => require.ensure([], () => r(require('../views/page/index.vue')), 'home')

const routes = [
  {
    path: '/',
    component: index,
    children: [
      {
        path: '',
        name: 'home',
        component: home
      },
      {
        path: 'page',
        name: 'page',
        component: page
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
export default router
