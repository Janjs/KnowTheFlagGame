import Vue from 'vue'
import Vuex from 'vuex'
import messages from './modules/messages'
import VueMq from 'vue-mq'
 
Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 600,
    md: 1250,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm' // customize this for SSR
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    messages
  }
})