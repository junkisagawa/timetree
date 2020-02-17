import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userKey:"",
  },
  mutations: {
    setUserKey (state, id) {
      state.userKey = id
      console.log("ユーザー変更")
    },
  },
  getters: {
    getUserKey: state => {
      return state.userKey
    },
  },
  actions: {

  }
})