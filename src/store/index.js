import Vue from 'vue'
import Vuex from 'vuex'
import SwModule from "./modules";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    viewModal: false
  },
  actions: {
    clearData({commit}){
      commit('SET_MODAl', null)
    }
  },
  mutations: {
    SET_MODAl(state, val) {
      state.viewModal = val
    }
  },
  modules: {
    SwModule
  }
})
