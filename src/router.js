import Vue from 'vue'
import Router from 'vue-router'
import Intro from './views/Intro.vue'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import Todo from './views/todo/Todo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Intro
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/desktop',
      name: 'desktop',
      component: Main
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
