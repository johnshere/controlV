import * as types from './mutation-types'

const state = {
  loginName: 'lisi'
}
const getters = {
  getLoginName () {
    return state.loginName
  }
}
const mutations = {
  [types.QRCODE.COMMIT_LOGINNAME] (state, res) {
    state.loginName = res
  }
}
const actions = {
  changeLoginName ({ commit }, res) {
    setTimeout(() => {
      commit('commitLoginName', res)
    }, 1000)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
