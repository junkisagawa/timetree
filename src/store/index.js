import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId:"test",
    bankType: "hfj"
  },
  mutations: {
    setUserId (state, id) {
      state.userId = id
      console.log("ユーザー変更")
    },
    setBankType (state, type) {
      console.log("バンク変更")
      state.bankType = type
    },
  },
  getters: {
    getUserId: state => {
      return state.userId
    },
    getBankType: state => {
      return state.bankType
    },
  },
  actions: {

  }
})