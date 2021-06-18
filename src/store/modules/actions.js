import apiService from '@/service/ApiService';
import router from "../../router";

const actions = {
  async apiMockup ({ commit}) {
    commit('SET_LOADING', true)
    try {
      const { data } = await apiService.apiMockup();
      console.log(data)
      commit('SET_LOADING', false);
    } catch (error) {
      router.push('/')
      commit('SET_LOADING', false)
      console.log(error)
    }
  },

};
export default actions;
