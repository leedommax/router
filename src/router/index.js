import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Notification from '@/components/Notification'
import Resource from '@/components/Resource'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/notification',
      name: 'notification',
      component: Notification
    },
    {
      path: '/resource',
      name: 'resource',
      component: Resource
    }
  ]
})
