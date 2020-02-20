import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game'
import Messages from '@/components/Messages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    }
  ]
})
