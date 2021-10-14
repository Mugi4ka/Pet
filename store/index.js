export const state = () => ({
  decors: {}
})

export const mutations = {
  setDecors(state, data) {
    state.decors = data
  },
  setCurrentPage(state, data) {
    state.decors.current_page = data;
  }
}

export const actions = {
  getDecorList({ commit }, pageNumber) {
    this.$axios.$get("api/decors/get?page=" + pageNumber).then(res => {
      commit("setDecors", res)
    }).catch((error) => {
      console.log('Ошибка', error)
    })
  }
}

export const getters = {
  getDecors(state) {
    return state.decors;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
