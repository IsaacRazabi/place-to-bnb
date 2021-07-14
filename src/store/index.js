import Vue from 'vue'
import Vuex from 'vuex'
import {userStore} from './user.store.js'
import {stayStore} from './stay.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userStore,
    stayStore
  }
})
