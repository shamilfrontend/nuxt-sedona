export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const getters = {
  isAuth(state) {
    return Boolean(state.token)
  }
}

export const actions = {
  async login({ dispatch }, formData) {
    const token = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(JSON.stringify(formData))
      }, 1000)
    })
    dispatch('setToken', token)
  },

  setToken({ commit }, token) {
    commit('setToken', token)
  },

  logout({ commit }) {
    commit('clearToken')
  }
}
