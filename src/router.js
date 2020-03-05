import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game'
import Leaderboard from '@/components/Leaderboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: Leaderboard
    }
  ]
})
