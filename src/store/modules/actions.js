import apiService from '@/service/ApiService';


const actions = {
  async apiMockup ({ commit}) {
    commit('SET_LOADING', true)
    try {
      const { data } = await apiService.apiMockup();
      console.log(data)
      commit('SET_LOADING', false);
    } catch (error) {
      commit('SET_LOADING', false)
      commit('SET_DIALOG', true)
      console.log(error)
    }
  }

};
export default actions;
