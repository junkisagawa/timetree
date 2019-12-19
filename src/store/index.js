import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId:"test",
  },
  mutations: {
    setUserId (state, id) {
      state.userId = id
    },
  },
  getters: {
    getUserId: state => {
      return state.userId
    },
  },
  actions: {
    
  }
})