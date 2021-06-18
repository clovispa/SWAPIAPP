import Vue from 'vue'
import Vuex from 'vuex'
import SwModule from "./modules";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    SwModule
  }
})
